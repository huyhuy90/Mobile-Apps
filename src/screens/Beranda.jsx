import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Card, Button} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Beranda = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/rental.jpeg')} style={styles.banner} />
      <Text style={styles.title}>Selamat Datang di Rental Mobil</Text>
      <Text style={styles.subtitle}>
        Temukan mobil impianmu dengan harga terbaik!
      </Text>

      <Card containerStyle={styles.card}>
        <Card.Title>Promo Spesial</Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>
          Dapatkan diskon hingga 20% untuk pemesanan pertama Anda!
        </Text>
        <Button
          icon={<FontAwesome name="car" size={15} color="white" />}
          buttonStyle={styles.button}
          title="Pesan Sekarang"
          onPress={() => navigation.navigate('Daftar')}
        />
      </Card>

      <Card containerStyle={styles.card}>
        <Card.Title>Kenapa Memilih Kami?</Card.Title>
        <Card.Divider />
        <View style={styles.feature}>
          <FontAwesome name="car" size={20} color="#517fa4" />
          <Text style={styles.featureText}>Banyak Pilihan Mobil</Text>
        </View>
        <View style={styles.feature}>
          <FontAwesome name="dollar" size={20} color="#517fa4" />
          <Text style={styles.featureText}>Harga Terjangkau</Text>
        </View>
        <View style={styles.feature}>
          <FontAwesome name="thumbs-up" size={20} color="#517fa4" />
          <Text style={styles.featureText}>Layanan Terbaik</Text>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
  },
  cardText: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#841584',
    borderRadius: 5,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default Beranda;
