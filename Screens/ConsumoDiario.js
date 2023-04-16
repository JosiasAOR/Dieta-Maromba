import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function ConsumoDiario({navigation}) {
  const [alimentosDoDia, setAlimentosDoDia] = useState([]);
  const [nomeAlimento, setNomeAlimento] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [calorias, setCalorias] = useState("");

  const adicionarAlimento = (nomeAlimento, quantidade, calorias) => {
    const novoAlimento = {
      nome: nomeAlimento,
      quantidade: quantidade,
      calorias: calorias
    }
    setAlimentosDoDia([...alimentosDoDia, novoAlimento]);
    setNomeAlimento("");
    setQuantidade("");
    setCalorias("");
  }

  const removerAlimento = (index) => {
    const novosAlimentos = [...alimentosDoDia];
    novosAlimentos.splice(index, 1);
    setAlimentosDoDia(novosAlimentos);
  }

  const calcularCaloriasConsumidas = () => {
    let totalCalorias = 0;
    alimentosDoDia.forEach((alimento) => {
      totalCalorias += alimento.calorias * alimento.quantidade;
    });
    return totalCalorias;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Consumo Diário</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do alimento"
          onChangeText={(text) => setNomeAlimento(text)}
          value={nomeAlimento}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade"
          onChangeText={(text) => setQuantidade(text)}
          value={quantidade}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite as calorias por porção"
          onChangeText={(text) => setCalorias(text)}
          value={calorias}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => adicionarAlimento(nomeAlimento, quantidade, calorias)}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.alimentosContainer}>
        {alimentosDoDia.map((alimento, index) => (
          <TouchableOpacity
            key={index}
            style={styles.alimento}
            onPress={() => removerAlimento(index)}
          >
            <Text style={styles.alimentoText}>{alimento.nome} - {alimento.quantidade} porções - {alimento.calorias} calorias por porção</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total de calorias consumidas: {calcularCaloriasConsumidas()} calorias</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    paddingTop: 30,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#008000",
  },
  inputContainer: {
    width: "90%",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  alimentosContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 20,
  },
  alimento: {
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  alimentoText: {
    color: "#fff",
    fontSize: 16,
  },
  totalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 20,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008000",
  },
});
