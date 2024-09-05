import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'}

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <ImageBackground style={style.image} source={image} resizeMode="cover">
        <Text style={style.text}>
          Inside
        </Text>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0'
  }
})