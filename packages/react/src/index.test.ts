import { expect, it } from 'vitest';

import * as Exports from './';

it('should expose correct exports', () => {
  expect(Object.keys(Exports).sort()).toMatchInlineSnapshot(`
    [
      "Client",
      "Context",
      "ControlsContainer",
      "FullscreenButton",
      "HttpError",
      "LivepeerConfig",
      "MediaControllerProvider",
      "PictureInPictureButton",
      "PlayButton",
      "Player",
      "Poster",
      "Progress",
      "StudioLivepeerProvider",
      "ThemeProvider",
      "TimeDisplay",
      "Title",
      "Volume",
      "b64Decode",
      "b64Encode",
      "b64UrlDecode",
      "b64UrlEncode",
      "clearClient",
      "createAsset",
      "createClient",
      "createReactClient",
      "createStorage",
      "createStream",
      "deepMerge",
      "defaultQueryClient",
      "defaultStudioConfig",
      "defaultTheme",
      "defaultTranscodingProfiles",
      "getAsset",
      "getAssetMetrics",
      "getCssText",
      "getLivepeerProvider",
      "getPlaybackInfo",
      "getStream",
      "getStreamSession",
      "getStreamSessions",
      "noopStorage",
      "pick",
      "prefetchAsset",
      "prefetchAssetMetrics",
      "prefetchPlaybackInfo",
      "prefetchPlayer",
      "prefetchStream",
      "prefetchStreamSession",
      "prefetchStreamSessions",
      "studioProvider",
      "styling",
      "updateAsset",
      "updateStream",
      "useAsset",
      "useAssetMetrics",
      "useClient",
      "useCreateAsset",
      "useCreateStream",
      "useLivepeerProvider",
      "useMediaController",
      "useStream",
      "useStreamSession",
      "useStreamSessions",
      "useTheme",
      "useUpdateAsset",
      "useUpdateStream",
      "watchLivepeerProvider",
    ]
  `);
});
