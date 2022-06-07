import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Board from "../screens/Board";
import Poster from "../screens/Poster";
import Posting from "../screens/Posting";


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Board" component={Board}/>
                <Stack.Screen name="Poster" component={Poster}/>
                <Stack.Screen name="Posting" component={Posting}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;