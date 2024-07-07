import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Card, Button, Icon, Avatar} from 'react-native-elements';

const Profil = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Avatar
          rounded
          size="xlarge"
          source={require('../assets/profil.jpg')}
          containerStyle={styles.avatar}
        />
        <Text style={styles.name}>Rofida</Text>
        <Text style={styles.email}>rofida45@gmail.com</Text>
      </View>

      <Card containerStyle={styles.card}>
        <Card.Title>Informasi Pribadi</Card.Title>
        <Card.Divider />
        <View style={styles.infoRow}>
          <Icon name="phone" type="font-awesome" color="#517fa4" />
          <Text style={styles.infoText}>+62 123 456 789</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="map-marker" type="font-awesome" color="#517fa4" />
          <Text style={styles.infoText}>Jakarta, Indonesia</Text>
        </View>
        <Button
          icon={<Icon name="edit" color="#ffffff" />}
          buttonStyle={styles.button}
          title="Edit Profile"
        />
      </Card>

      <Card containerStyle={styles.card}>
        <Card.Title>Pengaturan Akun</Card.Title>
        <Card.Divider />
        <View style={styles.infoRow}>
          <Icon name="bell" type="font-awesome" color="#517fa4" />
          <Text style={styles.infoText}>Notifikasi</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="cog" type="font-awesome" color="#517fa4" />
          <Text style={styles.infoText}>Pengaturan</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="lock" type="font-awesome" color="#517fa4" />
          <Text style={styles.infoText}>Kebijakan</Text>
        </View>
      </Card>

      <Card containerStyle={styles.card}>
        <Card.Title>Bantuan</Card.Title>
        <Card.Divider />
        <View style={styles.infoRow}>
          <Icon name="question-circle" type="font-awesome" color="#517fa4" />
          <Text style={styles.infoText}>Pusat Bantuan</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="info-circle" type="font-awesome" color="#517fa4" />
          <Text style={styles.infoText}>Tentang Kami</Text>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#841584',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Profil;
