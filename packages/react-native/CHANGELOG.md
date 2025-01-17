# @livepeer/react-native

## 1.0.0-next.16

### Patch Changes

- [`85dc1f7`](https://github.com/livepeer/livepeer.js/commit/85dc1f7faa35ad36c7209b17a081b62ceefba798) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed `priority` boolean to not reset when video is not shown on screen.

- Updated dependencies [[`85dc1f7`](https://github.com/livepeer/livepeer.js/commit/85dc1f7faa35ad36c7209b17a081b62ceefba798)]:
  - @livepeer/core-react@1.0.0-next.16

## 1.0.0-next.15

### Patch Changes

- [#218](https://github.com/livepeer/livepeer.js/pull/218) [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed regression with slider thumb not showing in correct position, add React Native video customization props, and fixed Player getting stuck in "play" after exit of fullscreen.

- [#218](https://github.com/livepeer/livepeer.js/pull/218) [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `priority` boolean to Player to enable lazy loading for content.

- Updated dependencies [[`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807), [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807)]:
  - @livepeer/core-react@1.0.0-next.15

## 1.0.0-next.14

### Patch Changes

- [#213](https://github.com/livepeer/livepeer.js/pull/213) [`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed player to display hours correctly and added version headers to API requests for debugging errors.

- Updated dependencies [[`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b)]:
  - @livepeer/core-react@1.0.0-next.14

## 1.0.0-next.13

### Patch Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature**: added native file URI uploading for React Native, default volume config for the Player, and fixed the slider thumb to not extend past the left boundary.

- [`f8ca8fa`](https://github.com/livepeer/livepeer.js/commit/f8ca8faa53b8248cf651a0306a448ff2ce823a7c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** removed the default border radius on mobile and web.

- Updated dependencies [[`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52)]:
  - @livepeer/core-react@1.0.0-next.13

## 1.0.0-next.12

### Patch Changes

- [#197](https://github.com/livepeer/livepeer.js/pull/197) [`748ddfa`](https://github.com/livepeer/livepeer.js/commit/748ddfa8ffc458c0a91e536a74a1933e57909745) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** changed the default `objectFit` for the Player to be `contain` instead of `cover`.

- Updated dependencies [[`748ddfa`](https://github.com/livepeer/livepeer.js/commit/748ddfa8ffc458c0a91e536a74a1933e57909745)]:
  - @livepeer/core-react@1.0.0-next.12

## 1.0.0-next.11

### Patch Changes

- [#195](https://github.com/livepeer/livepeer.js/pull/195) [`e866579`](https://github.com/livepeer/livepeer.js/commit/e86657964e2dd9d141d7d06023207ae88d5c4169) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `loading` color override to ThemeConfig.

- Updated dependencies [[`e866579`](https://github.com/livepeer/livepeer.js/commit/e86657964e2dd9d141d7d06023207ae88d5c4169)]:
  - @livepeer/core-react@1.0.0-next.11

## 1.0.0-next.10

### Patch Changes

- [#193](https://github.com/livepeer/livepeer.js/pull/193) [`fa5d2c6`](https://github.com/livepeer/livepeer.js/commit/fa5d2c62bd1a45ae8a12052973e9ae097ce6b0f2) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `showUploadingIndicator` for displaying the uploading text when `autoUrlUpload` is enabled, and renamed`shouldShowLoadingSpinner`to`showLoadingSpinner`.

- Updated dependencies [[`fa5d2c6`](https://github.com/livepeer/livepeer.js/commit/fa5d2c62bd1a45ae8a12052973e9ae097ce6b0f2)]:
  - @livepeer/core-react@1.0.0-next.10

## 1.0.0-next.9

### Patch Changes

- [`d4b4264`](https://github.com/livepeer/livepeer.js/commit/d4b42644fdbf8d4d50e74798bdc0df6e2ceee9b4) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed IPFS auto-playback with `src`.

- Updated dependencies [[`d4b4264`](https://github.com/livepeer/livepeer.js/commit/d4b42644fdbf8d4d50e74798bdc0df6e2ceee9b4)]:
  - @livepeer/core-react@1.0.0-next.9

## 1.0.0-next.8

### Patch Changes

- [`3cada35`](https://github.com/livepeer/livepeer.js/commit/3cada350006426a006c6722f28623e25a1fda2b4) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed dStorage fallback to only use IPFS when `playbackId` does not exist.

- Updated dependencies [[`3cada35`](https://github.com/livepeer/livepeer.js/commit/3cada350006426a006c6722f28623e25a1fda2b4)]:
  - @livepeer/core-react@1.0.0-next.8

## 1.0.0-next.7

### Patch Changes

- [#189](https://github.com/livepeer/livepeer.js/pull/189) [`0f6bb63`](https://github.com/livepeer/livepeer.js/commit/0f6bb636f96ded681f9d02947f4ff022bab2a7cd) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed regression with IPFS auto-playback and mime type checking in browser.

- Updated dependencies [[`0f6bb63`](https://github.com/livepeer/livepeer.js/commit/0f6bb636f96ded681f9d02947f4ff022bab2a7cd)]:
  - @livepeer/core-react@1.0.0-next.7

## 1.0.0-next.6

### Patch Changes

- [#187](https://github.com/livepeer/livepeer.js/pull/187) [`44adf29`](https://github.com/livepeer/livepeer.js/commit/44adf2940ae3621038d87f1444b18398a57d399e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added further theming overrides to progress and volume sliders.

- Updated dependencies [[`44adf29`](https://github.com/livepeer/livepeer.js/commit/44adf2940ae3621038d87f1444b18398a57d399e)]:
  - @livepeer/core-react@1.0.0-next.6

## 1.0.0-next.5

### Minor Changes

- [#182](https://github.com/livepeer/livepeer.js/pull/182) [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** moved the web logic out of `livepeer` into `@livepeer/core` to prevent polyfills from conflicting with React Native.

- [#182](https://github.com/livepeer/livepeer.js/pull/182) [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the peer dependency on `ethers` and `typechain` in favor of exporting const ABIs which can be used with tools like [abitype](https://github.com/wagmi-dev/abitype).

### Patch Changes

- Updated dependencies [[`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912), [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912)]:
  - @livepeer/core-react@1.0.0-next.5

## 1.0.0-next.4

### Patch Changes

- [`e656367`](https://github.com/livepeer/livepeer.js/commit/e6563674369549a5335a511009165698748bc67e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed core-react to use callback refs to ensure that the consuming code gets the updated ref on mount.

- Updated dependencies [[`e656367`](https://github.com/livepeer/livepeer.js/commit/e6563674369549a5335a511009165698748bc67e)]:
  - @livepeer/core-react@1.0.0-next.4

## 1.0.0-next.3

### Patch Changes

- [#179](https://github.com/livepeer/livepeer.js/pull/179) [`a04136e`](https://github.com/livepeer/livepeer.js/commit/a04136efd4d315e6122b6a307c21ee400564cbbb) Thanks [@github-actions](https://github.com/apps/github-actions)! - **Chore:** updated `@livepeer/core-react` package.

- Updated dependencies [[`a04136e`](https://github.com/livepeer/livepeer.js/commit/a04136efd4d315e6122b6a307c21ee400564cbbb)]:
  - @livepeer/core-react@1.0.0-next.3

## 1.0.0-next.2

### Patch Changes

- [#177](https://github.com/livepeer/livepeer.js/pull/177) [`8b0d1b3`](https://github.com/livepeer/livepeer.js/commit/8b0d1b33ff8e769ed6dd57d02b27bad475b4340a) Thanks [@github-actions](https://github.com/apps/github-actions)! - **Fix:** added `mediaElementRef` to Player for compatibility with external libraries.

## 1.0.0-next.1

### Patch Changes

- Updated dependencies [[`f2b5ed2`](https://github.com/livepeer/livepeer.js/commit/f2b5ed28bdbaf327609a845745637da0e010696c)]:
  - livepeer@2.0.0-next.1
  - @livepeer/core-react@1.0.0-next.1

## 1.0.0-next.0

### Major Changes

- [`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** Added `@livepeer/react-native` package with all hooks from `@livepeer/core-react`, and `Player` based on `expo-av` and controls on `react-native-svg`.

  This also includes metrics reporting for the Player and theming across the components.

### Minor Changes

- [`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** added `@livepeer/core-react` package which includes all cross-environment hooks, utilities, and types. These are exported as `usePlayer`, `useControlsContainer`, etc.

### Patch Changes

- Updated dependencies [[`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f), [`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f), [`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f)]:
  - livepeer@1.5.0-next.0
  - @livepeer/core-react@0.1.0-next.0
