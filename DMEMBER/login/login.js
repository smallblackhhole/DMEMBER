import { StyleSheet , View ,Text, SafeAreaView,Image} from "react-native";
const login =()=>{
   return(
       <View style={style.container}>
            <Image style={style.xinchao} source={require('../image/xinchao.png')}/>
         
       </View>
       
   );
};

export default login;
const style = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor: "#FBAE35",
  },
  xinchao:{
    
  },
  
});