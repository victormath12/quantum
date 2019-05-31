import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, spacing, baseFontSize } from '../shared/theme';
import Icon from '../Icon';
import { shadow } from '../shared';

const CheckIcon = styled(Icon).attrs({
  name: 'check',
})``;

const CloseIcon = styled(Icon).attrs({
  name: 'close',
})``;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  pointer-events: none;
`;

const Switch = styled.div`
  cursor: pointer;
  display: inline-block;
  height: 24px;
  padding-left: ${({
    theme: {
      spacing: { xxlarge },
    },
  }) => `${xxlarge}px;`}

  &:before {
    background-color: ${({
      theme: {
        colors: { neutral },
      },
    }) => `${neutral[500]};`};
    border-radius: 16px;
    content: '';
    height: 24px;
    position: absolute;
    left: 0;
    top: 0;
    width: 42px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      transform 0.2s ease-in-out;
  }

  ${CloseIcon}, ${CheckIcon} {
    align-items: center;
    ${({
      theme: {
        colors: { neutral },
      },
    }) => `
      background-color: ${neutral[100]};
      color: ${neutral[500]};
    `};
    border-radius: 50%;
    display: flex;
    font-size: ${({ theme: { baseFontSize: baseFont } }) =>
      `${baseFont * 0.75}px`};
    height: 20px;
    justify-content: center;
    position: absolute;
    left: 2px;
    top: 2px;
    visibility: hidden;
    width: 20px;
    transition: transform 0.2s ease-in-out;
  }

  ${CloseIcon} {
    visibility: visible;
  }
`;

const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
  role: 'switch',
})`
  cursor: pointer;
  height: 24px;
  left: 0;
  opacity: 0;
  position: absolute;
  pointer-events: initial;
  width: 100%;

  &:focus + ${Switch}:before {
    ${({
      theme: {
        colors: { primary },
      },
    }) => shadow(4, primary[900])};
  }

  &:hover + ${Switch}:before {
    background-color: ${({
      theme: {
        colors: { neutral },
      },
    }) => `${neutral[700]};`};
  }

  &:checked + ${Switch} ${CloseIcon} {
    visibility: hidden;
    transform: translateX(18px);
  }

  &:checked + ${Switch} ${CheckIcon} {
    visibility: visible;
  }

  &:checked + ${Switch}:before {
    background-color: ${({
      theme: {
        colors: { primary },
      },
    }) => `${primary[500]};`};
  }

  &:checked:hover + ${Switch}:before {
    background-color: ${({
      theme: {
        colors: { primary },
      },
    }) => `${primary[900]};`};
  }

  &:checked + ${Switch} ${CheckIcon} {
    ${({
      theme: {
        colors: { primary },
      },
    }) =>
      `background-color: ${primary[100]};
     color: ${primary[500]};`};
    transform: translateX(18px);
  }
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

const Toggle = ({ checked, theme, ...rest }) => (
  <Wrapper>
    <HiddenCheckbox theme={theme} checked={checked} {...rest} />
    <Switch theme={theme}>
      <CloseIcon />
      <CheckIcon />
    </Switch>
  </Wrapper>
);

Toggle.propTypes = {
  checked: PropTypes.bool,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

Toggle.defaultProps = {
  checked: null,
  theme: {
    colors,
    spacing,
    baseFontSize,
  },
};

export default Toggle;
