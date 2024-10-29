import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const CouponsScreen = () => {
  const currentGreencoins = 50; // Exemplo de GreenCoins atuais do usuário
  const coupons = [
    { id: 1, title: '5% de desconto (nacionais)', cost: 100, image: { uri: 'https://via.placeholder.com/60x60.png?text=%25' } },
    { id: 2, title: 'Cupom BOAS VINDAS 10% OFF', cost: 100, image: { uri: 'https://via.placeholder.com/60x60.png?text=10%25' }, exclusive: true },
    { id: 3, title: '15% de desconto (nacionais)', cost: 200, image: { uri: 'https://via.placeholder.com/60x60.png?text=%25' } },
    { id: 4, title: 'Vale presente R$ 80,00', cost: 600, image: { uri: 'https://via.placeholder.com/60x60.png?text=Gift' } },
  ];

  const handleRedeem = (cost) => {
    if (currentGreencoins >= cost) {
      alert('Cupom resgatado com sucesso!');
    } else {
      alert(`Não há GreenCoins suficientes. Faltam ${cost - currentGreencoins} GreenCoins.`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>GreenCoins</Text>
      <Text style={styles.subtitle}>SEJA RECOMPENSADO A CADA DOAÇÃO</Text>
      <Text style={styles.infoText}>Acumule nossos GreenCoins e resgate prêmios incríveis, como descontos em nossos produtos!</Text>
      
      <View style={styles.couponsContainer}>
        {coupons.map((coupon) => {
          const progress = currentGreencoins / coupon.cost;

          return (
            <View key={coupon.id} style={styles.couponCard}>
              {/* Imagem do cupom */}
              <Image source={coupon.image} style={styles.couponImage} />

              {/* Título do Cupom */}
              <Text style={styles.couponTitle}>{coupon.title}</Text>

              {/* Barra de Progresso */}
              <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${Math.min(progress * 100, 100)}%` }]} />
              </View>
              <Text style={styles.progressText}>
                {currentGreencoins} / {coupon.cost} GreenCoins
              </Text>

              {/* Botão de Resgatar */}
              <TouchableOpacity
                style={styles.redeemButton}
                onPress={() => handleRedeem(coupon.cost)}
              >
                <Text style={styles.redeemButtonText}>Resgatar</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#2E7D32',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  couponsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  couponCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  couponImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  couponTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  progressBarContainer: {
    height: 8,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2E7D32',
  },
  progressText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  redeemButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  redeemButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CouponsScreen;
