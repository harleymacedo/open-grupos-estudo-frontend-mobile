import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text1}>Open Grupo de Estudos</Text>
      <Text style={styles.text1}>IFCE Campus Crato</Text>
      <Text style={styles.text1}>Curso de Sistemas de Informação</Text>

      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
  }
});
