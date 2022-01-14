import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import foto from './assets/perfil.jpg';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_header}>
          <Image source={foto} style={style.photo} />
          <Text style={style.name}>THAYNARA ARAÚJO</Text>
          <Text style={style.occupation}>Desenvolvedora Mobile</Text>
          <View>
            <Icon name="github" size={30} />
            <Text>LinkedIn</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#B0C4DE',
    flex: 1,
  },
  container_header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#191970',
    marginTop: 10
  },
  occupation: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#191970',
    marginBottom: 10,
  },
});

export default App;
