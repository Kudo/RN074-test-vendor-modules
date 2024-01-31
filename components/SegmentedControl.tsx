import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useState } from 'react';

export default function SegmentedControlScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SegmentedControl
      values={['One', 'Two']}
      selectedIndex={selectedIndex}
      onChange={event => {
        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
      }}
    />
  );
}
