import styled from 'styled-components';

export const MapSection = styled.div`
  .wrapper { width: 100% !important; }

  /* background-color: ${(props) => props.theme.colors.BACKGROUND_COLOR}; */
  .highcharts-reset-zoom ~ .highcharts-reset-zoom {
    display: none;
  }
  .highcharts-label.highcharts-legend-title text {
    font-size: 20px;
  }
  .highcharts-background {
    /* fill: ${(props) => props.theme.colors.BACKGROUND_COLOR}; */
  }

  .map-hovered-tooltip {
    font-size: 18px;
    font-weight: 800;
    color: #783c29;
  }

  .highcharts-point {
    cursor: pointer;
  }

  .highcharts-null-point {
    cursor: not-allowed;
  }

  .heading .wrapper {
    width: 86%;
  }

  .world-map-info {
    font-family: ${(props) => props.theme.fonts.CODEC_PRO_REGULAR};
    font-size: 16px;
    line-height: 1.2;
    opacity: 0.7;
    width: 86%;
    margin: 0 auto;
  }

  .custom-dropdown-wrapper {
    margin: 40px 2%;
  }
`;

export const Hamburger = styled.span`
  /* hamburger icon */
  display: none;

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    position: relative;
    display: inline-block;
    width: 17px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.WHITE};
    vertical-align: middle;
    margin-left: 10px;
    transform: translateY(-2px);
    top: 40px;
    z-index: 2;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: inherit;
      transition: all 0.2s;
    }

    &::before {
      top: -6px;
      width: 145%;
    }

    &::after {
      bottom: -6px;
      width: 62%;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
    top: 55px;
  }
`;

export const StyledHamburgerBackground = styled.span`
  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    content: '';
    width: 35px;
    height: 32px;
    background: ${(props) => props.theme.colors.PRIMARY_COLOR};
    position: absolute;
    z-index: 1;
    top: 32px;
    left: 4px;
    cursor: pointer;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
    top: 47px;
    left: 2px;
  }
`;

export const StyledFilters = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 67%;
  margin: 0 5.8% 0;
  position: relative;

  .disable-menu .custom-select__control {
    color: #979ba0;
    border-color: #c6c8ca;
    background: transparent;
    pointer-events: none;
  }

  .disable-menu .custom-select__single-value,
  .disable-menu .custom-select__placeholder {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=25)';
    filter: alpha(opacity=25);
    -moz-opacity: 0.25;
    -khtml-opacity: 0.25;
    opacity: 0.25;
  }

  .disable-menu .custom-select__indicators {
    color: #979ba0;
    border-color: #c6c8ca;
    background: transparent;
    pointer-events: none;
  }

  .disable-menu .custom-select__indicator svg {
    fill-opacity: 25%;
  }

  .modal__container .disabled button {
    pointer-events: none;
    color: ${(props) => props.theme.colors.BLACK};
    opacity: 0.25;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    .custom-dropdown-wrapper select {
      margin: 0%;
    }
    .custom-dropdown-wrapper {
      display: none;
    }
    .ham-menu {
      position: relative;
    }
  }
  .enable-reset {
    background: ${(props) => props.theme.colors.WHITE};
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    opacity: 100% !important;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.PRIMARY_COLOR};
    pointer-events: all !important;

    &:hover {
      background: ${(props) => props.theme.colors.PRIMARY_COLOR};
      color: ${(props) => props.theme.colors.WHITE};
      box-shadow: 2px 2px 12px ${(props) => props.theme.colors.PRIMARY_COLOR};
      opacity: 1;
      border-color: transparent;
    }
  }

  .reset {
    pointer-events: none;
    @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
      display: none;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
    margin-bottom: 0px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
    width: 78%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    margin-bottom: 30px;
  }
`;
