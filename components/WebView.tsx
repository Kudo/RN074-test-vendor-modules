import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
  return (
    <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
  );
}
