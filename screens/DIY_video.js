import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Share, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import logo from '../assets/Logo-GreenMart.png'; // Verifique o caminho da logo

// Componente Header (Navbar)
const Header = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');

    return (
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
    );
};

const DIY_video = ({ route, navigation }) => {
    const { videoUrl, title, description } = route.params;
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const handlePlayPause = async () => {
        if (isPlaying) {
            await videoRef.current.pauseAsync();
        } else {
            await videoRef.current.playAsync();
        }
        setIsPlaying(!isPlaying);
    };

    const onPlaybackStatusUpdate = (status) => {
        if (status.isLoaded) {
            setProgress(status.positionMillis / status.durationMillis);
        }
    };

    const handleShare = async () => {
        try {
            await Share.share({
                message: `${title} - ${description}`,
                url: videoUrl,
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header navigation={navigation} />

            {/* Botão de Voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>

            {/* Video */}
            <Video
                ref={videoRef}
                source={{ uri: videoUrl }}
                style={styles.video}
                resizeMode="contain"
                onPlaybackStatusUpdate={onPlaybackStatusUpdate}
                useNativeControls={false} // Desativa os controles nativos
                shouldPlay={isPlaying}
            />

            {/* Controles Personalizados */}
            <View style={styles.controls}>
                <TouchableOpacity onPress={handlePlayPause}>
                    <Ionicons name={isPlaying ? "pause" : "play"} size={28} color="black" />
                </TouchableOpacity>
                <View style={styles.progressBar}>
                    <View style={[styles.progress, { width: `${progress * 100}%` }]} />
                </View>
                <TouchableOpacity onPress={handleShare}>
                    <Ionicons name="share-social-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Título e Descrição */}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: '#fff' },
    header: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
    logo: { width: 70, height: 70, resizeMode: 'contain' },
    searchInput: { flex: 1, height: 40, backgroundColor: '#e0e0e0', borderRadius: 8, paddingHorizontal: 10, marginHorizontal: 15 },
    video: { width: '100%', height: 200, marginBottom: 10 },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
    },
    progressBar: {
        flex: 1,
        height: 5,
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    progress: {
        height: '100%',
        backgroundColor: '#4CAF50',
        borderRadius: 5,
    },
    title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
    description: { fontSize: 16, color: '#666', marginTop: 10 },
    backButton: {
        position: 'absolute',
        top: 30, // Ajuste a posição vertical conforme necessário
        left: 15, // Ajuste a posição horizontal conforme necessário
        zIndex: 1, // Garante que o botão fique acima de outros componentes
    },
});

export default DIY_video;
