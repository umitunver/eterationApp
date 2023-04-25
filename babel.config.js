module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: ['js', 'jsx', '.json'],
        alias: {
          '@src': './src/',
        },
      },
    ],
  ],
};
