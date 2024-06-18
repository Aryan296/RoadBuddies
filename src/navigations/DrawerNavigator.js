import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./StartNavigatiors";
import { Icon } from "react-native-elements";
import { colors, title } from "../global/styles";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    title:"Client",
                    drawerIcon : ({focussesd,size})=><Icon type="material-community" name="home" color={focussesd?'#7cc':colors.grey2} size={size}/>,
                headerShown : false
                }}
            />
        </Drawer.Navigator>
    )
}