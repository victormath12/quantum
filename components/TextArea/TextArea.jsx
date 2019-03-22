import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { INPUT_STYLE, Label, FieldGroup, ErrorMessage } from '../shared';
import uniqId from '../shared/uniqId';

const {
  default: DEFAULT_INPUT_STYLE,
  LABEL_STYLE,
  HELPER_TEXT_STYLE,
  REQUIRED_MARK_STYLE,
  ERROR_MESSAGE_STYLE,
  AUTO_FILL_STYLE,
} = INPUT_STYLE;

const TextAreaTag = styled.textarea`
  ${DEFAULT_INPUT_STYLE};

  display: block;
  min-height: 108px;
  margin-top: 8px;
  transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  :-webkit-autofill {
    ${AUTO_FILL_STYLE}
  }
`;

const TextAreaLabel = styled(Label)`
  ${LABEL_STYLE}
`;

const HelperText = styled.span`
  ${HELPER_TEXT_STYLE}
`;

const RequiredMark = styled.em`
  ${REQUIRED_MARK_STYLE}
`;

const TextAreaErrorMessage = styled(ErrorMessage)`
  ${ERROR_MESSAGE_STYLE}

  ${({ helperText }) =>
    helperText &&
    `
    padding-top: 2px;
  `}
`;

const TextArea = ({ label, required, helperText, error, id, ...rest }) => {
  const _id = id || uniqId('textarea-');

  return (
    <FieldGroup>
      {label && (
        <TextAreaLabel htmlFor={_id}>
          {label}
          {required && <RequiredMark>*</RequiredMark>}
        </TextAreaLabel>
      )}
      <TextAreaTag error={error} id={_id} {...rest} />
      {helperText && <HelperText>{helperText}</HelperText>}
      {error && (
        <TextAreaErrorMessage helperText={helperText}>
          {error}
        </TextAreaErrorMessage>
      )}
    </FieldGroup>
  );
};

TextArea.defaultProps = {
  disabled: false,
  error: '',
  helperText: '',
  label: undefined,
  onChange: () => {},
  placeholder: '',
  required: false,
  value: '',
  id: undefined,
};

TextArea.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextAreaTag.displayName = 'TextAreaTag';
TextAreaLabel.displayName = 'TextAreaLabel';
HelperText.displayName = 'HelperText';
TextAreaErrorMessage.displayName = 'TextAreaErrorMessage';

export default TextArea;
