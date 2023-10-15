module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
