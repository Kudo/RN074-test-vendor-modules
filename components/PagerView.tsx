import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function PagerViewScreen() {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1" style={styles.container}>
        <Text>First page</Text>
      </View>
      <View key="2" style={styles.container}>
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
