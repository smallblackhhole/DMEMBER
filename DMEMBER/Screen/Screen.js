 import { StyleSheet , View ,Text, SafeAreaView,Image} from "react-native";
 const Screnn =()=>{
    return(
        <View style={style.container}>
            <View>
            <Image style={style.Dmember} source={require('../image/rectangle.png')}/>
            <Image style={style.easytosell} source={require('../image/easytosell.png')}/>
            <Image style={style.tim} source={require('../image/tim.png')}/>
                
            </View>
        </View>
        
    );
};

export default Screnn;
const style = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor: "#FBAE35",
   },
   Dmember:{
    left: '10%',   
    top: '500%',
    position:"absolute",  
   },
   easytosell:{
    width: '50%',
    height: 22,
    left: '25%',
    top: '1200%',
   },
   tim:{
  
    width: '10%',
    height: 35,
    left: '45%',
    top: '1250%',

   },
   
});