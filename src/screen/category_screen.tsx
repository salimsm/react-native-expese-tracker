import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {goBack} from '../utils/navigation';
import {useSelector} from 'react-redux';
import {AppColors} from '../const/colors/colors';
import RowContainer from '../custom_widget/row_container';
import {AppBar} from '../custom_widget';

export const CategoryScreen = ({navigation, route}: any) => {
  const {category} = route.params;
  const data = useSelector((state: any) => state.transaction);
  const [loading, setLoading] = useState(true);
  const [finalData, setFinalData] = useState();

  console.log();
  console.log(category);
  console.log('----------------filteredDataByMonth----------------------');
  const filter = () => {
    const filteredData = data.filterDataByMonth.filter((value: any) => {
      return value.catagory === category;
    });
    setFinalData(filteredData);
    setLoading(false);
  };

  useEffect(() => {
    filter();
  }, []);

  return (
    <View style={styles.container}>
      <AppBar title={category} onBackPressed={() => goBack(navigation)} />
      <View style={{flex: 1}}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={finalData}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: AppColors.white,
                  padding: 15,
                  borderRadius: 20,
                  elevation: 2,
                  marginVertical: 10,
                }}>
                <RowContainer>
                  <Text>{item.note}</Text>
                  <Text>{item.date}</Text>
                </RowContainer>
                <Text>$ {item.amount}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0EAF4',
    justifyContent: 'center',
  },
});
