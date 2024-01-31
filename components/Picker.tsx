import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { View } from 'react-native';

export default function PickerScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  return (
    <View style={{ flex: 1 }}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={itemValue => setSelectedLanguage(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}
