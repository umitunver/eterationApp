import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {SearchIcon} from '@src/constants/icons';

export default function SearchInput({setSearchKey, type}) {
  return (
    <View>
      {type === 'home' ? (
        <TextInput
          style={styles.input}
          placeholder="Search"
          autoCapitalize="none"
          placeholderTextColor="#626b8b"
          keyboardType="web-search"
          onSubmitEditing={event => {
            const searchValue = event.nativeEvent.text;
            setSearchKey(searchValue);
          }}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Search"
          autoCapitalize="none"
          placeholderTextColor="#626b8b"
          keyboardType="web-search"
          onChangeText={setSearchKey}
        />
      )}
      <View style={styles.icon}>
        <SearchIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fafafb',
    paddingVertical: 9,
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: Platform.OS === 'ios' ? 8 : 13,
  },
});
