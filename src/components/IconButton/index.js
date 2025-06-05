import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Fonts from '../../constants/fonts';
import Colors from '../../constants/colors';

const IconButton = ({name, icon,iconColor, buttonStyle, textStyle})=>{
    return(
      <TouchableOpacity style={[styles.iconButton,buttonStyle]}>
          <Icon name={icon} size={Fonts.titleSize} color={iconColor ?? Colors.subtitle}  />
          <Text style={[styles.iconLabel, textStyle]}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  iconButton: {
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
   iconLabel: {
    fontSize: 10,
    color: '#fff',
    marginTop: 4,
  },
});
export default IconButton;
