import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (

    // Este es un componente 'View'
    <View>

      {/** Este es un componente 'Text' */}
      <Text >Esto es mi primera pantalla en React Native</Text>

      {/** Este es un componente 'Image' */}
      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width: 100, height: 100}} />

      {/** Este es un componente 'TextInput' */}
      <TextInput value='Type in ...' style={{ borderWidth: 1, borderColor: '#000', width: 200}} />

      {/* Este es un componente 'TouchableOpacity' */}
      <TouchableOpacity onPress={() => console.log('Presionaste el botón!')}>
        <Text>Presioname!</Text>
      </TouchableOpacity>

      {/** Este es un componente 'ScrollView' */}
      <ScrollView>
        <Text>Este es un scrollable Text 1</Text>
        <Text>Este es un scrollable Text 2</Text>
        <Text>Este es un scrollable Text 3</Text>
        <Text>Este es un scrollable Text 4</Text>
        <Text>Este es un scrollable Text 5</Text>
        <Text>Este es un scrollable Text 6</Text>
      </ ScrollView>

      {/** Este es un componente 'FlatList' */}
      <FlatList
        data={[
          { key: '1', title: 'Item 1' },
          { key: '2', title: 'Item 2' },
          { key: '3', title: 'Item 3' },
          { key: '4', title: 'Item 4' },
          { key: '5', title: 'Item 5' },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(`Presionaste ${item.title}`)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
      
    
    </View>
  )
}

