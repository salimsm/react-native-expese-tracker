import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import React, {useEffect, useState} from 'react';

import AppBar from '../custom_widget/appbar';
import {goBack} from '../utils/navigation';
import {useDispatch, useSelector} from 'react-redux';
import {catagoryByMonth} from '../redux/slice/transactionSlice';
import {LineChart} from 'react-native-chart-kit';

const ChartScreen = ({navigation, route}: any) => {
  const data = useSelector((state: any) => state.transaction);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const [dataY, setDataY] = useState<number[]>([]);

  console.log();
  console.log('char screen');
  console.log('----------------chart screen----------------------');

  const extractData =() => {
    const d =data.mothlyData;
    console.log(d, 'd from extract data');

    const result = data.mothlyData.map((val: any) => parseInt(val.total));
    setDataY(result);
    setLoading(false);
    console.log(result, 'resuls');
  };

  useEffect(() => {
     dispatch(catagoryByMonth());
     //extractData();
    }, []);

    useEffect(() => {
       if (data.mothlyData.length > 0) {
        extractData();
       }
    }, [data]);

 
  return (
    <View style={styles.container}>
      <AppBar title="Chart" onBackPressed={() => goBack(navigation)} />
      <ScrollView>
      <View style={{flex: 1,marginVertical:8}}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView horizontal={true}>
            <LineChart
              data={{
                labels: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'June',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                datasets: [
                  {
                    data: 
                    // dataY,
                     [2,3,4,5,6,7,8,9,2,5,2]
                  },
                ],
              }}
              height={320}
              width={Dimensions.get('window').width}
              chartConfig={{
                backgroundGradientFrom: 'black',
                backgroundGradientTo: 'grey',
                color: (opacity = 3) => `rgba(255, 255, 255, ${opacity})`,
              }}
            />
          </ScrollView>
         )}
      </View>
      </ScrollView>
      {/* <View style={{height:500 ,backgroundColor:'green'}}></View> */}
    </View>
  );
};
export default ChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0EAF4',
    justifyContent: 'center',
  },
});
