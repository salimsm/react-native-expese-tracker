import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColors} from '../const/colors/colors';
import BalanceCard from '../custom_widget/balance_card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppString} from '../const/string/string';
import {goToNextPage} from '../utils/navigation';
import {AppRoute} from '../const/routes/route';
import {getData} from '../utils/firebase/read';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../custom_widget/header';
import RowContainer from '../custom_widget/row_container';
import Card from '../custom_widget/card';

export const MainScreen = ({navigation}: any) => {
  console.log('MainScreen');

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getData(dispatch);
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{paddingVertical: 10, paddingBottom: 20}}>
          <Header navigation={navigation} />
          <BalanceCard />

          <RowContainer style={{marginVertical: 20}}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
              Transcation
            </Text>
            <TouchableOpacity
              onPress={() => goToNextPage(navigation, 'TranscationScreen')}>
              <Text style={{fontSize: 17, color: 'black'}}>View All</Text>
            </TouchableOpacity>
          </RowContainer>

          <CardList navigation={navigation} />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => goToNextPage(navigation, AppRoute.AddScreen)}>
        <Icon name="add" size={38} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const CardList = ({navigation}: any) => {
  console.log('cardList');

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
        amount={price?.entertainment}
      />
      <Card
        bColor={AppColors.card.purple}
        icon="add-shopping-cart"
        title={AppString.category.shopping}
        onPress={() =>
          navigation.navigate('CategoryScreen', {category: 'Shopping'})
        }
        amount={price?.shopping}
      />
      <Card
        bColor={AppColors.card.red}
        icon="airplanemode-active"
        title={AppString.category.travel}
        amount={price?.travel}
        onPress={() =>
          navigation.navigate('CategoryScreen', {category: 'Travel'})
        }
      />
      <Card
        bColor={AppColors.card.green}
        icon="fastfood"
        title={AppString.category.food}
        amount={price?.food}
        onPress={() =>
          navigation.navigate('CategoryScreen', {category: 'Food'})
        }
      />

      <Card
        bColor="green"
        icon="fastfood"
        title="Food"
        onPress={() =>
          navigation.navigate('CategoryScreen', {category: 'Food'})
        }
      />
      <Card
        bColor="green"
        icon="fastfood"
        title="Food"
        onPress={() =>
          navigation.navigate('CategoryScreen', {category: 'Food'})
        }
      />
      <Card
        bColor="green"
        icon="fastfood"
        title="Food"
        onPress={() =>
          navigation.navigate('CategoryScreen', {category: 'Food'})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },
  floatingButton: {
    position: 'absolute',
    backgroundColor: AppColors.gradient.end,
    width: 60,
    height: 60,
    bottom: 15,
    right: 15,

    elevation: 2,

    borderRadius: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
