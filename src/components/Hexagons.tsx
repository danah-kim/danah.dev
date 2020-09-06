import React, { forwardRef, memo, Ref } from 'react';
import styled, { css } from 'styled-components';
import { IconProps } from 'types/styled';

const flexStyle = css<{ small: boolean }>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 12px 0;

  ${(props) => props.theme.media.customMin(1280)} {
    width: ${({ small }) => (small ? '1213px' : 'inherit')};

    .hexagon:nth-child(${({ small }) => (small ? '24n + 13' : '19n + 11')}) {
      margin-left: ${({ small }) => `${small ? 49 : 60}px`};
    }
  }
  ${(props) => props.theme.media.custom(1279, 1024)} {
    width: 934px;

    .hexagon:nth-child(${({ small }) => (small ? '18n + 10' : '15n + 9')}) {
      margin-left: ${({ small }) => `${small ? 49 : 60}px`};
    }
  }
  ${(props) => props.theme.media.custom(1023, 781)} {
    width: 550px;

    .hexagon:nth-child(${({ small }) => (small ? '11n + 7' : '9n + 6')}) {
      margin-left: ${({ small }) => `${small ? 49 : 60}px`};
    }
  }
  ${(props) => props.theme.media.custom(780, 640)} {
    width: 495px;

    .hexagon:nth-child(${({ small }) => (small ? '10n + 6' : '8n + 5')}) {
      margin-left: ${({ small }) => `${small ? 49 : 60}px`};
    }
  }
  ${(props) => props.theme.media.customMax(639)} {
    width: ${({ small }) => `${small ? 180 : 220}px`};

    .hexagon:nth-child(3n + 3) {
      margin-left: ${({ small }) => `${small ? 49 : 60}px`};
    }
  }
  ${(props) => props.theme.media.small} {
    margin: 10px auto;
  }
`;

const gridStyle = css`
  display: grid;
  grid-auto-rows: calc(var(--hex-width) - 28.87px / 2);
  grid-gap: var(--hex-between) var(--hex-between);
  padding-bottom: var(--hex-border);

  .hexagon {
    margin: var(--hex-border) 0;
  }

  ${(props) => props.theme.media.customMin(1250)} {
    grid-template-columns: var(--hex-width) var(--hex-width) var(--hex-width) var(--hex-width);

    .hexagon:nth-child(8n + 5),
    .hexagon:nth-child(8n + 6),
    .hexagon:nth-child(8n + 7),
    .hexagon:nth-child(8n + 8) {
      margin-left: var(--hex-grid-margin);
    }
  }
  ${(props) => props.theme.media.custom(1249, 1030)} {
    grid-template-columns: var(--hex-width) var(--hex-width) var(--hex-width);

    .hexagon:nth-child(6n + 4),
    .hexagon:nth-child(6n + 5),
    .hexagon:nth-child(6n + 6) {
      margin-left: var(--hex-grid-margin);
    }
  }
  ${(props) => props.theme.media.custom(1029, 712)} {
    grid-template-columns: var(--hex-width) var(--hex-width);

    .hexagon:nth-child(4n + 3),
    .hexagon:nth-child(4n + 4) {
      margin-left: var(--hex-grid-margin);
    }
  }
  ${(props) => props.theme.media.customMax(711)} {
    grid-template-columns: var(--hex-width);

    .hexagon:nth-child(2n + 2) {
      margin-left: var(--hex-grid-margin);
    }
  }
`;

const HexagonList = styled.ul<{ size: number; small: boolean; type: 'grid' | 'flex' }>`
  --hex-width: ${({ theme, size }) => `${size}px`};
  --hex-between: 10px;
  --hex-height: calc(var(--hex-width) / 1.73 /* sqrt(3) */);
  --hex-margin: calc(var(--hex-width) / 2);
  --hex-border: calc(var(--hex-margin) / 1.73 /* sqrt(3) */);
  --hex-grid-margin: calc(var(--hex-width) / 2 + var(--hex-between) / 2);
  --hex-transition: all 0.3s ease;
  --hex-color-hover: transparent;

  width: 100%;

  ${({ type }) => (type === 'flex' ? flexStyle : gridStyle)}
`;

const HexagonItem = styled.li<{ color?: string }>`
  background-color: ${({ color, theme }) => color || theme.colors.lightPink};
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--hex-height);
  margin: 18px 5px;
  position: relative;
  transition: var(--hex-transition);
  width: var(--hex-width);

  :before,
  :after {
    content: '';
    position: absolute;
    left: 0;
    width: 0;
    border-left: var(--hex-margin) solid transparent;
    border-right: var(--hex-margin) solid transparent;
    transition: var(--hex-transition);
  }
  :before {
    bottom: 100%;
    border-bottom: var(--hex-border) solid ${({ color, theme }) => color || theme.colors.lightPink};
  }
  :after {
    top: 100%;
    width: 0;
    border-top: var(--hex-border) solid ${({ color, theme }) => color || theme.colors.lightPink};
  }

  :hover {
    background-color: var(--hex-color-hover);
    transition: var(--hex-transition);

    :after,
    :before {
      border-top-color: var(--hex-color-hover);
      border-bottom-color: var(--hex-color-hover);
    }

    svg {
      fill: ${({ color, theme }) => color || theme.colors.lightPink};
    }
  }
`;

const HexagonContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--hex-height);

  svg {
    transition: var(--hex-transition);
  }
`;

const Label = styled.span<{ labelColor?: string; labelBackgroundColor?: string }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(var(--hex-width) + 5px);
  height: calc(var(--hex-width) / 5);
  font-size: calc(var(--hex-width) / 10 + 2px);
  line-height: 0.1;
  top: calc(var(--hex-width) / 3);
  color: ${(props) => props.labelColor || props.theme.colors.white};
  background-color: ${(props) => props.labelBackgroundColor || props.theme.colors.grey};
  border-radius: 2px;
  box-shadow: ${(props) => props.theme.shadows.md};
`;

type HexagonsProps = {
  type: 'grid' | 'flex';
  data: {
    id: string;
    icon?: (params: IconProps) => JSX.Element;
    color?: string;
    labelText?: string;
    labelColor?: string;
    labelBackgroundColor?: string;
    iconColor?: string;
  }[];
  disableLabel?: boolean;
  small?: boolean;
};

const Hexagons = forwardRef((props: HexagonsProps, ref: Ref<HTMLUListElement> | null) => {
  const { type, data, disableLabel = false, small = false } = props;

  return (
    <HexagonList ref={ref} type={type} size={small ? 80 : 100} small={small}>
      {data.map(({ id, icon, color, labelText, labelColor, labelBackgroundColor, iconColor = 'white' }) => (
        <HexagonItem key={id} className="hexagon" color={color}>
          <HexagonContent color={color}>
            {!!icon && icon({ size: small ? 34 : 46, color: iconColor })}
            {!disableLabel && (
              <Label labelColor={labelColor} labelBackgroundColor={labelBackgroundColor}>
                {labelText}
              </Label>
            )}
          </HexagonContent>
        </HexagonItem>
      ))}
    </HexagonList>
  );
});

Hexagons.displayName = 'Hexagons';

export default memo(Hexagons);
