import styled from "styled-components";

const CountryPageContainer = styled.div`
  padding-bottom: 20px;

  .home-button {
    border: none;
    outline: none;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 20px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.SEARCH_BG};
    color: ${(props) => props.theme.colors.WHITE};
    &:hover {
      transform: scale(1.2);
      transition: all ease-in-out 0.3s;
    }
  }
  .full-width {
    width: 100vw;
    height: 100vh;
    background-color: #B2BDC7;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .select-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: 540px) {
      flex-direction: row;
      justify-content: center;
    }
  }
  .line-graph-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default CountryPageContainer;