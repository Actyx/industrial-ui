import { create } from 'jss';
import preset from 'jss-preset-default';

import '../assets/fonts/Titillium_Web/font.css';
import '../assets/fonts/MaterialIcons/material-icons.css';
import { common, lightBlue, blueGrey, grey } from '../colors';

// Inspiration from:
// https://material-ui.com/customization/default-theme/
// https://material-ui.com/customization/color/#color-palette
const createTheme = () => {
  const base = {
    palette: {
      common,
      primary: {
        light: lightBlue[200],
        main: lightBlue[500],
        dark: blueGrey[900],
        contrastText: common.white
      },
      grey: {
        light100: grey[50],
        light150: grey[100],
        // light100: '#fafafa',
        // light150: '#f5f5f5',
        light200: '#eaeaea',
        mediumGrey: '#d6d6d6',
        dark100: '#777777',
        dark200: '#666666',
        dark400: '#333333',
        black: '#000000',
        // white: '#ffffff',
        neutral100: '#d6d6d6',
        neutral300: '#999999',
        grayVeryLight: '#F7F7F7',
        grayVeryLight2: '#E0E0E0'
      },
      green: {
        activeGreen: '#14CC9E'
      },
      signal: {
        green: '#22dd55',
        greenDark: '#11aa44',
        orange: '#ff9900',
        orangeDark: '#cc7700',
        yellow: '#ffaa00',
        yellowDark: '#ddaa00',
        red: '#dd0000',
        redDark: '#990000',
        redBright: '#e16464',
        brown: '#DBB44B',
        brownDark: '#917731'
      }
    },
    typography: {
      fontFamily: '"Titillium Web", sans-serif',
      fontSizes: {
        giant: 70,
        heading: 48,
        big: 36,
        distance: 28,
        standard: 20,
        small: 16
      }
    },
    utils: {
      rgba: (c: string, opacity: number) => {
        if (c.length < 7 || c.length > 7) {
          throw new Error('Please use full color HEX!');
        }

        return `rgba(${parseInt(c[1] + c[2], 16)}, ${parseInt(c[3] + c[4], 16)}, ${parseInt(
          c[5] + c[6],
          16
        )}, ${opacity})`;
      }
    }
  };

  const shadowWidth = {
    sm: 4
  };

  return {
    shadowWidth,
    shadow: {
      xs: `${1}px ${1}px ${3}px ${base.utils.rgba(base.palette.grey.black, 0.4)}`,
      sm: `${shadowWidth.sm}px ${shadowWidth.sm}px ${shadowWidth.sm}px ${base.utils.rgba(
        base.palette.grey.black,
        0.3
      )}`,
      md: `${10}px ${10}px ${24}px ${base.utils.rgba(base.palette.grey.black, 0.5)}`
    },
    ...base
  };
};

export const theme = createTheme();

const jss = create({
  plugins: preset().plugins
});

jss
  .createStyleSheet(
    {
      '@global': {
        html: {
          boxSizing: 'border-box',
          backgroundColor: theme.palette.grey.light200,
          height: '100%',
          width: '100%',
          padding: 0,
          margin: 0
        },
        '*, *:before, *:after': {
          boxSizing: 'inherit'
        },
        hr: {
          margin: 0
        },
        body: {
          fontFamily: theme.typography.fontFamily,
          height: '100%',
          width: '100%',
          padding: 0,
          margin: 0,
          '& > div#root': {
            height: '100%',
            width: '100%',
            padding: 0,
            margin: 0
          }
        }
      }
    },
    { meta: 'global-styles' }
  )
  .attach();
