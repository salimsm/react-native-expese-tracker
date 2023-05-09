import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RowContainer from './row_container';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ColumnText from './column_text';
import {AppColors} from '../const/colors/colors';
import CustomText from '../common/Text/custom_text';

interface ICard {
  bColor?: string;
  icon: string;
  title?: string;
  date?: string;
  amount?: number;
  onPress?:()=>void;
}
const Card = ({bColor, icon, title, date, amount,onPress}: ICard) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <RowContainer>
        <View style={styles.subRightContainer}>
          <View
            style={[styles.circularImageBackground, {backgroundColor: bColor}]}>
            <Icon name={icon} size={32} color="#F0EAF4" />
          </View>
          <CustomText style={{color: 'black'}} text={title} />
        </View>

        <ColumnText
          title="Today"
          subTitle="20000"
          style={{alignItems: 'flex-end'}}
        />
      </RowContainer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    padding: 15,
    borderRadius: 20,
    elevation: 2,
    marginVertical: 10,
  },
  subRightContainer: {flexDirection: 'row', alignItems: 'center'},
  default: {
    fontSize: 14,
  },
  circularImageBackground: {
    borderRadius: 50,
    height: 50,
    width: 50,
    marginRight: 15,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
