import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { useFonts } from 'expo-font';
import logo from '../assets/Logo-GreenMart.png';
import ong1 from '../assets/ong1.jpg'; // Exemplo de imagem de ONG

const DoeRoupasScreen = ({ route }) => {
    const navigation = useNavigation();
    const { ong } = route.params; // Recebe os dados da ONG da navegação anterior
    const [searchText, setSearchText] = useState('');
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    // Função para abrir links das redes sociais
    const openLink = (url) => {
        if (url) {
            Linking.openURL(url);
        } else {
            alert('Link não disponível.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header com logo, barra de busca e ícone da sacola */}
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar..."
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Sacola')}>
                    <Ionicons name="bag-outline" size={28} color="black" />
                </TouchableOpacity>
            </View>

            {/* Nome da ONG */}
            <Text style={styles.causeTitle}>{ong.name}</Text>

            {/* Descrição da ONG */}
            <View style={styles.causeSection}>
                <Text style={styles.causeText}>{ong.description}</Text>
            </View>

            {/* Mapa com o ponto de coleta */}
            <View style={styles.collectionPointsSection}>
                <Text style={styles.collectionPointsTitle}>VENHA CONHECER NOSSO TRABALHO</Text>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: ong.location.latitude,
                        longitude: ong.location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsPointsOfInterest={false}
                    showsTraffic={true}
                    userInterfaceStyle="dark"
                >
                    <Marker
                        coordinate={{ latitude: ong.location.latitude, longitude: ong.location.longitude }}
                        title="Ponto de Coleta"
                        pinColor="blue"
                    />
                </MapView>
                <Text style={styles.causeText}>{ong.description2}</Text>

                <TouchableOpacity style={styles.donateButton} onPress={() => navigation.navigate('Doe')}>
                    <Text style={styles.donateButtonText}>DOAR</Text>
                </TouchableOpacity>
            </View>

            {/* Botões das redes sociais */}
            <View style={styles.partnersSection}>
                <Text style={styles.partnersTitle}>SAIBA MAIS</Text>
                <View style={styles.socialButtonsContainer}>
                    <TouchableOpacity style={styles.socialButton} onPress={() => openLink(ong.facebook)}>
                        <Ionicons name="logo-facebook" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} onPress={() => openLink(ong.instagram)}>
                        <Ionicons name="logo-instagram" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} onPress={() => openLink(ong.twitter)}>
                        <Ionicons name="logo-twitter" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginHorizontal: 15,
    },
    causeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 17,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    },
    causeSection: {
        padding: 15,
        backgroundColor: 'rgba(166, 242, 164, 0.73)',
    },
    causeText: {
        fontSize: 14,
        color: '#333',
        fontFamily: 'Poppins-Regular',
        textAlign: 'justify',
    },
    collectionPointsSection: {
        padding: 15,
        marginHorizontal: 15,
    },
    collectionPointsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    },
    map: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    collectionPointsText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 15,
        fontFamily: 'Poppins-Regular',
        textAlign: 'justify',
    },
    donateButton: {
        backgroundColor: '#FFA6E1',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignSelf: 'center',
    },
    donateButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    partnersSection: {
        padding: 15,
        marginHorizontal: 15,
    },
    partnersTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DoeRoupasScreen;
