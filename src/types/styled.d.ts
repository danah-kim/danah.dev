import { SVGAttributes } from 'react';
import { Colors } from 'styles/colors';
import { KeyFrames } from 'styles/keyframes';
import { Media } from 'styles/media';
import { Shadows } from 'styles/shadows';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    keyframes: KeyFrames;
    shadows: Shadows;
    media: Media;
  }
}

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
