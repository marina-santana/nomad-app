import { ReactElement } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { SvgProps } from 'react-native-svg';

import Icon from 'react-native-vector-icons/FontAwesome';

type TextButtonProps = {
  title: string;
  children?: ReactElement;
  IconSvg: React.FC<SvgProps>
  isBorderBottomTrue?: boolean
};

const TextButton = ({ title, IconSvg, isBorderBottomTrue = true, children }: TextButtonProps) => (
    <TouchableOpacity
      style={[styles.container, {
        borderBottomWidth: isBorderBottomTrue? 1 : 0,
      }]}
      >
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          <IconSvg style={{ marginLeft: 'auto' }}/>
          <Icon name="angle-right" size={18} color="#222" style={{ marginLeft: 12 }} />
        </View>
        {children}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 28,
    paddingVertical: 24,
    justifyContent: 'center',
    flexDirection: 'column',
    borderBottomColor: '#E8EbE8'
  },
  titleWrapper:{
    flexDirection: 'row', 
    alignItems: 'center'
  },
  title: {
    color: '#1a1a13', 
    fontSize: 15, 
    textAlign: 'left',
    fontFamily: 'Lato_700Bold',
  }
});

export default TextButton;