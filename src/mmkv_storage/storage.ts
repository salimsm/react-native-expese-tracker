import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export const getStorage=(key:string)=>{
   return storage.getString(key);
}

export  const setStorage=(key:string,value:string)=>{
    storage.set(key,value);
}

export const clearStorage =()=>{
    storage.clearAll();
}