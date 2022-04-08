import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground ,ScrollView,SafeAreaView, Image , TextInput ,TouchableOpacity} from 'react-native';
//import bgImage from './assets/logo.jpg'
import logo from '../assets/loggg.jpg'
import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const {width:WIDTH} =Dimensions.get('window')

export default class Register extends Component {
    constructor(){
        super()
        this.state={
          showPass:true,
          press:false
        }
      }
      showPass=()=>{
        if(this.state.press==false){
          this.setState({showPass:false , press:true})
        }
        else{
          this.setState({showPass:true , press:false})
        }
      }
  render(){
  return (
      <SafeAreaView style={{backgroundColor:'white'}}>
      <ScrollView style={styles.scrollView}>
    <ImageBackground  style={styles.backgroundContainer}>
      <View >
        <Text style={styles.logoText}><h2>Sign up</h2></Text>
       
      </View>
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Nom station'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Type lavage'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Ville'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Adresse'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        />
    </View>

      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'black'}
        underLineColorAndroid='transparent'
        />
    </View>
    <View style={{
      
      flexDirection: "row",
      left:15
    }}>
       
        <TextInput 
        style={styles.input}
        placeholder={'Password'}
        placeholderTextColor={'black'}
        secureTextEntry={this.state.showPass}
        underLineColorAndroid='black'
        />
        
        <TouchableOpacity style={styles.btnEye}
        onPress={this.showPass.bind(this)}
        >
          <Icon name={this.state.press==false?'ios-eye-outline':'ios-eye-off-outline'} size={26} color={'black'}/>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity style={styles.btnLogin}>
       <Text style={styles.TextBtn}>Register</Text>

      </TouchableOpacity>
    </ImageBackground> 
       
        
    </ScrollView>
    </SafeAreaView>
   
  );
}
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width : null,
    height: null,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginVertical: 80,
  },
  icon:{
  
    top:8,
    left:37,
  },
  btnLogin:{
width: 200,
height : 45,
borderRadius : 25,
backgroundColor: 'black',
justifyContent: 'center',
marginTop : 20,
  },
  TextBtn :{
    color : 'white',
    fontSize:16,
    textAlign: 'center'
  },
  input:{
    width:300,
    height:45,
    marginTop:10,
    marginBottom:10,
    borderRadius:25,
    fontSize:10,
    paddingLeft:45,
    backgroundColor: '#f5f5f5',
    color: 'black',
    marginHorizontal : 25

  },
  logoContainer:{
alignItems:'center'
},
btnEye:{

  top:17,
  right:60,
}
,
logoText:{
  color:'black',
fontWeight:600,
  fontSize:20,
  fontWeight:'400',
  marginTop:10,
  opacity:0.5,
  marginBottom:10
},
  logo:{
    width:150,
    height:180,
    marginBottom:20
  }
});
