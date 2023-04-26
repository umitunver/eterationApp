import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BasketCard} from '@src/components';

export default function BasketList() {
  return (
    <View>
      <BasketCard />
      <BasketCard />
      <BasketCard />
    </View>
  );
}

const styles = StyleSheet.create({});
