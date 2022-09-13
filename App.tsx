import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text  style={styles.titulo}>Hello React Native!</Text>
      <Button titulo="Send 1" />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps{
  titulo: string;
}
function Button(props: ButtonProps){
  return(
    <TouchableOpacity style={styles.button}>
      <Text style={styles.titulo}>
          {props.titulo}

      </Text>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#eb3480"

  },
    titulo: {
      color: "#ebde34" , 
      fontSize: 22
    },
    button: {
      width: 160 ,
      height: 60 ,
      backgroundColor: "#4287f5"

    }
});
