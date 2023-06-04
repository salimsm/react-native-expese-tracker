import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {AppColors, AppString} from '../const';
import {getMonth, getMonthName} from '../utils';
import {Card} from './card';

export const CardList = ({navigation}: any) => {
  const data = useSelector((state: any) => state.transaction.filterDataByMonth);
  const [price, setPrice] = useState<{
    food: number;
    shopping: number;
    entertainment: number;
    travel: number;
  }>();

  const getEachCategoryAmt = () => {
    let obj = {food: 0, shopping: 0, entertainment: 0, travel: 0};
    data.forEach((value: any) => {
      if (value.catagory === AppString.category.food) {
        obj.food += value.amount;
      } else if (value.catagory === AppString.category.entertainment) {
        obj.entertainment += value.amount;
      } else if (value.catagory === AppString.category.shopping) {
        obj.shopping += value.amount;
      } else if (value.catagory === AppString.category.travel) {
        obj.travel += value.amount;
      }
    });
    console.log(obj);
    setPrice(obj);
  };

  useEffect(() => {
    getEachCategoryAmt();
  }, [data]);

  return (
    <View>
      <Card
        bColor={AppColors.card.orange}
        icon="ondemand-video"
        title={AppString.category.entertainment}
        onPress={() =>
          navigation.navigate('CategoryScreen', {category: 'Entertainment'})
        }
        date={getMonthName(getMonth())}
        amount={price?.entertainment}
      />
      <Card
        bColor={AppColors.card.purple}
        icon="add-shopping-cart"
        title={AppString.category.shopping}
        onPress={() =>
          navigation.navigate('CategoryScreen', {category: 'Shopping'})
        }
        date={getMonthName(getMonth())}
        amount={price?.shopping}
      />
      <Card
        bColor={AppColors.card.red}
        icon="airplanemode-active"
        title={AppString.category.travel}
        date={getMonthName(getMonth())}
        amount={price?.travel}
        onPress={() =>
          navigation.navigate('CategoryScreen', {category: 'Travel'})
        }
      />
      <Card
        bColor={AppColors.card.green}
        icon="fastfood"
        title={AppString.category.food}
        date={getMonthName(getMonth())}
        amount={price?.food}
        onPress={() =>
          navigation.navigate('CategoryScreen', {category: 'Food'})
        }
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 20},
  leftText: {fontSize: 17, fontWeight: 'bold', color: 'black'},
  rightText: {
    fontSize: 17,
    color: 'black',
  },
});
