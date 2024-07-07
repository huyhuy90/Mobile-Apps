import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import {OrderContext} from '../context/OrderContext';

const Pemesanan = () => {
  const {orders} = useContext(OrderContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {orders.length === 0 ? (
        <Text style={styles.emptyText}>Belum ada mobil yang dipesan</Text>
      ) : (
        orders.map((car, index) => (
          <Card key={index} containerStyle={styles.card}>
            <Card.Title>{car.name}</Card.Title>
            <Card.Divider />
            <Text style={styles.carPrice}>{car.price}</Text>
          </Card>
        ))
      )}
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
  emptyText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
  },
  carPrice: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Pemesanan;
