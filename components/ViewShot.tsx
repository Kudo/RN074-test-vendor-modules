import { useRef } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

export default function ViewShotScreen() {
  const ref = useRef<View>(null);

  async function takeScreenshotAsync() {
    if (ref.current) {
      const uri = await captureRef(ref, {
        format: 'png',
        quality: 0.8,
      });
      Alert.alert(uri);
    }
  }

  return (
    <View
      ref={ref}
      style={{ flex: 1, backgroundColor: '#00dddd', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16 }}>Test</Text>
      <Button title="Take screenshot" onPress={takeScreenshotAsync} />
    </View>
  );
}
