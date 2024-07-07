import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const DaftarMobil = () => {
  const navigation = useNavigation();

  const cars = [
    {
      id: 1,
      name: 'Toyota Avanza',
      image: require('../assets/avanza.jpeg'),
      price: 'Rp 300.000/hari',
      description: 'Toyota Avanza adalah mobil yang nyaman dan ekonomis...',
    },
    {
      id: 2,
      name: 'Honda Civic',
      image: require('../assets/civic.jpeg'),
      price: 'Rp 500.000/hari',
      description:
        'Honda Civic adalah mobil dengan desain sporty dan performa tinggi...',
    },
    {
      id: 3,
      name: 'Mitsubishi Pajero',
      image: require('../assets/pajero.jpeg'),
      price: 'Rp 700.000/hari',
      description:
        'Mitsubishi Pajero adalah mobil SUV tangguh dengan kapasitas besar...',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Mobil</Text>
      {cars.map(car => (
        <Card key={car.id} containerStyle={styles.card}>
          <Image source={car.image} style={styles.carImage} />
          <Card.Title>{car.name}</Card.Title>
          <Card.Divider />
          <Text style={styles.carPrice}>{car.price}</Text>
          <Button
            icon={<Icon name="info" color="#ffffff" />}
            buttonStyle={styles.button}
            title="Detail"
            onPress={() => navigation.navigate('Detail', {car})}
          />
        </Card>
      ))}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
  },
  carImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  carPrice: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#841584',
    borderRadius: 5,
  },
});

export default DaftarMobil;
