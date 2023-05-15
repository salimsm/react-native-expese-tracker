import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RowContainer from './row_container';
import {goToNextPage} from '../utils/navigation';

export const ViewMore = ({navigation}: any) => {
  return (
    <RowContainer style={styles.container}>
      <Text style={styles.leftText}>Transcation</Text>
      <TouchableOpacity
        onPress={() => goToNextPage(navigation, 'TranscationScreen')}>
        <Text style={styles.rightText}>View All</Text>
      </TouchableOpacity>
    </RowContainer>
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

