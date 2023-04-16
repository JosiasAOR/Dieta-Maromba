import { View, Text, Pressable, TextInput, Button, RadioButton,StyleSheet,TouchableOpacity } from "react-native";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export function CalcularTMB({ navigation }) {
  const [result, setResult] = useState(null)
  const [person, setPerson] = useState({
    age: '',
    height: '',
    weight: '',
    gender: 'Male'
  })
  const salvarItem = async (TMB) => {
    try {
      await AsyncStorage.setItem('TMB', TMB);
      console.log('Item salvo com sucesso.');
    } catch (error) {
      console.log('Erro ao salvar item:', error);
    }
  }

  const calculateTMB = () => {
    const { age, height, weight, gender } = person;
    if (age && height && weight) {
      let tmb = 0;
      if (gender === 'Male') {
        tmb = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
      } else {
        tmb = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
      }

      setResult(tmb.toFixed(2));
      salvarItem(tmb.toFixed(2))

    }
  };

  return (
    <View style={styles.container}>
  <Text style={styles.label}>Idade</Text>
  <TextInput
    style={styles.input}
    onChangeText={(age) => setPerson({ ...person, age: age })}
    value={person.age}
    keyboardType='numeric'
  />
  <Text style={styles.label}>Altura (cm)</Text>
  <TextInput
    style={styles.input}
    onChangeText={(height) => setPerson({ ...person, height: height })}
    value={person.height}
    keyboardType='numeric'
  />
  <Text style={styles.label}>Peso (kg)</Text>
  <TextInput
    style={styles.input}
    onChangeText={(weight) => setPerson({ ...person, weight: weight })}
    value={person.weight}
    keyboardType='numeric'
  />
  <Text style={styles.label}>Gender</Text>
  <View style={styles.genderButtonsContainer}>
    <TouchableOpacity
      onPress={() => { setPerson({ ...person, gender: 'Male' }) }}
      style={[styles.genderButton, { backgroundColor: person.gender === 'Male' ? '#007AFF' : '#EFEFF4' }]}
    >
      <Text style={{ color: person.gender === 'Male' ? 'white' : 'black' }}>Homem</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => { setPerson({ ...person, gender: 'Female' }) }}
      style={[styles.genderButton, { backgroundColor: person.gender === 'Female' ? '#FF2D55' : '#EFEFF4' }]}
    >
      <Text style={{ color: person.gender === 'Female' ? 'white' : 'black' }}>Mulher</Text>
    </TouchableOpacity>
  </View>
  <TouchableOpacity
    onPress={calculateTMB}
    style={styles.calculateButton}
  >
    <Text style={{ color: 'white' }}>Calculate TMB</Text>
  </TouchableOpacity>
  {result && <Text style={styles.resultText}>Sua TMB é {result} Kcal/Dia</Text>}
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#222222',
    marginBottom: 20,
    backgroundColor: '#FFFFFF'
  },
  genderButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  genderButton: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  calculateButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#5DB075',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  resultText: {
    fontSize: 18,
    marginTop: 20
  }
});

