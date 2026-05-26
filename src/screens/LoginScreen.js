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

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password
      })

    if (!error) {
      navigation.navigate('Base')
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Cars
      </Text>

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
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.link}>
          Criar conta
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  link: {
    color: theme.colors.primary,
    marginTop: 20,
    textAlign: 'center'
  }
})