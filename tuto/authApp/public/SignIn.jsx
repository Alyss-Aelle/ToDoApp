import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth';


const SignIn = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  //envoie des données pour Authentification
  const send = async() => { 

    console.log('envoyé',email,password)

    try {
      
      await auth().signInWithEmailAndPassword(email,password)


    } catch (error) {
      console.log('error',error)
    }

  }


  return (
    <>
     <TextInput
      label="Email"
      placeholder='Email'
      value={email}
      onChangeText={text => setEmail(text)}
       style={{
        borderWidth:1,
        borderColor:'orange',
        color:'black'
       }}
    />
      <TextInput
      label="password"
      placeholder='Password'

      // cacher mot de passe
      secureTextEntry={true}

      value={password}
      onChangeText={text => setPassword(text)}
       style={{
        borderWidth:1,
        borderColor:'orange',
        color:'black'
       }}
    />
    <Button  onPress={send}> connexion</Button>
    </>
  )
}

export default SignIn