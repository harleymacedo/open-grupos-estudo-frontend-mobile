import { Text, View, TextInput, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>Entrar no sistema</Text>
            <TextInput placeholder='Usuário' />
            <TextInput placeholder='Senha' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'slategray',
        height: 200,
        width: 250,
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