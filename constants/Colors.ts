/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#05b3c9';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#faefef',
    tabIconDefault: '#faefef',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#e2e8ee',
    background: '#151718',
    tint: tintColorDark,
    icon: '#e4ecf3',
    tabIconDefault: '#e4ecf3',
    tabIconSelected: tintColorDark,
  },
};
