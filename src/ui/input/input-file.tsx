import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  error?: string;
  disabled?: boolean;
};

export const InputFile: React.FC<Props> = ({
  labelText,
  disabled,
  error,
  ...restProps
}) => {
  return (
    <Label>
      <LabelText>{labelText}</LabelText>
      <InputUpload
        type="file"
        name="name"
        disabled={disabled}
        $borderColor={error ? 'red' : undefined}
        {...restProps}
      />

      <Error>{error}</Error>
    </Label>
  );
};

const Label = styled.label`
  display: block;
  color: var(--text-primary-color);
`;

const LabelText = styled.div`
  text-align: start;
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary-color);
`;

const InputUpload = styled.input<{ $borderColor?: string }>`
  all: unset;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid ${({ $borderColor }) => $borderColor || 'gray'};

  &:focus-visible {
    border: 1px solid ${({ $borderColor }) => $borderColor || '#CCCCCCCC'};
  }

  &:focus {
    border: 3px solid ${({ $borderColor }) => $borderColor || 'gray'};
  }

  &:active {
    border: 3px solid ${({ $borderColor }) => $borderColor || 'transparent'};
  }

  &:disabled {
    cursor: none;
    opacity: 0.67;
    background: lightgray;
    color: gray;
  }

  &::file-selector-button {
    all: unset;
    border: 1px solid var(--background-color-medium-gray);
    background-color: var(--background-color-medium-gray);
    border-radius: 2px;
    padding: 3px;
    position: relative;
    left: 70%;
    color: var(--text-primary-color);
  }
`;

const Error = styled.div`
  height: 20px;
  color: red;
  font-size: 18px;
  line-height: 30px;
`;
