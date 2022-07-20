import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.containerCabecalho}>
        <Text style={styles.text1}>Open Grupo de Estudos</Text>
        <Text style={styles.text1}>IFCE Campus Crato</Text>
        <Text style={styles.text1}>Curso de Sistemas de Informação</Text>
      </View>

      <Login />

      <View style={styles.containerCabecalho}>
        <Text style={styles.text1}>Desenvolvido pela comunidade de programadores</Text>
        <Text style={styles.text1}>Usado no IFCE Campus Crato</Text>
        <Text style={styles.text1}>Licença MIT 2022</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text1: {
    color: 'white',
  }, 
  containerCabecalho: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
