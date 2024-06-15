import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert} from 'react-native'

const Contact = ({navigation}) => {
  const [name, setName] = useState ('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (event) => {
      if (name === '' && message === '') {
        return
      }
      
      event.preventDefault()

      Alert.alert(
        'Konfirmasi',
        'Anda memiliki data yang belum disimpan. Apakah anda yakin ingin meninggalkan layar ini?',
        [
          {text: 'Tetap di sini', style: 'cancel', onPress: () => {} },
          {text: 'Lanjutkan pergi', style: 'destructive', onPress: () => navigation.dispatch(event.data.action) },
        ]
      )
     })

     return unsubscribe;
  }, [navigation, name, message])
  
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Nama Anda" 
        style={styles.textInput} 
        value={name}
        onChange={setName}
      />
      <TextInput 
        placeholder="Pesan" 
        style={styles.textInput} 
        value={message}
        onChange={setMessage}
      />
      <View style={styles.buttonContainer}>
        <Button title="Kirim" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
})

export default Contact