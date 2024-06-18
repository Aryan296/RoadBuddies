import React, {useState,useRef,useEffect} from "react"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, FlatList,TouchableOpacity} from "react-native"
import { colors, parameters } from "../global/styles"
import { Icon } from "react-native-elements";
import { filterData, carsAround } from "../global/data";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { mapStyle } from "../global/mapStyle";
import * as Location from 'expo-location';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const HomeScreen = ({navigation}) => {
    const [latlng,setLatLng] = useState({latitude: null, longitude: null})
    const checkPermission = async()=>{
        const hasPermission = await Location.requestForegroundPermissionsAsync();
        if(hasPermission.status==='granted'){
            const permission = await askPermission();
            return permission;
        }
        return true
    };

    const askPermission = async()=>{
        const permission = await Location.requestForegroundPermissionsAsync();
        return permission.status === 'granted';
    };

    const getLocation = async()=>{
        try{
            const {granted} = await Location.requestForegroundPermissionsAsync();
            if(!granted)return;
            const{
                coords:{latitude,longitude},
            } = await Location.getCurrentPositionAsync();
            setLatLng({latitude:latitude,longitude:longitude})
        }
        catch(err){

        }
    }

    const _map = useRef(1);

    useEffect(()=>{
        checkPermission();
        getLocation();
},[])
    const CustomMarker = ({ coordinate }) => (
        <Marker coordinate={coordinate}>
            <Image
                source={require('../../assets/carMarker.png')}
                style={styles.carsAround}
            />
        </Marker>
    );
    return(
        <ScrollView bounces={false} style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                        <View style={styles.icon1}>
                            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                                <Icon type="material-community"
                                    name="menu"
                                    color={colors.white}
                                    size={40}
                                />
                            </TouchableOpacity>
                        </View>
                </View>
                    <View style={styles.home}>
                        <Text style={styles.text1}>ROAD BUDDIES</Text>
                        <View style={styles.view1}>
                            <View style={styles.view8}>
                                <Text style={styles.text2}> Where Every Ride is a Shared Adventure!</Text>
                                <TouchableOpacity onPress={()=>{navigation.navigate("RequestScreen",{state:0})}}>
                                    <View style={styles.button1}>
                                        <Text style={styles.button1Text}>Ride Now</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Image
                                    style={styles.imagex}
                                    source={require("../../assets/uberCar.png")}
                                />
                            </View>
                        </View>
                    </View>
                    {/* <View>
                        <FlatList
                            numRows={4}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={filterData}
                            keyExtractor={(item)=>item.id}
                            renderItem={({item})=>(
                                <View style={styles.card}>
                                    <View style = {styles.view2}>
                                        <Image style={styles.image2} source={item.image}/>
                                    </View>
                                    <View>
                                        <Text style={styles.title}>{item.name}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View> */}
                    
                        <View style={styles.view3}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("RequestScreen")}}>
                            <Text style={styles.text3}>Where to ?</Text>
                            </TouchableOpacity>
                            <View style={styles.view4}>
                                <Icon type="material-community"
                                    name="clock-time-four"
                                    color={colors.grey1}
                                    size={26}
                                />
                                <Text style={{marginLeft:5}}>Now</Text>
                                <Icon type="material-community"
                                    name="chevron-down"
                                    color={colors.grey1}
                                    size={26}
                                />
                            </View>
                        </View>
                 
                    <View style={styles.view5}>
                        <View style={styles.view6}>
                            <View style={styles.view7}>
                                <Icon type="material-community"
                                    name="map-marker"
                                    color={colors.black}
                                    size={22}
                                />
                            </View>
                            <View>
                                <Text styl={{fontSize:18,color:colors.black}}>Chitkara University</Text>
                                <Text style={{color:colors.grey}}>Rajpura</Text>
                            </View>
                        </View>
                        <View>
                            <Icon type="material-community"
                                name="chevron-right"
                                color={colors.grey}
                                size={26}
                            />
                        </View>
                    </View>
                    <View style={{...styles.view5,borderBottomWidth:0}}>
                        <View style={styles.view6}>
                            <View style={styles.view7}>
                                <Icon type="material-community"
                                    name="map-marker"
                                    color={colors.black}
                                    size={22}
                                />
                            </View>
                            <View>
                                <Text style={{fontSize:15,color:colors.black}}>Bollywood Gully</Text>
                                <Text style={{color:colors.grey}}>Chandigarh Royale City</Text>
                            </View>
                        </View>
                        <View>
                            <Icon type="material-community"
                                name="chevron-right"
                                color={colors.grey}
                                size={26}
                            />
                        </View>
                    </View>
                    <Text style={styles.text4}>Around You</Text>
                    <View style={{alignItems:"center",justifyContent:"center"}}>
                    <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    initialRegion={{
                        latitude: -26.207487,
                        longitude: 28.236226,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {carsAround.map((item, index) => (
                        <CustomMarker
                            key={index}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude,
                            }}
                        />
                    ))}
                </MapView>                  
                    </View>
                <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
            </View>
            <View style={{height:1700}}></View>
        </ScrollView>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    scrollView: {
        height: '20%',
        width: '80%',
        margin: 20,
        alignSelf: 'center',
        padding: 20,
        borderWidth: 5,
        borderRadius: 5,
      },
    container:{
        flex:1,
        minHeight:SCREEN_HEIGHT,
        backgroundColor:colors.white,
        paddingBottom:30,
        paddingTop:parameters.statusBarHeight,
    },
    scrollView: {
        flexGrow: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
    },
    header:{
      backgroundColor:colors.blue,
      width:SCREEN_WIDTH,
      height:parameters.headerHeight,
      alignItems:"flex-start",
     
    },
    imagex:{
        height:100,
        width:100,
        marginLeft:-100,
    },
    image1:{
      height:100,
      width:100,
    },
    
    image2:{height:50,width:50,
            borderRadius:30,
          },
    
    home:{
     backgroundColor:colors.blue,
     paddingLeft:20,
     
    },
    
    text1:{
     color:colors.white,
     fontSize:21,
     paddingBottom:20,
     paddingTop:20
    },
    
    text2:{
     color:colors.white,
     fontSize:16,
     marginLeft:-3,
    },
    
    view1:{
     flexDirection:"row",
     flex:1,
     paddingTop:30
    },
    
    button1:{
      height:40,
      width:130,
      backgroundColor:colors.black,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      marginLeft:-6,
    },
    
    button1Text:{
     color:colors.white,
     fontSize:17,
     marginTop:-2
    
    },
    card:{
     alignItems:"center",
     margin:SCREEN_WIDTH/22
    
    },
    
    view2:{marginBottom:5,
          borderRadius:15,
          backgroundColor:colors.grey6
        },
    
        title:{
          color:colors.black,
          fontSize:16
        },
    view3:{flexDirection:"row",
             marginTop :5,
             height:50,
             backgroundColor:colors.grey6,
             alignItems:"center",
             justifyContent:"space-between",
            marginHorizontal:15
            
             },
    text3:{marginLeft:15,
            fontSize:20,
            color:colors.black,
      },
    
    view4:{ flexDirection:"row",
            alignItems:"center",
            marginRight:15,
            backgroundColor:"white",
            paddingHorizontal:10,
            paddingVertical:2,
            borderRadius:20
            },
    
    view5:{ flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:25,
    justifyContent:"space-between",
    marginHorizontal:15,
    borderBottomColor:colors.grey4,
    borderBottomWidth:1,
    flex:1
    },
    
    view6:{
    
    
    alignItems:"center",
    flex:5,
    flexDirection:"row"
    },
    view7:{
    backgroundColor:colors.grey6,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginRight:20
    
    },
    
    map:{
       
    height: 250,
     marginVertical: 0,
     width:SCREEN_WIDTH*0.92
    },
    
    text4:{ fontSize:20,
          color:colors.black,
          marginLeft:20,
          marginBottom:20
        },
    
    icon1:  {marginLeft:10,
           marginTop:5
          },

    view8: {flex:4,
          marginTop:-25
        } ,
    carsAround: {
    width: 28,
    height: 14,
    
    }, 
    
    location: {
      width: 16,
      height: 16,
      borderRadius:8,
      backgroundColor:colors.blue,
      alignItems:"center",
      justifyContent:"center"
      
      }, 
      
    view9:{width:4,
    height:4,
    borderRadius:2,
    backgroundColor:"white"
    }


})