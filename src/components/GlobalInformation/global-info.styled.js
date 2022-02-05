import styled from "styled-components";

const GlobalInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.WHITE};
  padding: 50px 0px 0px;
  
  h2 {
    display: inline-block;
    margin-bottom: 10px;
    text-align: center;
    user-select: none;
    font-size: 34px;
    font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};
    background: -webkit-linear-gradient(bottom, #555, #000);
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
      justify-content: center;
      flex-direction: row;
    }

    .confirmed {
      color: ${(props) => props.theme.colors.CONFIRMED_AXIS};
      &:hover {
        background-color: ${(props) => props.theme.colors.CONFIRMED_BG};
      }
    }
    .recovered {
      color: ${(props) => props.theme.colors.RECOVERY};
      &:hover {
        background-color: ${(props) => props.theme.colors.RECOVERY_BG};
      }
    }
    .deaths {
      color: ${(props) => props.theme.colors.DEATH_AXIS};
      &:hover {
        background-color: ${(props) => props.theme.colors.DEATH_BG};
      }
    }
    h4 span {
      font-family: ${(props) => props.theme.fonts.CODEC_PRO_BOLD};
    }
  }
`

export default GlobalInfo;
