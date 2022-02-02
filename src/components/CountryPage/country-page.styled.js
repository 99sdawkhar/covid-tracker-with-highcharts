import styled from "styled-components";

const CountryPageContainer = styled.div`
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