import { useEffect, useState } from 'react'

import {
  View,
  FlatList,
  StyleSheet
} from 'react-native'

import { supabase } from '../services/supabase'
import { theme } from '../styles/theme'

import CarArea from '../components/CarArea'

export default function HomeScreen() {

  const [cars, setCars] = useState([])

  useEffect(() => {
    fetchCars()
  }, [])

  async function fetchCars() {

    const { data } =
      await supabase
        .from('cars')
        .select('*')

    setCars(data)
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={cars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CarArea car={item} />
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center'
  }
})