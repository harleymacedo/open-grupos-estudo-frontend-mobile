import { Text, View, TextInput, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>Entrar no sistema</Text>
            <TextInput style={styles.input} placeholder='Usuário' />
            <TextInput style={styles.input} placeholder='Senha' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'slategray',
        height: 250,
        width: 300,
        borderRadius: 10,
    }, 
    texto1: {
        color: 'white',
        fontSize: 28,
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#ffffff',
        height: 24,
        width: 200,
        marginBottom: 5,
    }

})

export default Login;