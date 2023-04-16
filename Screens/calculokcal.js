import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function MontarDieta ({navigation}) {
  const [alimentos, setAlimentos] = useState([]);
  const [novoAlimento, setNovoAlimento] = useState('');

  const adicionarAlimento = () => {
    setAlimentos([...alimentos, novoAlimento]);
    setNovoAlimento('');
  }

  const removerAlimento = (index) => {
    const novosAlimentos = [...alimentos];
    novosAlimentos.splice(index, 1);
    setAlimentos(novosAlimentos);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Monte Sua Dieta</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um alimento"
          value={novoAlimento}
          onChangeText={(text) => setNovoAlimento(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={adicionarAlimento}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.alimentosContainer}>
        {alimentos.map((alimento, index) => (
          <TouchableOpacity
            key={index}
            style={styles.alimento}
            onPress={() => removerAlimento(index)}
          >
            <Text style={styles.alimentoText}>{alimento}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  alimentosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  alimento: {
    backgroundColor: 'gray',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  alimentoText: {
    color: 'white',
  },
});
