
// import { useNavigation } from '@react-navigation/native';

// const useNavigate = (routeName,params) => {
//   const navigation = useNavigation();

//   const navigateTo = (routeName, params:any={}) => {
//     navigation.navigate(routeName, params);
//   };
//   const naigateBack = (routeName)=>{
//     navigation.goBack(routeName);
//   };

//   return {navigateTo,naigateBack};
// };

// export default useNavigate;



export const goToNextPage=(navigation:any,page:string)=>{
    navigation.navigate(page);
}

export const goBack=(navigation:any)=>{
    navigation.goBack();
}
