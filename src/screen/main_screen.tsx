import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../custom_widget/header';
import Card from '../custom_widget/card';
import RowContainer from '../custom_widget/row_container';
import {AppColors} from '../const/colors/colors';
import BalanceCard from '../custom_widget/balance_card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppString} from '../const/string/string';
import {goToNextPage} from '../utils/navigation';
import {AppRoute} from '../const/routes/route';
import {getData} from '../utils/firebase/read';
import {useDispatch, useSelector} from 'react-redux';

const MainScreen = ({navigation}: any) => {
  const data = useSelector((state:any)=>state.transaction);
  const dispatch = useDispatch();
  useEffect(() => {
    getData(dispatch);
  }, []);

  // console.log(data,'main');
  
  return (
    <View style={styles.container}>
      <ScrollView>
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

          <Card
            bColor={AppColors.card.orange}
            icon="ondemand-video"
            title={AppString.category.entertainment}
          />
          <Card
            bColor={AppColors.card.purple}
            icon="add-shopping-cart"
            title={AppString.category.shopping}
          />
          <Card
            bColor={AppColors.card.red}
            icon="airplanemode-active"
            title={AppString.category.travel}
          />
          <Card
            bColor={AppColors.card.green}
            icon="fastfood"
            title={AppString.category.food}
          />

          <Card bColor="green" icon="fastfood" title="Food" />
          <Card bColor="green" icon="fastfood" title="Food" />
          <Card bColor="green" icon="fastfood" title="Food" />
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

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    // backgroundColor:'#F0EAF4'
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
