import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

const Notificacao = () => {
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    const getPermissionsAndToken = async () => {
      // Solicitar permissão para notificações
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        if (newStatus !== 'granted') {
          Alert.alert('Falha', 'Você precisa permitir notificações para receber alertas!');
          return;
        }
      }

      // Obter o token de notificação
      const tokenObject = await Notifications.getExpoPushTokenAsync();
      // Verificar se o token é um objeto e se possui a propriedade data
      if (tokenObject && typeof tokenObject === 'object') {
        const token = tokenObject.data || tokenObject; // Acessa a propriedade data ou usa o próprio objeto
        setExpoPushToken(token);
      } else {
        console.error('O token obtido não é uma string:', tokenObject);
      }
      console.log('Expo Push Token:', tokenObject);
    };

    getPermissionsAndToken();
  }, []);

  return (
    <View>
      <Text>Expo Push Token:</Text>
      <Text>{expoPushToken || 'Aguardando token...'}</Text>
    </View>
  );
};

export default Notificacao;
