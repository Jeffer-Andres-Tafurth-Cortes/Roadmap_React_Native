import { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

export default function HomeScreen() {

  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
  }

  return (
    <View style={style.container}>
      <Switch 
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ?'#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor={"#3e3e3e"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
