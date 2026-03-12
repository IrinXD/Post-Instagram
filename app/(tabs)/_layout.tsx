import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Publicacao } from '../Publicacao';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Publicacao postData={{
        avatarUrl: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png',
        nameUser: 'John Doe',
        mediaUrl: 'https://static.wikia.nocookie.net/super-saga-do-fim-do-mundo-tmj/images/8/84/Imagem_do_parque.jpg/revision/latest/scale-to-width-down/672?cb=20170212153814&path-prefix=pt-br',
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    padding: 16,
  },
});

