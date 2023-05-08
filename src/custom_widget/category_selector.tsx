import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../common/Button/custom_button';
import CustomText from '../common/Text/custom_text';
import {AppColors} from '../const/colors/colors';
import {AppString, CategoryList} from '../const/string/string';

interface ICategorySelector {
  getCategoryValue: (category: string) => void;
}
const CategorySelector = ({getCategoryValue}: ICategorySelector) => {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    AppString.category.shopping,
  );

  return (
    <View>
      <CustomButton
        icon="grid-view"
        text="Category"
        onPress={() => {
          setShow(!show);
        }}
      />
      <CustomText
        text={selectedValue}
        style={{fontSize: 17, color: AppColors.black}}
      />
      {show && (
        <View style={styles.categoryOptionContainer}>
          {CategoryList.map((item: string,index:number) => (
            <TouchableOpacity
            key={index}
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderBottomWidth: 2,
                borderBottomColor: 'orange',
                elevation: 4,
                margin: 4,
                borderRadius: 5,
              }}
              onPress={() => {
                setSelectedValue(item);
                setShow(!show);
                getCategoryValue(item);
              }}>
              <CustomText text={item} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryOptionContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
});

export default CategorySelector;
