import { useNetInfo } from '@react-native-community/netinfo';
import { Text, View } from 'react-native';

export default function NetInfo() {
  const { type, isConnected } = useNetInfo();
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>{`type: ${type}`}</Text>
      <Text>{`isConnected: ${isConnected}`}</Text>
    </View>
  );
}
