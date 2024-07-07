import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

const DaftarMobil = () => {
  const cars = [
    {
      id: 1,
      name: 'Toyota Avanza',
      image: require('../assets/avanza.jpeg'), // Gambar lokal
      price: 'Rp 300.000/hari',
    },
    {
      id: 2,
      name: 'Honda Civic',
      image: require('../assets/civic.jpeg'), // Gambar dari URL
      price: 'Rp 500.000/hari',
    },
    {
      id: 3,
      name: 'Mitsubishi Pajero',
      image: require('../assets/pajero.jpeg'), // Gambar dari URL
      price: 'Rp 700.000/hari',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Mobil</Text>
      {cars.map(car => (
        <Card key={car.id} containerStyle={styles.card}>
          {typeof car.image === 'string' ? (
            <Image source={{uri: car.image}} style={styles.carImage} />
          ) : (
            <Image source={car.image} style={styles.carImage} />
          )}
          <Card.Title>{car.name}</Card.Title>
          <Card.Divider />
          <Text style={styles.carPrice}>{car.price}</Text>
          <Button
            icon={<Icon name="info" color="#ffffff" />}
            buttonStyle={styles.button}
            title="Detail"
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
