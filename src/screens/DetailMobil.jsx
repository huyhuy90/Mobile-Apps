import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {OrderContext} from '../context/OrderContext';

const DetailMobil = ({route, navigation}) => {
  const {car} = route.params;
  const {addOrder} = useContext(OrderContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={car.image} style={styles.image} />
      <Text style={styles.title}>{car.name}</Text>
      <Text style={styles.price}>{car.price}</Text>
      <Text style={styles.description}>
        {car.description || 'Deskripsi mobil tidak tersedia.'}
      </Text>
      <Button
        icon={<Icon name="shopping-cart" color="#ffffff" />}
        buttonStyle={styles.button}
        title="Sewa Sekarang"
        onPress={() => {
          addOrder(car);
          navigation.navigate('Pemesanan');
        }}
      />
      <Button
        icon={<Icon name="arrow-back" color="#ffffff" />}
        buttonStyle={[styles.button, styles.backButton]}
        title="Kembali"
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#841584',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#841584',
    borderRadius: 5,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#555',
  },
});

export default DetailMobil;
