import { useState } from 'react'

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

import { supabase } from '../services/supabase'
import { theme } from '../styles/theme'

export default function AddCarScreen() {

  const [name, setName] = useState('')
  const [model, setModel] = useState('')

  async function handleAddCar() {

    await supabase
      .from('cars')
      .insert({
        name,
        model
      })

    setName('')
    setModel('')
  }

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Nome do carro"
        placeholderTextColor="#999"
        style={styles.input}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Modelo"
        placeholderTextColor="#999"
        style={styles.input}
        onChangeText={setModel}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddCar}
      >
        <Text style={styles.buttonText}>
          Cadastrar
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  input: {
    backgroundColor: theme.colors.card,
    color: theme.colors.text,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: theme.colors.text,
    fontWeight: 'bold'
  }
})