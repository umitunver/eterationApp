import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { updateUrlToHttps } from '@src/helpers/method';

export default function CustomImage({ imageUrl, style }) {
  return (
    <View style={{ overflow: 'hidden' }}>
      <FastImage
        style={style}
        source={{
          uri: updateUrlToHttps(imageUrl),
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.low
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
}
