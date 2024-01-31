import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaContext() {
  return (
    <SafeAreaProvider>
      <StatusBar hidden />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'red',
          paddingTop: 20,
          borderRadius: 16,
        }}>
        <View style={{ flex: 1, backgroundColor: '#00dddd' }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
