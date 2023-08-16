import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

type TextButtonProps = {
  title: string;
  text?: string;
  IconSvg: any
};

const TextButton = ({title, IconSvg}: TextButtonProps) => (
    <TouchableOpacity
      style={styles.container}
      >
        <View
          style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>      
        <IconSvg style={{ marginLeft: 'auto' }}/>
        <Icon name="angle-right" size={18} color="#222" style={{ marginLeft: 12 }} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderBottomColor: '#E8EbE8',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  textWrapper:{
    flexDirection: 'column'
  },
  title: {
    color: '#1a1a13', 
    fontSize: 15, 
    textAlign: 'left'
  }
});

export default TextButton;