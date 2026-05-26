import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import { supabase } from '../services/supabase'
import { theme } from '../styles/theme'

export default function ProfileScreen({ navigation }) {

  async function handleLogout() {

    await supabase.auth.signOut()

    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Perfil
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>
          Sair
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.background
  },

  title: {
    color: theme.colors.text,
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  button: {
    backgroundColor: theme.colors.danger,
    padding: 35,
    borderRadius: 10,
    alignSelf: 'center'
  },

  buttonText: {
    color: theme.colors.text,
    fontWeight: 'bold'
  }
})