import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import logo from '../assets/Logo-GreenMart.png';

const Header = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar..."
                value={searchText}
                onChangeText={setSearchText}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Sacola')}>
                <Ionicons name="bag-outline" size={28} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default function UpcyclingScreen({ navigation }) {
    const handleCardPress = (videoUrl, title, description) => {
        navigation.navigate('video', { videoUrl, title, description });
    };

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Text style={styles.title}>UPCYCLING</Text>
            <Text style={styles.subtitle}>DÊ UMA NOVA VIDA AO QUE NÃO USA</Text>

            <ScrollView style={styles.cardsContainer}>
                {[
                    {
                        videoUrl: 'https://path.to/video1.mp4',
                        title: 'IDEIAS GENIAIS PARA FAZER COM AS ROUPAS QUE VOCÊ NÃO USA MAIS!',
                        description: 'Aprenda a como reutilizar aquelas roupas que acabam manchadas ou que não te servem mais de uma forma criativa.',
                        imageUri: 'https://via.placeholder.com/150',
                    },
                    {
                        videoUrl: 'https://path.to/video2.mp4',
                        title: 'COMO FIZ UM CONJUNTO UTILIZANDO APENAS ROUPAS QUE NÃO USAVA MAIS',
                        description: 'Trazendo minha experiência incrível com upcycling, economizando em roupas e criando meu próprio estilo.',
                        imageUri: 'https://via.placeholder.com/150',
                    },
                    {
                        videoUrl: 'https://path.to/video3.mp4',
                        title: 'IDEIAS - FAZENDO UMA BOLSA REUTILIZANDO TECIDOS DE DIFERENTES PEÇAS',
                        description: 'Aprenda a criar uma bolsa estilosa e sustentável reutilizando tecidos de diferentes peças que você não usa mais.',
                        imageUri: 'https://via.placeholder.com/150',
                    },
                ].map((card, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.card}
                        onPress={() => handleCardPress(card.videoUrl, card.title, card.description)}
                    >
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: card.imageUri }} style={styles.cardImage} />
                            <Ionicons name="play-circle-outline" style={styles.playIcon} size={50} color="white" />
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{card.title}</Text>
                            <Text style={styles.cardDescription}>{card.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
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
    cardsContainer: {
        flex: 1,
    },
    card: {
        marginHorizontal: 35,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginLeft: 10,
        marginRight:10,
        marginBottom: 15,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    cardImage: {
        height: 200,
        width: '100%',
    },
    imageContainer: {
        position: 'relative',
    },
    playIcon: {
        position: 'absolute',
        top: '40%', // Ajuste a posição conforme necessário
        left: '43%', // Ajuste a posição conforme necessário
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
});
