

export const goToNextPage=(navigation:any,page:string)=>{
    navigation.navigate(page);
}

export const goBack=(navigation:any)=>{
    navigation.goBack();
}
