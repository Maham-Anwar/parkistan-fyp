import React,{useState, useEffect} from 'react';
import { 
    View,
    Button,
    Text, 
    TouchableOpacity, 
    TouchableHighlight,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { 
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  BalooBhai2_700Bold,
  BalooBhai2_800ExtraBold 
} from '@expo-google-fonts/baloo-bhai-2'
import {useFonts} from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker';
import AppLoading from 'expo-app-loading';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogin } from '../../hooks/useLogin'
import { useLogout } from '../../hooks/useLogout'


const Login=({navigation}) =>{
const[fontsLoaded] = useFonts({
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  BalooBhai2_700Bold,
  BalooBhai2_800ExtraBold 
});

  const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

  const [AccType, setAccType] = useState([
    {label: 'User', value: 'user',
                  //selected:true
  },
    {label: 'Parking Inspector', value: 'parkingInspector'}
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("user");

    const {user}=useAuthContext();
    const { login, err, isPen } = useLogin();

    useEffect(()=>{
      if(user && value === "user"){
        navigation.navigate('HomePage');
      }
    },[user])
    
  
  const handleLogin = (e) => {
    e.preventDefault()  
    login(email,password)
  }
  if(!fontsLoaded){
   return <AppLoading/>
  }
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center'}}>
      <Text style={styles.LRHeading}>LOGIN</Text>
      <Image source={require('../../assets/LoginImg.png')} />  
      </View>
    <View style={{alignItems:'center'}}>
    <View style={styles.inputContainer}>
    <FontAwesome 
                    name="user"
                    size={22} 
                    color="#033205"
                    style={{marginTop:10}}
                    
                />
    <TextInput style={styles.TextInput}
    maxLength={30} 
    keyboardType="email-address"
    onChangeText={(value) => setEmail(value)}
    value={email}
    placeholder='Email'
    placeholderTextColor="#033205"
    autoCapitalize="none"
        autoCorrect={false}

    >
    
    </TextInput></View>
    
    <View style={styles.inputContainer}>
    <Fontisto 
                    name="locked"
                    size={22} 
                    color="#033205"
                    style={{marginTop:10}}
                    
                />
    <TextInput style={styles.TextInput} 
     onChangeText={(value) => setPassword(value)}
     value={password}
    secureTextEntry={true} placeholder='Password'
    placeholderTextColor="#033205">
    
    </TextInput>
    
    </View>

    <View>
    <DropDownPicker
    placeholder='Select Your Account Type'
    
          open={open}
          value={value}
          items={AccType}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setAccType}
           style={styles.dropDown}
          dropDownContainerStyle={{width:298,margin:8}}
          labelStyle={{fontFamily:'BalooBhai2_700Bold',fontSize:18,textAlign:'center'}}
          placeholderStyle={{fontFamily:'BalooBhai2_700Bold',fontSize:16}}
          //defaultValue="user"
        />
   
         </View>
               </View>
    <Text onPress={()=>Alert.alert("No Problem")} style={styles.forgotPW}>Forgot Password?</Text>
    <View style={{alignItems:'center'}}>
    <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={handleLogin}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
 </TouchableOpacity>

 </View>

  <View>
        {err && <Text>{err}</Text>}
  </View>

 <View style={{alignItems:'center',marginTop:40}}>
   <Text style={styles.HaveAccText}>
   Don't have an account?
   </Text>
   <Text onPress={()=>navigation.navigate('UserSignUpScreen')} style={styles.BottomHeading} >
   Signup
   </Text>
    
 </View>

    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
   //marginTop:50
  },
  LRHeading:{ //top heading for Login and registration 
    fontFamily:'BalooBhai2_700Bold',
    color:'#033205',
   fontSize:20,
  

  },


  inputContainer: {
    flexDirection: 'row',
    width:298,
    height:42,
    backgroundColor: 'rgba(139, 185, 141, 0.8)',
    borderRadius:50,
    //paddingTop: 10,
     //paddingBottom: 10,
     paddingLeft:20,
     paddingRight:20,
    textAlign:'center',
    margin: 5,
    shadowColor: '#470000',
shadowOffset: {width: 0, height: 4},
shadowOpacity: 0.9,
elevation: 2,
  },
  TextInput:{
   
    width:174,
    height:23,
  marginLeft:30,
  marginTop:12,
  fontFamily:'BalooBhai2_400Regular',
  lineHeight:20,
  fontSize:18
     },

     dropDown:{
    //fontFamily:'BalooBhai2_400Regular',
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    width:298,
    height:42,
    borderRadius:50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft:20,
    paddingRight:20,
    textAlign:'center',
    margin: 8,
  //   fontWeight:'400',
  // lineHeight:20,
  // fontSize:18,
    shadowColor: '#470000',
shadowOffset: {width: 0, height: 4},
shadowOpacity: 0.9,
elevation: 2,
     },
  
     loginScreenButton:{

       width:100,
      height:35,
     marginTop:10,
       paddingTop:5,
      paddingBottom:5,
      backgroundColor:'#033205',
      borderRadius:50,
      borderWidth: 1,
      shadowColor: '#470000',
shadowOffset: {width: 0, height: 4},
shadowOpacity: 0.9,
elevation: 2,
    },
    loginText:{
      fontFamily:'BalooBhai2_400Regular',
      fontSize:16,
        color:'#D8F0D7',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    forgotPW:{
      fontFamily:'BalooBhai2_400Regular',
      color: '#033205',
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight:26,
      marginRight:40,
      textAlign:'right'
    },
    HaveAccText:{
      fontSize:20,
      fontWeight:'400',
      lineHeight: 32,
      fontFamily:'BalooBhai2_400Regular'
      },     //Have an acc or dont have acc text

    BottomHeading:{ //Signup and Login bottom heads
       fontSize: 24,
      lineHeight: 39,
      color: '#033205',
      fontFamily:'BalooBhai2_700Bold'
      
    }
});
export default Login;