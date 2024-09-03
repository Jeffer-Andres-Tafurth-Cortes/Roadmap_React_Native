import { SafeAreaView, StyleSheet, View } from "react-native";

function Separator(){
  return (
    <View style={styles.separator} />
  )
} 
export default function HomeScreen() {
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})