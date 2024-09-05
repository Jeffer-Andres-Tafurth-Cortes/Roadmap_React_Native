import { Image, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={style.container}>

      {/** Esto son componentes 'Image' deben de tener el prop 'source' para mostrarlas */}
      <Image source={require('../../assets/images/react-logo.png')} style={style.tinyLogo} />

      <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={style.logo} />

      <Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} 
        style={style.logo} onLoad={() => console.log('Ya cargaron todas las imagenes')}
      />

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    paddingTop: 50
  },
  tinyLogo:{
    width: 50,
    height: 50
  },
  logo: {
    width: 66,
    height: 58
  }
})
