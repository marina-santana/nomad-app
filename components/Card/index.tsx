import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

type CardProps = {
  image: any;
  text: string;
};

const Card = ({ image, text }: CardProps) => (
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <Text style={styles.text} >{text}</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginRight: 16
  },
  image:{
    width: 70,
    height: 50,
    borderRadius: 6
  },
  text: {
    color: '#6e736e', 
    fontSize: 12, 
    marginTop: 8,
    textAlign: 'center',
    fontFamily: 'Lato_400Regular',
  }
});

export default Card;