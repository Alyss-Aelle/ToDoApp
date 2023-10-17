import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import RoutePublic from './public/RoutePublic'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import RouteSecure from './secure/RouteSecure';


const AuthApp = () => {


    const [initialize, setInitialize] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChange = (user) => { 
        setUser(user);

        if (initialize) setInitialize(false);
        
     }
    
    useEffect(() => {
    
        //abonnement changement etat fonction
        const subscribe = auth().onAuthStateChanged(onAuthStateChange);

        return subscribe

    }, []);

    if (initialize) return null; 


  return (

    <>
    {(!user) ? <NavigationContainer>
        <RoutePublic/>
    </NavigationContainer>:
    <RouteSecure/>
    
    } 
    </>
  )
}

export default AuthApp