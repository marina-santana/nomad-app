import { StyleSheet, View, Text, ScrollView } from 'react-native';

import TextButton from '../components/Button/TextButton';

import Cards from "../assets/cards.svg";
import Investments from "../assets/investments.svg";
import Shop from "../assets/shop.svg";
import Wallet from "../assets/wallet.svg";
import Card from '../components/Card';
import { images, text } from '../utils';

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
        <TextButton title='Shop' isBorderBottomTrue={false} IconSvg={Shop}></TextButton>
        <View style={styles.shopWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card image={images.booking} text={text.booking}/>
            <Card image={images.rentCars} text={text.rentCars}/>
            <Card image={images.assistCard} text={text.assistCard}/>
            <Card image={images.americaChip} text={text.americaChip}/>
            <Card image={images.avis} text={text.avis}/>
            <Card image={images.hoteis} text={text.hoteis}/>
            <Card image={images.rentalCars} text={text.rentalCars}/>
            <Card image={images.tiqets} text={text.tiqets}/>
            <Card image={images.allItems} text={text.allItems}/>
          </ScrollView>
        </View>
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
  shopWrapper:{
    paddingLeft: 24
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
