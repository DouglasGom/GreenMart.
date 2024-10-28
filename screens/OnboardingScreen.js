import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Animated, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Dados de onboarding
const onboardingData = [
  {
    id: '1',
    title: 'BEM-VINDO AO GREENMART',
    description: 'Descubra formas práticas de ser mais sustentável no cotidiano.',
    icon: 'https://i.postimg.cc/g0DHjNbM/1.png',
    imageStyle: { width: 300, height: 400 },
    titleStyle: { fontSize: 25, fontFamily: 'Poppins-Bold', color: '#333', marginVertical: 10 },
    descriptionStyle: { fontSize: 16, fontFamily: 'Poppins-Regular', color: '#666', textAlign: 'center' },
  },
  {
    id: '2',
    title: 'SEPARE',
    description: 'Organize suas doações de forma prática e consciente!',
    icon: 'https://i.postimg.cc/CK3nF8zv/2.png',
    imageStyle: { width: 450, height: 450 },
    titleStyle: { fontSize: 25, fontFamily: 'Poppins-Bold', color: '#333', marginVertical: 10, marginTop: -40 },
    descriptionStyle: { fontSize: 16, fontFamily: 'Poppins-Regular', color: '#777', textAlign: 'center' },
  },
  {
    id: '3',
    title: 'DOE',
    description: 'Participe do nosso programa de doações e ajude quem precisa.',
    icon: 'https://raw.githubusercontent.com/DouglasGom/GreenMart/refs/heads/main/assets/3%20(1).png',
    imageStyle: { width: 400, height: 400, marginTop: 50 },
    titleStyle: { fontSize: 25, fontFamily: 'Poppins-Bold', color: '#333', marginVertical: 10, marginTop: -40  },
    descriptionStyle: { fontSize: 16, fontFamily: 'Poppins-Regular', color: '#666', textAlign: 'center' },
  },
  {
    id: '4',
    title: 'GANHE',
    description: 'Seja recompensado ao participar de atividades sustentáveis.',
    icon: 'https://i.postimg.cc/Yqd4vZvL/3.png',
    imageStyle: { width: 350, height: 350, marginTop: 50 },
    titleStyle: { fontSize: 25, fontFamily: 'Poppins-Bold', color: '#333', marginVertical: 10, marginTop: 10  },
    descriptionStyle: { fontSize: 16, fontFamily: 'Poppins-Regular', color: '#666', textAlign: 'center' },
  },
  {
    id: '5',
    title: 'Vamos Começar!',
    description: 'Está pronto para sua jornada sustentável?',
    icon: 'https://i.postimg.cc/bwdZkgnC/4.png',
    imageStyle: { width: 500, height: 500, marginTop: -25 },
    titleStyle: { fontSize: 25, fontFamily: 'Poppins-Bold', color: '#333', marginVertical: 10, marginTop: -70 },
    descriptionStyle: { fontSize: 16, fontFamily: 'Poppins-Regular', color: '#666', textAlign: 'center' },
  },
];

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      navigation.navigate('Cadastro'); // Agora navega para a tela Cadastro
    }
  };
  

  const handleScroll = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image 
        source={{ uri: item.icon }} 
        style={item.imageStyle} 
        resizeMode="contain" 
      />
      <Text style={item.titleStyle}>{item.title}</Text>
      <Text style={item.descriptionStyle}>{item.description}</Text>
    </View>
  );

  const renderIndicator = () => (
    <View style={styles.indicatorContainer}>
      {onboardingData.map((_, index) => (
        <View
          key={index}
          style={[styles.indicatorDot, currentIndex === index && styles.activeIndicator]}
        />
      ))}
    </View>
  );

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <FlatList
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        ref={flatListRef}
      />
      {renderIndicator()}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Icon name="arrow-forward" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  indicatorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: '#0CD028',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: 'rgba(254, 94, 204, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnboardingScreen;
