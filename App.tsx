import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Home from './screens/home';

import {  useFonts, Lato_300Light, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import {  OpenSans_400Regular } from '@expo-google-fonts/open-sans';

function App() {
  let [fontsLoaded] = useFonts({ 
    Lato_300Light, 
    Lato_400Regular,
    Lato_700Bold,
    OpenSans_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
});

export default App;
