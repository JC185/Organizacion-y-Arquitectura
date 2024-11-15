import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/empleados')
      .then(response => response.json())
      .then(data => setEmpleados(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <Text>Lista de Empleados</Text>
      <FlatList
        data={empleados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.nombre}</Text>}
      />
    </View>
  );
};

export default Empleados;