import { keyframes } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      background: string;
      danger: string;
      success: string;
      white: string;
      black: string;
      grey: string;
      lightGrey: string;
    };
    keyframes: {
      fadeIn: Keyframes;
      fadeOut: Keyframes;
      popInFromBottom: Keyframes;
      popOutToBottom: Keyframes;
      popIn: Keyframes;
      slideUp: Keyframes;
      slideDown: Keyframes;
      flutter: Keyframes;
    };
    shadows: {
      cardBox: string;
    };
  }
}
