import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {goToNextPage} from '../utils/navigation';
import {getData} from '../utils/firebase/read';
import {useDispatch} from 'react-redux';
import Header from '../custom_widget/header';
import { AppColors, AppRoute } from '../const';
import { BalanceCard, CardList, ViewMore } from '../custom_widget';

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
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{paddingVertical: 10, paddingBottom: 20}}>
          <Header navigation={navigation} />
          <BalanceCard />

          <ViewMore navigation={navigation} />

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
