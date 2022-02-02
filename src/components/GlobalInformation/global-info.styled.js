import styled from "styled-components";

const GlobalInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.WHITE};
  padding: 50px 0px 0px;
  // background: #EB9C07;
  // background: ${(props) => props.theme.colors.BLACK_BG};
  // background: linear-gradient(10deg, red, orange, yellow, green, blue, indigo, violet, red);
  
  h2 {
    display: inline-block;
    margin-bottom: 10px;
    text-align: center;
    user-select: none;
    font-size: 34px;
    font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};
    background: -webkit-linear-gradient(bottom, #f5b350, rgb(255, 255, 255));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (min-width: 540px) {
      font-size: 50px;
    }

    @media screen and (min-width: 768px) {
      font-size: 64px;
    }
  }

  .card-collection {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 75%;
    margin: 0 auto 25px;
    
    @media screen and (min-width: 540px) {
      justify-content: space-around;
      flex-direction: row;
    }
  }
`

export default GlobalInfo;
