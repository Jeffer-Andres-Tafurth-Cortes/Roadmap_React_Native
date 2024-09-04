import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

function Separator(){
  return (
    <View style={styles.separator} />
  )
} 
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommend to set accesibilityLabel to help make your
          app usable by everyone.
        </Text>

        {/** Este es el componente 'Button', cuando se use un Button se debe se usar el prop 'title'
         * y el evento 'onPress'
         */}
        <Button onPress={() => alert('Simple Button pressed')} title="Press Me" />
      </View>
      <Separator />

      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On iOS, the color prop controls the color
          of the text. On Android, the color adjusts the background color of the button
        </Text>

        {/** Este es el componente 'Button' */}
        <Button onPress={() => alert('Button with adjusted color pressed')} title="Press Me" color="#f194ff" />
      </View>
      <Separator />

      <View>
        <Text style={styles.title}>
          All interactions for the component are disabled
        </Text>

        {/** Este es un componente 'Button' */}
        <Button disabled title="Press Me" onPress={() => alert('Disabled button')} />
      </View>
      <Separator />

      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button
        </Text>
        <View style={styles.flexToText}>
          <Button title="left button" onPress={() => alert('left button pressed')} />
          <Button title="right button" onPress={() => alert('right button pressed')} />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16
  },
  title: {
    textAlign: 'center',
    marginVertical: 8
  },
  flexToText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})