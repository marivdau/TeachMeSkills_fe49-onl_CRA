import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
};

export const Textarea: React.FC<Props> = ({ labelText }) => {
  return (
    <TextAreaLabel>
      <TextAreaLabelText>{labelText}</TextAreaLabelText>
      <TextAreaWrapper
        placeholder='Add your text'
        rows={4}
        cols={40}
        maxLength={1000}
      />
    </TextAreaLabel>
  );
};

const TextAreaLabel = styled.label`
  all: unset;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--text-primary-color);
`;

const TextAreaLabelText = styled.div`
  text-align: start;
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary-color);
`;

const TextAreaWrapper = styled.textarea`
  all: unset;
  background-color: white;
  padding: 20px 15px;
  color: gray;
`;