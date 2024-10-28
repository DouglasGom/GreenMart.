import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import logo from '../assets/Logo-GreenMart.png';

export default function RegisterScreen({ navigation }) {
    const [isCheckedOffers, setCheckedOffers] = React.useState(false);
    const [isCheckedTerms, setCheckedTerms] = React.useState(false);

    return (
        <View style={styles.container}>
            {/* Botão de Voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Logo */}
            <Image
                source={logo}
                style={styles.logo}
            />
            {/* Título */}
            <Text style={styles.title}>ENTRAR</Text>

            {/* Campos de Texto */}
            <TextInput placeholder="Nome" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry />

            {/* Checkboxes e Termos */}
            <View style={styles.checkboxContainer1}>
                <Checkbox value={isCheckedOffers} onValueChange={setCheckedOffers} color={isCheckedOffers ? '#0CD028' : undefined} />
                <Text style={styles.checkboxLabel}>Lembre-se de mim</Text>
            </View>


            {/* Botão Cadastrar */}
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>ENVIAR</Text>
            </TouchableOpacity>

            {/* Linha divisória */}
            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.orText}>ou</Text>
                <View style={styles.divider} />
            </View>

            {/* Botão Google */}
            <TouchableOpacity style={styles.loginButtong}>
                <View style={styles.iconButtonContainer}>
                    <Image
                        source={require('../assets/google.png')} // Substitua pelo caminho correto da imagem do ícone do Google
                        style={styles.icong}
                    />
                    <Text style={styles.loginButtonTextg}> ENTRAR COM GOOGLE</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.loginButtonf}>
                <View style={styles.iconButtonContainer}>
                    <Image
                        source={require('../assets/facebook.png')}
                        style={styles.iconf}
                    />
                    <Text style={styles.loginButtonTextBlack}> ENTRAR COM FACEBOOK</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.loginButtone}>
                <View style={styles.iconButtonContainer}>
                    <Image
                        source={require('../assets/email.png')}
                        style={styles.icone}
                    />
                    <Text style={styles.loginButtonTextBlack}> ENTRAR COM E-MAIL</Text>
                </View>
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
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    icong: {
        width: 30, // Ajuste o tamanho do ícone conforme necessário
        height: 35,
        marginRight: 5,
        marginLeft: -5
    },
    icone: {
        width: 35, // Ajuste o tamanho do ícone conforme necessário
        height: 25,
        marginRight: -2, // Espaçamento entre ícone e texto
        marginLeft: -10
    },
    iconf: {
        width: 35, // Ajuste o tamanho do ícone conforme necessário
        height: 35,
        marginRight: -6, // Espaçamento entre ícone e texto
        marginLeft: 7
    },
    logo: {
        height: 150,
        width: 150,
        marginTop: 60, // Adicionado espaço abaixo do botão de voltar
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
        marginRight: 230,
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
    loginButtong: {
        width: '70%',
        height: 50,
        backgroundColor: 'rgba(66, 133, 244, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 10,
    },
    loginButtonf: {
        width: '70%',
        height: 50,
        backgroundColor: 'rgba(192, 192, 192, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 10,
    },
    loginButtone: {
        width: '70%',
        height: 50,
        backgroundColor: 'rgba(192, 192, 192, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 10,
    },
    loginButtonTextg: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginButtonTextBlack: {
        color: 'black',  // Cor do texto alterada para preto
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10, // Espaço entre o ícone e o texto
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

    iconButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginButtonText: {
        marginLeft: 10,  // Espaço entre o ícone e o texto
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

});
