import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import DoeRoupas from './screens/DoeRoupas';
import TelaNotificacoes from './screens/TelaNotificacoes';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen'; // Importando o OnboardingScreen
import { Ionicons } from '@expo/vector-icons';
import CadastroScreen from  './screens/Cadastro';
import * as Font from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaDoacao from './screens/TelaDoacao';
import Login from './screens/Entrar';
import DIY from './screens/DIY';
import Doe from './screens/Doe';
import ong from './screens/ONGs';
import DoeRoupasDetail from './screens/DoeRoupasDetail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DoeRoupasStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DoeRoupas" component={DoeRoupas} />
      <Stack.Screen name="Doe" component={Doe} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle:{marginHorizontal: '5%',
          paddingBottom: 3,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Início') {
            iconName = 'home-outline';
          } else if (route.name === 'Doe Roupas') {
            iconName = 'gift-outline';
          } else if (route.name === 'DIY') {
            iconName = 'cut';
          } else if (route.name === 'Prêmios') {
            iconName = 'star-outline';
          } else if (route.name === 'Eu') {
            iconName = 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{ headerShown: false }} // Desabilita o cabeçalho para a tela Início
      />
      <Tab.Screen
        name="Doe Roupas"
        component={DoeRoupasStack}
        options={{ headerShown: false }} // Desabilita o cabeçalho para a tela Doe Roupas
      />
      <Tab.Screen
        name="DIY"
        component={DIY}
        options={{ headerShown: false }} // Desabilita o cabeçalho para a tela DIY
      />
      <Tab.Screen
        name="Prêmios"
        component={HomeScreen}
        options={{ headerShown: false }} // Desabilita o cabeçalho para a tela Prêmios
      />
      <Tab.Screen
        name="Eu"
        component={TelaNotificacoes}
        options={{ headerShown: false }} // Desabilita o cabeçalho para a tela Eu
      />
    </Tab.Navigator>
  );
};


const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
  };

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSplashVisible ? (
          <Stack.Screen name="Splash" options={{ headerShown: false }}>
            {() => <SplashScreen onFinish={handleSplashFinish} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Main" component={MainTabNavigator} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="TelaDoacao" component={TelaDoacao} />
            <Stack.Screen name="ong" component={ong} />
            <Stack.Screen name="DoeRoupasDetail" component={DoeRoupasDetail} options={{ title: 'Detalhes da ONG' }} />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

