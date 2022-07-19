import { Text, View, TextInput, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>Entrar no sistema</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'slategray',
        height: 300,
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 10,
    }, 
    texto1: {
        color: 'white',
    }
})

export default Login;