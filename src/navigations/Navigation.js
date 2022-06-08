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
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign:'center',
                    headerStyle:{
                        height: 51,
                        backgroundColor: 'aliceblue',
                    },
                    headerTitleStyle:{
                        color:'#000000',
                        fontSize: 32,
                    },
                }}
            >
                <Stack.Screen
                    name="Board"
                    component={Board}
                    options={{
                        headerTitle:'앱 이름',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Poster"
                    component={Poster}
                    options={{
                        headerTitle:'게시판 제목'
                    }}
                />
                <Stack.Screen
                    name="Posting"
                    component={Posting}
                    options={{
                        headerTitle:'게시물 작성'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;