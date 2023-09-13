import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  error?: string;
  disabled?: boolean;
};

export const Input: React.FC<Props> = ({
  labelText,
  disabled,
  error,
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const [value, setValue] = useState(0);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Label>
      <LabelText>{labelText}</LabelText>
      <InputWrapper
        ref={inputRef}
        type="text"
        name="name"
        onChange={onChange}
        value={value}
        disabled={disabled}
        placeholder="Placeholder"
        maxLength={100}
        $borderColor={error ? 'red' : undefined}
        {...restProps}
      />
      <Error>{error}</Error>
    </Label>
  );
};

const Label = styled.label`
  display: block;
  width: fit-content;
  color: var(--text-primary-color);
`;

const LabelText = styled.div`
  text-align: start;
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
  color: #535252;
`;

const InputWrapper = styled.input<{ $borderColor?: string }>`
  all: unset;
  width: 50vh;
  padding: 10px;
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
`;

const Error = styled.div`
  height: 20px;
  color: red;
  font-size: 18px;
  line-height: 30px;
`;
