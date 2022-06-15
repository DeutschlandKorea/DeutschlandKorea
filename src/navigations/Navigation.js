import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Board from "../screens/Board";
import Poster from "../screens/Poster";
import Posting from "../screens/Posting";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Platform} from "react-native";
import {LoginScreen} from "../screens/LoginScreen";
import {RegistrationScreen} from "../screens/RegistrationScreen";
import HomeScreen from "../screens/homeScreen";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#FFFFFF', borderBottomWidth: 0.5, borderBottomColor: '#C4C4C4'},
                    headerTitleStyle: {color: '#000000', fontSize: 20,},
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen
                    name="Registration"
                    component={RegistrationScreen}
                    options={{
                        headerBackImage: ({tintColor}) => {
                            return (
                             <MaterialCommunityIcons name="keyboard-backspace" size={30} color={tintColor} style={{marginLeft: Platform.OS === 'ios' ? 11:5}}/>
                            );
                        },
                    }}
                />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Board" component={Board}
                              options={{headerTitle: '앱 이름', headerShown: false,}}
                />
                <Stack.Screen name="Poster" component={Poster}
                              options={{
                                  headerTitle: '게시판 제목', headerTitleStyle:{fontSize: 20},
                                  headerBackImage: ({tintColor}) => {
                                      return (
                                          <MaterialCommunityIcons name="keyboard-backspace" size={30} color={tintColor} style={{marginLeft: Platform.OS === 'ios' ? 11:5}}/>
                                      );
                                  },
                              }}
                />
                <Stack.Screen name="Posting" component={Posting}
                              options={{headerTitle: '게시물 작성'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;