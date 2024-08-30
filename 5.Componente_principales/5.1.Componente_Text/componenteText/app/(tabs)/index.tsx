import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

// En este componente se va a mostrar todo lo relacionado al componente 'Text'
export default function HomeScreen() {

  // Se utiliza 'useState' para manejar el estado de un componente 'Text' en el componente de titulo
  const [titleText, setTitleText] = useState(" Bird's Nest ")
  const bodyText = 'This is not really a bird nest.'

  // Se puede agregar un funcion de presiona a un componente 'Text' el evento a usar es 'onPress'
  const onPressTitle = () => {
    setTitleText(" Bird's Nest [pressed] ")
  }

  return (
    // Se utiliza 'Text' para mostrar el texto en pantalla y asi mismo de puede animar varios componentes 'Text' 
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
      {'\n'}

      {/** Se puede usar 'Text' dentro de otro 'Text' para darle estilos a varios componentes 'Text' */}
      <Text style={styles2.baseText}>
        I am bold{' '}
        <Text style={styles2.innerText}>and red </Text>
      </Text>

      {/** Los elementos dentro de un 'Text' no adquieren propiedades Flexbox  */}
      <View>
        <Text>First part and </Text>
        <Text>Second part</Text>
      </View>

      {/** Manera erronea de determinar un texto */}
      <View>
        Some text
      </View>

      {/** Manera correcta de determinar un texto */}
      <View>
        <Text>Some text</Text>
      </View>
      {'\n'}
      {'\n'}
      <View>
        <Text>
          Text styled with the default font for the entire application
        </Text>
        <MyAppHeaderText />
      </View>


    </Text>

  );
}

// Con 'StyleSheet' de React Native podemos dar diseños por defecto a diferentes componentes usando la propiedad 'style'
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

const styles2 = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
})


// Aqui se define el componente 'MyAppHeaderText'
function MyAppHeaderText (){
  return(
    <Text style={{ fontSize:20 }}>
      Text from MyAppHeaderText
    </Text>
  )
}
