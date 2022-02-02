import styled from 'styled-components';
import Select from 'react-select';

const SelectStyle = styled(Select)`
    width: 100%;
    padding: 5px;

    @media screen and (min-width: 540px) {
        width: 30%;
    }
    
  .react-select__control {
    background-color: ${(props) => props.theme.colors.SELECT_BG};
    border-color: ${(props) => props.theme.colors.GRAY};
    transition: none;

    &:hover {
      border-color: #000;
    }
  }

  .react-select__menu {
    background-color: ${(props) => props.theme.colors.SEARCH_BG};
    border: 1px solid ${(props) => props.theme.colors.MENU_BG};
  }

  .react-select__option {
    background-color: ${(props) => props.theme.colors.SEARCH_BG};

    &:hover {
        background-color: ${(props) => props.theme.colors.MENU_BG};
        color: ${(props) => props.theme.colors.WHITE};
    }
  }

  .react-select__indicator-separator {
    background-color: ${(props) => props.theme.colors.GRAY};
  }

  .react-select__placeholder,
  .react-select__single-value {
    color: ${(props) => props.theme.colors.GRAY};
  }
`
export default SelectStyle;