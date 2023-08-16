import { StyleSheet, View } from 'react-native';

import TextButton from '../components/Button/TextButton';

import Cards from "../assets/cards.svg";
import Investments from "../assets/investments.svg";
import Shop from "../assets/shop.svg";
import Wallet from "../assets/wallet.svg";

function Home() {
  return (
    <View style={styles.container}>
      <TextButton title='Conta' IconSvg={Wallet}/>
      <View style={styles.buttonWrapper}>
        <TextButton title='Investimentos' IconSvg={Investments}/>
        <TextButton title='Cartões' IconSvg={Cards}/>
        <TextButton title='Shop' IconSvg={Shop} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    paddingVertical: 50,
    backgroundColor: '#FFCE00'
  },
  buttonWrapper: {
    backgroundColor: "#FFF", 
    minHeight: '100%'
  },
});

export default Home;
