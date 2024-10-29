import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import logo from '../assets/Logo-GreenMart.png';

export default function RegisterScreen({ navigation }) {
    const [isCheckedOffers, setCheckedOffers] = React.useState(false);
    const [isCheckedTerms, setCheckedTerms] = React.useState(false);

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>CADASTRE-SE</Text>
            <TextInput placeholder="Nome" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
            <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry />
            <View style={styles.checkboxContainer1}>
                <Checkbox value={isCheckedOffers} onValueChange={setCheckedOffers} color={isCheckedOffers ? '#0CD028' : undefined} />
                <Text style={styles.checkboxLabel}>Aceito receber ofertas e novidades no meu E-mail</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox value={isCheckedTerms} onValueChange={setCheckedTerms} color={isCheckedTerms ? 'rgba(254, 94, 204, 0.6)' : undefined} />
                <Text style={styles.checkboxLabel}>
                    Concordo com os <Text style={styles.link}>Termos de Serviço</Text> e <Text style={styles.link}>Política de Privacidade</Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>CADASTRAR</Text>
            </TouchableOpacity>
            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.orText}>ou</Text>
                <View style={styles.divider} />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginButtonText}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.guestButton} onPress={() => navigation.navigate('Main')}>
                <Text style={styles.guestButtonText}>CONTINUAR COMO CONVIDADO</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#f5f5f5',
    },
    checkboxContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 65,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxLabel: {
        fontSize: 12,
        color: '#666',
        marginLeft: 10,
    },
    link: {
        color: '#007BFF',
    },
    registerButton: {
        width: '40%',
        height: 50,
        backgroundColor: 'rgba(254, 94, 204, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 10,
        marginTop: 20,
    },
    registerButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    orText: {
        marginHorizontal: 10,
        fontSize: 12,
        color: '#666',
    },
    loginButton: {
        width: '40%',
        height: 50,
        backgroundColor: '#0CD028',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    guestButton: {
        marginTop: 10,
        paddingVertical: 15,
    },
    guestButtonText: {
        color: '#007BFF',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
