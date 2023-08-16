import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';

import Home from './screens/home';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    fontFamily: 'Lato-Bold'
  },
});

export default App;
