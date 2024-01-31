import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Text, View } from 'react-native';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
];
const DUPLICATED_DATA = Array(100).fill(DATA).flat();

export default function FlashListScreen() {
  return (
    <FlashList
      style={{ flex: 1, flexDirection: 'row' }}
      data={DUPLICATED_DATA}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: '#eee',
            height: 20,
            marginBottom: 2,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>{item.title}</Text>
        </View>
      )}
      estimatedItemSize={200}
    />
  );
}
