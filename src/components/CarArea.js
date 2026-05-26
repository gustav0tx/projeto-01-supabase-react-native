import { View, Text, StyleSheet } from 'react-native'
import { theme } from '../styles/theme'

export default function CarArea({ car }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{car.name}</Text>

      <Text style={styles.text}>
        modelo: {car.model}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  title: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: 'bold'
  },

  text: {
    color: theme.colors.gray,
    marginTop: 5
  }
})