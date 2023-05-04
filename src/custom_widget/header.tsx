import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ColumnText from './column_text';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <ColumnText title="Welcome" subTitle="Jhon" />
      <View
        style={{
          backgroundColor: 'black',
          borderRadius: 10,
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="settings" color="white" size={28} />
      </View>
    </View>
  );
};

export default Header;
