import styled from "styled-components";

const CardStyling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  margin: 10px 20px;
  cursor: pointer;
  background:${(props) => props.theme.colors.DARK_BLUE}; 
  box-shadow: 2px 2px 2px 1px rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 540px) {
    margin-bottom: 0;
  }

  h3 {
    display: inline-block;
    text-align: center;
    user-select: none;
    font-size: 18px;
    font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD};
  }
  
  span {
    font-family: ${(props) => props.theme.fonts.CODEC_PRO_REGULAR};
  }
`

export default CardStyling;
