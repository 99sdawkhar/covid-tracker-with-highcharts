import styled from 'styled-components';

export const StyledToggle = styled.div`
  margin: 20px auto 0;
`;

export const Input = styled.input`
  display: none;

  & ~ .toggle-button {
    width: 35px;
    height: 19px;
    position: relative;
    top: 2px;
    background: transparent;
    border-radius: 50px;
    border: 1px solid ${(props) => props.theme.colors.WHITE};
    cursor: pointer;
    transition: 0.3s;
    outline: 0;
    margin: 0 6px;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.02);
      position: absolute;
      top: 50%;
      left: 2px;
      background: ${(props) => props.theme.colors.BLACK};
      transform: translateY(-50%);
      box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.08);
      transition: 0.3s;
    }
  }

  &:checked ~ .toggle-button {
    background-color: ${(props) => props.theme.colors.YELLOW};
  }

  &:checked ~ .toggle-button::before {
    left: 20px;
    transition: 0.3s;
    background-color: ${(props) => props.theme.colors.BLACK};
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  label {
    display: flex;
    cursor: pointer;
  }

  span {
    color: ${(props) => props.theme.colors.BLACK_BG};
    font-size: 18px;
    font-family: ${(props) => props.theme.fonts.CODEC_PRO_REGULAR};
    line-height: 1.5;
    text-transform: capitalize;
  }
`;
