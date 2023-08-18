import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import Logo from "../../assets/logo.svg";
import Gift from "../../assets/gift.svg";

type HeaderProps = {
  image?: any;
  text?: string;
};

const Header = ({ image, text }: HeaderProps) => (
    <View style={styles.container}>
      <Logo/>
      <View style={styles.itemsWrapper}>
        <Image style={styles.image} source={require('../../assets/open-eye.png')}/>
        <Gift style={{marginHorizontal: 12}}/>
        <Image style={styles.image} source={require('../../assets/login.png')}/>
      </View>
    </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginBottom: 24,
    flexDirection: 'row'
  },
  itemsWrapper:{
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image:{
    width: 30,
    height: 30
  }
});

export default Header;