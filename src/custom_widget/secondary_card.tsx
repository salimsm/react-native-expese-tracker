import {StyleSheet, Text, View} from 'react-native';
import RowContainer from './row_container';
import {AppColors} from '../const/colors/colors';

interface IData {
  amount: number;
  catagory: string;
  date: string;
  note: string;
}
interface ISecondaryCard {
  item: IData;
}
export const SecondaryCard = ({item}: ISecondaryCard) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.white,
        padding: 15,
        borderRadius: 20,
        elevation: 2,
        marginVertical: 10,
      }}>
      <RowContainer>
        <Text style={styles.default}>{item.note}</Text>
        <Text>{item.date}</Text>
      </RowContainer>
      <RowContainer
        style={{marginTop: 4}}>
        <Text style={styles.midText}>$ {item.amount}</Text>
        <Text
          style={styles.category}>
          {item.catagory}
        </Text>
      </RowContainer>
    </View>
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
  default: {
    fontSize: 14,
    color: 'black',
  },
  midText: {
    fontSize: 17,
    color: 'black',
  },
  category:{
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 4,

    borderRadius: 20,
    borderColor:'black'
  }
});

export default SecondaryCard;
