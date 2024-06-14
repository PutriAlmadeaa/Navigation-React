import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeIcon from './assets/bottomTabIcons/home.png'
import ProgateIcon from './assets/bottomTabIcons/progate.png'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom20}>Home Screen</Text>
      <Button
        style={styles.button}
        title="Pergi ke Progate"
        onPress={() => {
          navigation.navigate('Progate')
        }}
      />
    </View>
  )
}

const ProgateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate</Text>
      <Text style={styles.marginBottom20}>Ayo belajar!</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  )
}

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Progate" component={ProgateScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginBottom20: {
    marginBottom: 20,
  },
  homeIcon: {
    width: 20,
    height: 20,
  },
  progateIcon: {
    width: 40,
    height: 40,
  },
})

export default App