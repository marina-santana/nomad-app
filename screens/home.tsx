import { StyleSheet, View, Text } from 'react-native';

import TextButton from '../components/Button/TextButton';

import Cards from "../assets/cards.svg";
import Investments from "../assets/investments.svg";
import Shop from "../assets/shop.svg";
import Wallet from "../assets/wallet.svg";

function Home() {
  return (
    <View style={styles.container}>
      <TextButton title='Conta' IconSvg={Wallet} isBorderBottomTrue={false}>
        <View style={styles.walletWrapper}>
          <Text style={styles.txtDollarSign}>$</Text>
          <Text style={styles.txtCash}>591,13</Text>
        </View>
      </TextButton>
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
  walletWrapper:{
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 8
  },
  txtDollarSign:{
   fontFamily: 'OpenSans_400Regular',
   fontSize: 16,
   marginRight: 4
  },
  txtCash:{
    fontSize: 25,
  }
});

export default Home;
