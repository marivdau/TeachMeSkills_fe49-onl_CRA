import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  error?: string;
};

export const Input: React.FC<Props> = ({ labelText, error, ...restProps }) => {
  return (
    <Label>
      <LabelText>{labelText}</LabelText>
      <InputWrapper $borderColor={error ? 'red' : undefined} {...restProps} />
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
  margin-bottom: 10px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid ${({ $borderColor }) => $borderColor || 'transparent'};

  &:focus-visible {
    border: 1px solid ${({ $borderColor }) => $borderColor || '#CCCCCCCC'};
  }
`;

const Error = styled.div`
  height: 20px;
  color: red;
`;
