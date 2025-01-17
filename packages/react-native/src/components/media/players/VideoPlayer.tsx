import {
  ControlsOptions,
  DEFAULT_AUTOHIDE_TIME,
  MediaControllerState,
  MediaControllerStore,
} from '@livepeer/core-react';
import { VideoPlayerProps as VideoPlayerCoreProps } from '@livepeer/core-react/components';
import {
  AVPlaybackStatus,
  Audio,
  AudioMode,
  InterruptionModeAndroid,
  InterruptionModeIOS,
  ResizeMode,
  Video,
  VideoFullscreenUpdate,
  VideoFullscreenUpdateEvent,
} from 'expo-av';
import * as React from 'react';

import { StyleSheet } from 'react-native';

import { StoreApi, UseBoundStore } from 'zustand';

import { MediaControllerContext } from '../../../context';
import { PosterSource } from '../Player';
import { MediaElement } from '../types';

import { canPlayMediaNatively } from './canPlayMediaNatively';

const defaultProgressUpdateInterval = 20;

export type VideoPlayerProps = VideoPlayerCoreProps<
  MediaElement,
  PosterSource
> &
  VideoCustomizationProps;

export type VideoCustomizationProps = {
  audioMode?: Partial<AudioMode>;
};

export const VideoPlayer = React.forwardRef<MediaElement, VideoPlayerProps>(
  (
    { src, autoPlay, loop, muted, objectFit, options, poster, audioMode },
    ref,
  ) => {
    // typecast the context so that we can have video/audio-specific controller states
    const store = React.useContext(MediaControllerContext) as UseBoundStore<
      MediaControllerStore<MediaElement>
    >;

    React.useEffect(() => {
      Audio.setAudioModeAsync({
        ...audioMode,
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        interruptionModeIOS: InterruptionModeIOS.DuckOthers,
        interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
        staysActiveInBackground: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: true,
      });
    }, [audioMode]);

    const { hasPlayed, playing } = store();

    const onError = async (_e: string) => {
      // await new Promise((r) => setTimeout(r, 1000 * ++retryCount));
      // await state._element?.unloadAsync();
      // TODO add error handling
    };

    React.useEffect(() => {
      store.setState({ muted: Boolean(muted) });
    }, [muted, store]);

    React.useEffect(() => {
      const removeEffectsFromStore = addEffectsToStore(
        store,
        store.getState()._element,
        { autohide: options?.autohide ?? DEFAULT_AUTOHIDE_TIME },
      );

      return () => {
        removeEffectsFromStore?.();
      };
    }, [store, options?.autohide]);

    const filteredSources = React.useMemo(() => {
      return src?.filter((s) => s?.mime && canPlayMediaNatively(s));
    }, [src]);

    const onPlaybackStatusUpdate = React.useCallback(
      async (status?: AVPlaybackStatus) => {
        if (status?.isLoaded) {
          store.setState(({ buffered, duration, hasPlayed }) => ({
            hasPlayed: hasPlayed || status.positionMillis > 0,
            volume: status.volume,
            canPlay: true,
            playing: status.isPlaying,
            progress: status.positionMillis / 1000,
            duration: status.durationMillis
              ? status.durationMillis / 1000
              : duration,
            playbackRate: status.rate,
            buffered: status.playableDurationMillis
              ? status.playableDurationMillis / 1000
              : buffered,

            isVolumeChangeSupported: true,

            stalled: status.shouldPlay && !status.isPlaying,
            waiting: status.isBuffering,
          }));
        } else if (status) {
          store.setState({
            loading: !status.error,
            error: status.error,
            canPlay: false,
          });
        }
      },
      [store],
    );

    const onFullscreenUpdate = React.useCallback(
      async (status?: VideoFullscreenUpdateEvent) => {
        store.setState(() => ({
          fullscreen:
            status?.fullscreenUpdate !==
            VideoFullscreenUpdate.PLAYER_DID_DISMISS,
        }));
      },
      [store],
    );

    return (
      <Video
        source={{ uri: filteredSources?.[0]?.src ?? '' }}
        style={styles.videoWrapper}
        isLooping={loop}
        resizeMode={
          objectFit === 'contain' ? ResizeMode.CONTAIN : ResizeMode.COVER
        }
        usePoster={Boolean(poster)}
        posterSource={poster}
        // eslint-disable-next-line react-native/no-inline-styles
        posterStyle={{
          resizeMode: objectFit === 'contain' ? 'contain' : 'cover',
        }}
        useNativeControls={false}
        progressUpdateIntervalMillis={defaultProgressUpdateInterval}
        onFullscreenUpdate={onFullscreenUpdate}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        onError={onError}
        shouldPlay={hasPlayed ? playing : autoPlay}
        ref={ref}
        isMuted={muted}
      />
    );
  },
);

VideoPlayer.displayName = 'VideoPlayer';

export const styles = StyleSheet.create({
  videoWrapper: {
    height: '100%',
    width: '100%',
  },
});

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let previousPromise: Promise<any> | boolean | null;

const addEffectsToStore = <TElement extends MediaElement>(
  store: StoreApi<MediaControllerState<TElement>>,
  element: MediaElement | null,
  options: Required<Pick<ControlsOptions, 'autohide'>>,
) => {
  // add effects to store changes
  return store.subscribe(async (current, prev) => {
    try {
      if (element) {
        if (previousPromise) {
          try {
            // wait for the previous promise to execute before handling the next effect
            await previousPromise;
          } catch (e) {
            console.warn(e);
          }
        }

        if (
          current._requestedPlayPauseLastTime !==
          prev._requestedPlayPauseLastTime
        ) {
          if (!current.playing) {
            previousPromise = element.playAsync();
          } else {
            previousPromise = element.pauseAsync();
          }
        }

        if (current.muted !== prev.muted) {
          previousPromise = element.setIsMutedAsync(current.muted);
          if (!current.muted) {
            previousPromise = element.setVolumeAsync(1);
          }
        }

        if (current._requestedRangeToSeekTo !== prev._requestedRangeToSeekTo) {
          previousPromise = element.setStatusAsync({
            positionMillis: current._requestedRangeToSeekTo * 1000, // convert to ms
          });
        }

        // user has interacted with element
        if (
          options.autohide &&
          current._lastInteraction !== prev._lastInteraction
        ) {
          await delay(options.autohide);

          if (
            !store.getState().hidden &&
            current._lastInteraction === store.getState()._lastInteraction
          ) {
            store.getState().setHidden(true);
          }
        }

        if (
          current._requestedFullscreenLastTime !==
          prev._requestedFullscreenLastTime
        ) {
          const isFullscreen = current.fullscreen;

          if (!isFullscreen) {
            previousPromise = element.presentFullscreenPlayer();
          } else {
            previousPromise = element.dismissFullscreenPlayer();
          }
        }
      }
    } catch (e) {
      console.warn(e);
    }
  });
};
