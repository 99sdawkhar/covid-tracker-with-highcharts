import styled from 'styled-components';

export const MapSection = styled.div`
  .wrapper { width: 100% !important; }

  .highcharts-reset-zoom ~ .highcharts-reset-zoom {
    display: none;
  }
  .highcharts-label.highcharts-legend-title text {
    font-size: 20px;
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

  @media screen and (max-width: 768px) {
    .highcharts-container .highcharts-label.highcharts-data-label.highcharts-data-label-color-0,
    .highcharts-container .highcharts-label.highcharts-data-label.highcharts-data-label-color-undefined { opacity: 0 !important; }
  }
`;