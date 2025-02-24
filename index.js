const { flavorEntries } = require("@catppuccin/palette");

const theme = flavorEntries.reduce((acc, [name, palette]) => {
  acc[`catppuccin-${name}`] = {
    backgroundColor: palette.colors.base.hex,
    foregroundColor: palette.colors.text.hex,
    selectionColor: palette.colors.surface0.hex,
    cursorColor: palette.colors.rosewater.hex,
    cursorAccentColor: palette.colors.base.hex,
    colors: {
      black: palette.ansiColors.black.normal.hex,
      blue: palette.ansiColors.blue.normal.hex,
      red: palette.ansiColors.red.normal.hex,
      green: palette.ansiColors.green.normal.hex,
      yellow: palette.ansiColors.yellow.normal.hex,
      magenta: palette.ansiColors.magenta.normal.hex,
      cyan: palette.ansiColors.cyan.normal.hex,
      white: palette.ansiColors.white.normal.hex,
      lightBlack: palette.ansiColors.black.bright.hex,
      lightBlue: palette.ansiColors.blue.bright.hex,
      lightRed: palette.ansiColors.red.bright.hex,
      lightGreen: palette.ansiColors.green.bright.hex,
      lightYellow: palette.ansiColors.yellow.bright.hex,
      lightMagenta: palette.ansiColors.magenta.bright.hex,
      lightCyan: palette.ansiColors.cyan.bright.hex,
      lightWhite: palette.ansiColors.white.bright.hex,
    },
  };
  return acc;
}, {});

exports.decorateConfig = (config) => {
  const chosenTheme = theme[config.theme ?? "catppuccin-mocha"];
  return Object.assign({}, config, {
    ...chosenTheme,
  });
};
