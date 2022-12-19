import { styling } from 'livepeer/media/browser/styling';
import * as React from 'react';

export const OfflineStreamPlaybackDisplayError: React.FC = () => (
  <div className={styling.controlsContainer.error.background()}>
    <OfflineIcon />
    <div className={styling.controlsContainer.error.title()}>
      Stream is offline
    </div>
    <div className={styling.controlsContainer.error.text()}>
      Playback will start automatically once stream has started.
    </div>
  </div>
);

const OfflineIcon = () => (
  <svg
    width="324"
    height="140"
    viewBox="0 0 324 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M82 8.30584L239.745 5.68359L242.335 118.151L83.9414 118.502L82 8.30584Z"
      fill="#97F2EF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M66 124.072L254.898 124L258 129L68.3248 128.971L66 124.072Z"
      fill="#97F2EF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M94.2062 111.151L92.5204 15.5292L229.556 14.1187L231.803 111.716L94.2062 111.151Z"
      fill="#4CC38A"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M185 58.1481C185 70.8507 174.703 82 162 82C153.04 82 145.277 77.3008 141.48 70.0741C141.421 69.9609 141.362 69.8472 141.305 69.7328C140.965 69.0558 140.782 66.2859 140.704 64.963C140.278 66.2407 140.43 67.3765 140.507 67.9444C139.533 65.4642 139 62.7423 139 59.8519C139 47.1493 149.297 36 162 36C166.913 36 171.467 37.4132 175.204 39.8814C175.63 41.0012 176.226 43.6667 175.204 45.3704C176 44.8025 177.651 43.3259 177.888 41.963C182.27 45.9317 185 51.6082 185 58.1481Z"
      fill="#141716"
    />
    <path
      d="M140.704 64.963C140.278 66.2407 140.43 67.3765 140.507 67.9444C140.746 68.5556 141.013 69.1521 141.305 69.7328C140.965 69.0558 140.782 66.2859 140.704 64.963Z"
      fill="#141716"
    />
    <path
      d="M171 60.5003L156 70V60.6462V51L166.104 57.3994L171 60.5003Z"
      stroke="#4CC38A"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M101.096 100.921L176.5 101.109M219.885 101.163L198.193 101.136"
      stroke="#141716"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M148.197 101.161C148.197 103.28 146.472 104.998 144.344 104.998C142.215 104.998 140.49 103.28 140.49 101.161C140.49 99.042 142.215 97.3242 144.344 97.3242C146.472 97.3242 148.197 99.042 148.197 101.161Z"
      fill="#DF0087"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M148.197 101.161C148.197 103.28 146.472 104.998 144.344 104.998C142.215 104.998 140.49 103.28 140.49 101.161C140.49 99.042 142.215 97.3242 144.344 97.3242C146.472 97.3242 148.197 99.042 148.197 101.161Z"
      stroke="#141716"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M93.7252 111.754L91.7752 14.7408L230.275 13.7374L232.225 112.245L93.7252 111.754Z"
      stroke="#141716"
      stroke-width="2.5"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M49.0868 58.0273L49.9632 88.7907L19.4093 88.9852L19.0201 58.6113L49.0868 58.0273ZM51 89.7922L50.0663 57L18 57.6228L18.4147 90L51 89.7922Z"
      fill="#434545"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M296.114 25.1881L297.132 60.7679L261.637 60.9929L261.185 25.8636L296.114 25.1881ZM298.336 61.9263L297.252 24L260 24.7203L260.482 62.1666L298.336 61.9263Z"
      fill="#434545"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M293.138 78.0001L293 67.2077L303.689 67.0001L304 77.9308L293.138 78.0001ZM304.309 78.2288L292.842 78.3019L292.696 66.9135L303.98 66.6943L304.309 78.2288ZM303.071 67.6482L293.644 67.8313L293.766 77.3599L303.346 77.2989L303.071 67.6482ZM303.362 67.3425L293.34 67.5372L293.47 77.6618L303.654 77.5969L303.362 67.3425Z"
      fill="#434545"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M303.362 67.3424L303.654 77.5969L293.47 77.6617L293.34 67.5371L303.362 67.3424ZM304 77.9307L303.689 67L293 67.2076L293.138 78L304 77.9307Z"
      fill="#434545"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M289.594 66.2179L289.78 72.7435L283.299 72.7847L283.216 66.3418L289.594 66.2179ZM290 72.9559L289.802 66L283 66.1321L283.088 73L290 72.9559Z"
      fill="#434545"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M290.309 73.254L282.792 73.3019L282.696 65.838L290.093 65.6943L290.309 73.254ZM289.594 66.218L289.78 72.7435L283.299 72.7848L283.216 66.3419L289.594 66.218ZM289.471 72.4455L283.595 72.4829L283.52 66.636L289.303 66.5237L289.471 72.4455ZM283.088 73.0001L283 66.1322L289.802 66.0001L290 72.956L283.088 73.0001Z"
      fill="#434545"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M47.442 36.3017L47.3038 47.0941L57.9925 47.3017L58.3038 36.371L47.442 36.3017ZM58.6124 36.0729L47.1459 35.9998L47 47.3883L58.284 47.6074L58.6124 36.0729ZM57.3747 46.6536L47.9476 46.4704L48.0697 36.9419L57.6496 37.0029L57.3747 46.6536ZM57.6661 46.9593L47.6438 46.7646L47.7736 36.64L57.9582 36.7048L57.6661 46.9593Z"
      fill="#434545"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M57.6661 46.9593L57.9582 36.7049L47.7736 36.64L47.6439 46.7646L57.6661 46.9593ZM58.3038 36.371L57.9926 47.3018L47.3038 47.0942L47.4421 36.3018L58.3038 36.371Z"
      fill="#434545"
    />
  </svg>
);
