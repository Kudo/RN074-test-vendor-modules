import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

async function storeData(value: string) {
  try {
    await AsyncStorage.setItem('my-key', value);
  } catch (e) {
    // saving error
  }
}

async function getData(): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem('my-key');
    if (typeof value === 'string') {
      return value;
    }
  } catch (e) {
    // error reading value
  }
  return null;
}

export default function App() {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <Button
        title="store"
        onPress={() => storeData(`hello world ${Date.now()}`)}
      />
      <Button
        title="get"
        onPress={async () => {
          const data = await getData();
          setValue(data ?? 'empty');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
