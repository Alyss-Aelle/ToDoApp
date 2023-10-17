import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const SignUp = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goTo = () => { 
    
    navigation.navigate('SignIn')
   }

   const send = () => { 
    
    }

  return (
    <View>
      <Button  onPress={goTo}> Go SignIn</Button>

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
      value={password}
      onChangeText={text => setPassword(text)}
       style={{
        borderWidth:1,
        borderColor:'orange',
        color:'black'
       }}
    />

<Button  onPress={send}> Send</Button>

    </View>
  )
}

export default SignUp