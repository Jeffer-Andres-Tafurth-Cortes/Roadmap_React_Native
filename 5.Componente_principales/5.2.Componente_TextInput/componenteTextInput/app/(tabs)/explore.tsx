import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function TabTwoScreen() {

  const [value, onChangeText] = useState('Useless multiline placeholder');
  
  return (
    <View style={{backgroundColor: value, borderBottomColor: '#000000', borderBottomWidth: 1}} >
      <TextInput style={{ padding:10 }} editable multiline numberOfLines={4} maxLength={40} 
        onChangeText={text => onChangeText(text)} value={value} 
      />
    </View>
  );
}
