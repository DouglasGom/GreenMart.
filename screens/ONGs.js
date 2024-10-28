import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import logo from '../assets/Logo-GreenMart.png';
import ong1 from '../assets/ong1.jpg'; // Exemplo de imagem de ONG

const DoeRoupasScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    // Dados das ONGs
    const ongs = [
        {
            id: 1,
            name: 'ONG A',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            image: ong1,
            location: { latitude: -23.5505, longitude: -46.6333 },
            facebook: 'https://www.facebook.com/ongA',
            instagram: 'https://www.instagram.com/ongA',
            twitter: 'https://twitter.com/ongA'
        },
        {
            id: 2,
            name: 'ONG B',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            image: ong1,
            location: { latitude: -23.5505, longitude: -46.6333 },
            facebook: 'https://www.facebook.com/ongA',
            instagram: 'https://www.instagram.com/ongA',
            twitter: 'https://twitter.com/ongA'
        },
    ];

    return (
        <ScrollView style={styles.container}>
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

            <View style={styles.partnersSection}>
                <Text style={styles.partnersTitle}>CONHEÇA AS ONG'S PARCEIRAS</Text>
                {ongs.map((ong) => (
                    <TouchableOpacity
                        key={ong.id}
                        style={styles.ongButton}
                        onPress={() => navigation.navigate('DoeRoupasDetail', { ong })}
                    >
                        <Image source={ong.image} style={styles.ongImage} />
                        <Text style={styles.causeTitle}>{ong.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
    logo: { width: 70, height: 70, resizeMode: 'contain' },
    searchInput: { flex: 1, height: 40, backgroundColor: '#e0e0e0', borderRadius: 8, paddingHorizontal: 10, marginHorizontal: 15 },
    partnersSection: { padding: 15, marginHorizontal: 15 },
    partnersTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', fontFamily: 'Poppins-Bold' },
    ongButton: { alignItems: 'center', marginBottom: 20 },
    ongImage: { width: '100%', height: 180, borderRadius: 8 },
    causeTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 5, marginTop: 10, textAlign: 'center', fontFamily: 'Poppins-Bold' },
});

export default DoeRoupasScreen;
