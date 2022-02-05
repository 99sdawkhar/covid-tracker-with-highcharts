import styled from 'styled-components';
import Select from 'react-select';

const SelectStyle = styled(Select)`
    width: 100%;
    padding: 5px;
    font-family: ${(props) => props.theme.fonts.CODEC_PRO_REGULAR};

    @media screen and (min-width: 540px) {
      width: 30%;
    }
    
  .react-select__control {
    background-color: ${(props) => props.theme.colors.OFFWHITE};
    border-color: none;
    transition: none;
  }

  .react-select__menu {
    background-color: ${(props) => props.theme.colors.OFFWHITE};
    border: none
  }

  .react-select__option {
    background-color: ${(props) => props.theme.colors.OFFWHITE};
    color: ${(props) => props.theme.colors.BLUE};

    &:hover {
      background-color: ${(props) => props.theme.colors.BLUE};
      color: ${(props) => props.theme.colors.WHITE};
    }
  }

  .react-select__indicator-separator {
    background-color: ${(props) => props.theme.colors.GRAY};
  }

  .react-select__placeholder,
  .react-select__single-value {
    color: ${(props) => props.theme.colors.BLACK_BG};
    font-size: 18px;
    font-family: ${(props) => props.theme.fonts.CODEC_PRO_BOLD};
  }
`
export default SelectStyle;