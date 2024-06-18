import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import RootNavigator from "./src/navigations/RootNavigator";
import { OriginContextProvider, DestinationContextProvider } from "./src/context/context";

const App = () =>{
  return(
    <DestinationContextProvider>
      <OriginContextProvider>
          <RootNavigator />
      </OriginContextProvider>
   </DestinationContextProvider>
    
  )
}

export default App
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})