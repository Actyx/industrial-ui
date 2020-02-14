import { create } from 'jss';
import preset from 'jss-preset-default';

/**
 * Site wide css
 */
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.css'
// import '../assets/css/fonts.css'

const createTheme = () => {
  const base = {
    palette: {
      grey: {
        light100: '#fafafa',
        light150: '#f5f5f5',
        light200: '#eaeaea',
        mediumGrey: '#d6d6d6',
        dark100: '#777777',
        dark200: '#666666',
        dark300: 'rgb(76, 76, 76)',
        dark400: '#333333',
        black: '#000000',
        white: '#ffffff',
        neutral100: '#d6d6d6',
        neutral300: '#999999'
      },
      highlight: {
        primary: '#bee5fa',
        secondary: '#F8F9FB'
      },
      actionHighlight: {
        deepSkyBlue: '#22aaee',
        deepSkyBlueBright: '#81CFF5',
        oceanBlue: '#0088cc',
        seaBlue: '#005599',
        bottomBlue: '#0D2237'
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
      },
      blue: {
        dark: '#0c2237'
      }
    },
    color: {
      primaryWhite: '#D6D6D6',
      primaryBlack: '#141414',
      lightGreyLines: '#E9EAF0',
      labelGrey: '#7E7E80',
      pureWhite: '#FFFFFF',
      inactiveDark: '#343436',
      primary: '#0090D0',
      activeGreen: '#14CC9E',
      tabNavigation: '#A1A1A4',
      failRed: '#BF0030',
      secondaryBlack: '#222222',
      warningOrange: '#FAA125',
      lightGreyCardHeader: '#EFF0F6',
      secondaryColor: '#006699',
      darkGreen: '#158E6C',
      blueLight: '#01a1df',
      blueMid: '#017ecf',
      blueDark: '#024466',
      blueDarkGrey: '#2B3239',
      grayLight: '#EAEAEA',
      grayVeryLight: '#F7F7F7',
      grayVeryLight2: '#E0E0E0',
      grayMidLight: '#89898a',
      grayExtremeLight: '#F2F2F2',
      red: '#f44336'
    },
    dimension: {
      borderRadius: 2
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

        // tslint:disable-next-line prettier
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

// Add global styles
// tslint:disable-next-line no-expression-statement
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
