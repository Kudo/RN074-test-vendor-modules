import { StyleSheet, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

export default function Ball() {
  const gesture = Gesture.Pan()
    .onBegin(() => {
      //       isPressed.value = true;
      console.log('begin');
    })
    .onUpdate(e => {
      console.log('update');
    })
    .onEnd(() => {
      console.log('end');
    })
    .onFinalize(() => {});

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={gesture}>
        <View style={[styles.ball]} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});
