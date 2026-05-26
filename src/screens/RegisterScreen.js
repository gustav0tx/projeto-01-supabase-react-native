import { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import { supabase } from '../services/supabase'
import { theme } from '../styles/theme'

export default function RegisterScreen({ navigation }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister() {

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name
          }
        }
      })

    if (!error) {
      navigation.navigate('Login')
    }
  }

  return (
    


    <View style={styles.container}>
        
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>← Voltar</Text>
      </TouchableOpacity>


      <Text style={styles.title}>
        Cadastro
      </Text>

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#999"
        style={styles.input}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
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
    justifyContent: 'center',
    padding: 20,
    backgroundColor: theme.colors.background
  },

  title: {
    color: theme.colors.text,
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold'
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

