import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>

        <StatusBar style="auto"/>

        <View style={styles.containerCabecalho}>
          <Text style={styles.text1}>Open Grupo de Estudos</Text>
          <Text style={styles.text2}>IFCE Campus Crato</Text>
          <Text style={styles.text2}>Curso de Sistemas de Informação</Text>
        </View>

        <Login />

        <View style={styles.containerCabecalho}>
          <Text style={styles.text2}>Desenvolvido pela comunidade de programadores</Text>
          <Text style={styles.text2}>Usado no IFCE Campus Crato</Text>
          <Text style={styles.text2}>Licença MIT 2022</Text>
        </View>
        
      </View>
    </NavigationContainer>
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
    fontSize: 24,
  },
  text2: {
    color: 'silver',
  }, 
  containerCabecalho: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
