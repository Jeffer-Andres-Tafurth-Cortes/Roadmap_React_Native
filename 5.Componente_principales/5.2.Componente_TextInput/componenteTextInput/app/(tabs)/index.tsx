import { useState } from "react";

// Se importa el componente 'SafeAreaView' y 'TextInput'
// Se importa el StyleSheet para crear los estilos predeterminado de los inputs
import { SafeAreaView, TextInput, StyleSheet, View, Button } from "react-native";

export default function HomeScreen() {

  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaView>

      {/** Se crean dos componentes 'TextInput' */}

      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <TextInput style={styles.input} onChangeText={onChangeNumber} value={number} 
        placeholder="useless placeholder" keyboardType="numeric"
      />

      <ComponenteTextInput />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function ComponenteTextInput(){

  const [text, setText] = useState('');

  const handleSubmit = () => {
    alert('Texto ingresado: '+ text);
    setText(''); // Limpia el input al presionar el botón
  }

  return (
    <View>
      <TextInput style={{ height:40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setText(text)} value={text} placeholder='Enter text here'
      />
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  )
}