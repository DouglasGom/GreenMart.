import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícones para botões de navegação

// Logo da sua aplicação
import logo from '../assets/Logo-GreenMart.png'; // Substitua pelo caminho correto da sua logo

// Componente Header (Navbar)
const Header = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.header}>
            <Image
                source={logo}
                style={styles.logo}
            />
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
    );
};

export default function UpcyclingScreen({ navigation }) {
    const [isFiltered, setFiltered] = useState(false);

    const handleCardPress = (screen) => {
        navigation.navigate(screen);
    };

    const toggleFilter = () => {
        setFiltered(!isFiltered);
    };

    return (
        <View style={styles.container}>
            {/* Navbar/Header */}
            <Header navigation={navigation} />

            {/* Título e Filtro */}
            <Text style={styles.title}>UPCYCLING</Text>
            <Text style={styles.subtitle}>DÊ UMA NOVA VIDA AO QUE NÃO USA</Text>
            <TouchableOpacity style={styles.filterButton} onPress={toggleFilter}>
                
                <Ionicons name="filter" size={20} color="black" />
            </TouchableOpacity>

            {/* Conteúdo dos Cards */}
            <ScrollView style={styles.cardsContainer}>
                <TouchableOpacity style={styles.card} onPress={() => handleCardPress('DetailsScreen1')}>
                    <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>IDEIAS GENIAIS PARA FAZER COM AS ROUPAS QUE VOCÊ NÃO USA MAIS!</Text>
                        <Text style={styles.cardDescription}>
                            Aprenda a como reutilizar aquelas roupas que acabam manchadas ou que não te servem mais de uma forma criativa.
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => handleCardPress('DetailsScreen2')}>
                    <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>COMO FIZ UM CONJUNTO UTILIZANDO APENAS ROUPAS QUE NÃO USAVA MAIS</Text>
                        <Text style={styles.cardDescription}>
                            Trazendo minha experiência incrível com upcycling, economizando em roupas e criando meu próprio estilo.
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => handleCardPress('DetailsScreen3')}>
                    <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>IDEIAS - FAZENDO UMA BOLSA REUTILIZANDO TECIDOS DE DIFERENTES PEÇAS</Text>
                        <Text style={styles.cardDescription}>
                            Aprenda a criar uma bolsa estilosa e sustentável reutilizando tecidos de diferentes peças que você não usa mais.
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    header: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: -10,
        marginLeft: -15,
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginHorizontal: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0CD028',
        borderRadius: 20,
        padding: 10,
        alignSelf: 'flex-end',
        marginBottom: 20,
        marginRight: 20
    },
    filterText: {
        marginRight: 5,
        color: '#000',
    },
    cardsContainer: {
        flex: 1,
    },
    card: {
        marginLeft: 35,
        marginRight: 35,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        overflow: 'hidden',
        elevation: 3, // sombra para Android
        shadowColor: '#000', // sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    cardImage: {
        height: 150,
        width: '100%',
    },
    cardContent: {
        padding: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
});
