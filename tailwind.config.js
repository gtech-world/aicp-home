module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/layouts/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        ssm: { max: '460px' },
        sm: { max: '750px' },
        mo: { max: '899px' },
        md: { max: '1280px' },
        lg: { min: '1440px' },
        ms: { min: '900px' },
      },
      fontFamily: {
        OpenSans: 'var(--open-sans)',
      },
      maxHeight: {
        mc: 'calc(100vh - 260px)',
      },
      colors: {
        gray: {
          3: '#333333',
          6: '#666666',
          9: '#999999',
          14: '#DDDDDD',
          16: '#f3f3f3',
          18: '#4A4A4A',
          20: '#eeeeee',
          bg: '#f1f1f1',
          28: '#f8f8f8',
          f0: '#f0f2f5',
        },
        green: {
          2: '#29953A',
          28: '#2E8C3D',
          3: '#38942C',
          4: '#CBDED0',
        },
        blue: {
          0: '#0084FF',
        },
        orange: {
          16: '#FF8D00',
          169: '#FF9640',
        },
      },

      unf: ':nth=child(n + 2)',
    },
  },
};
