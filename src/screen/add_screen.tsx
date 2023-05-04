import {
  FlatList,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../common/Button/custom_button';
import CustomText from '../common/Text/custom_text';
import {CategoryList} from '../const/string/string';
import {AppColors} from '../const/colors/colors';
import CategorySelector from '../custom_widget/category_selector';

const AddScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topHalf}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
            Add Expense
          </Text>
          <TextInput
            placeholder="$0.0"
            style={{
              borderWidth: 1,
              borderRadius: 30,
              textAlign: 'center',
              fontSize: 30,
              marginVertical: 8,
            }}
          />
          <TextInput
            placeholder="Note"
            style={{
              borderWidth: 1,
              borderRadius: 10,
              fontSize: 20,
              marginVertical: 8,
              paddingHorizontal: 14,
            }}
          />

          <CategorySelector getCategoryValue={value => console.log(value)} />
          <CustomButton icon="calendar-today" text="Date" />
        </View>
      </ScrollView>

      <CustomButton text="Save" style={{justifyContent: 'center'}} />
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0EAF4',
  },
  topHalf: {
    flex: 1,
    backgroundColor: '#F0EAF4',
  },
});
