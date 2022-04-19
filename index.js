'use strict';
const foregroundColor = '#D9E0EE';
const backgroundColor = '#1E1D2E';
const selectionColor = '#575268';
const black = '#6E6C7E';
const red = '#F28FAD';
const green = '#ABE9B3';
const yellow = '#FAE3B0';
const blue = '#96CDFB';
const magenta = '#F5C2E7';
const cyan = '#89DCEB';
const white = '#C3BAC6';
const lightBlack = '#575268';
const darkBlack = '#302D41';
const lightWhite = '#C9CBFF';

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    selectionColor,
    borderColor: darkBlue,
    cursorColor: foregroundColor,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white: lightWhite,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: lightWhite,
    },
    css: `
      ${config.css}
      .hyper_main {
        border: none !important;
      }
      .header_header {
        color: ${foregroundColor};
      }
      .header_windowHeaderWithBorder {
        border-color: ${backgroundColor} !important;
      }
      .tabs_borderShim {
        border-color: transparent !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_tab.tab_active {
        background: ${backgroundColor};
        color: ${foregroundColor};
        transition: all 140ms ease;
      }
      .tab_tab:not(.tab_active) {
        background: ${darkBlack};
        color: ${lightWhite};
      }
      .tab_tab:not(.tab_active):hover {
        background: ${lightBlack};
        color: ${foregroundColor};
        transition: background 140ms ease;
      }
      .tab_icon {
        width: 15px;
        height: 15px;
      }
      .tab_shape {
        width: 7px;
        height: 7px;
      }
      .splitpane_divider {
        background-color: ${lightBlack} !important;
      }
      `
  });
};