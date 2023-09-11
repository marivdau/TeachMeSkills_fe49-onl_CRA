import styled from 'styled-components';

type Props = {
  variant: 'primary' | 'secondary' | 'secondary2';
  children: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({
  variant,
  children,
  disabled,
  onClick,
}) => {
  return (
    <ButtonWrapper
      type="button"
      $variant={variant}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {children}
    </ButtonWrapper>
  );
};

const css = String.raw;

const ButtonWrapper = styled.button<{
  $variant: 'primary' | 'secondary' | 'secondary2';
  $fitContent?: boolean;
}>`
  all: unset;
  cursor: pointer;
  border-radius: 4px;
  padding: 10px 10px;
  text-align: center;
  font-weight: 500;
  width: ${({ $fitContent }) => {
    return $fitContent ? 'fit-content' : 'calc(100% - 20px)';
  }};

${({ $variant }) => {
    switch ($variant) {
      case 'primary': {
        return css`
          border: 1px solid var(--system-primary-color);
          padding: 5px 10px;
          background: var(--system-primary-color);
          color: var(--contextual-white-color);
          font-weight: 600;

          &:active {
            opacity: 0.33;
          }

          &:disabled {
            cursor: none;
            opacity: 0.67;
            background: var(--background-color-extra-light);
            color: var(--background-color-medium-gray);
          }
        `;
      }
      case 'secondary': {
        return css`
          border: 1px solid white;
          padding: 5px 10px;
          background: var(--system-primary-color);
          color: var(--contextual-white-color);
          font-weight: 600;

          background: rgb(169, 169, 169, 0.8);
          color: var(--text-primary-color);
          font-weight: 600;

          &:active {
            background: rgb(169, 169, 169, 1);
          }

          &:disabled {
            cursor: none;
            opacity: 0.67;
            background: silver;
            color: gray;
          }
        `;
      }
      case 'secondary2': {
        return css`
          border: 1px solid transparent;
          background: none;
          color: red;
          font-weight: 600;

          &:active {
            border: 1px solid rgb(169, 169, 169, 0.8);
          }

          &:disabled {
            cursor: none;
            opacity: 0.67;
            border: 1px solid transparent;
            background: none;
            color: gray;
          }
        `;
      }
      default:
        return '';
    }
  }}

  &:disabled {
    cursor: none;
    opacity: 0.67;
    color: var(--background-color-medium-gray);
  }
`;
