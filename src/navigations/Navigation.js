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
import Menu from "../screens/Menu";
import Search from "../screens/Search";
import Potolio from "../screens/Potolio";
import {InitialScreen} from "../screens/InitialScreen";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#ffffff', borderBottomWidth: 0.5, borderBottomColor: '#C4C4C4'},
                    cardStyle: {backgroundColor:'#ffffff'},
                    headerTitleStyle: {color: '#000000', fontSize: 20,},
                }}
            >
                <Stack.Screen name="InitialScreen" component={InitialScreen} options={{  headerShown: false,}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    headerTitle: '',
                }}/>
                <Stack.Screen
                    name="Registration"
                    component={RegistrationScreen}
                    options={{
                        headerTitle: '',
                        headerStyle:{borderBottomWidth: 0},
                        headerBackImage: ({tintColor}) => {
                            return (
                             <MaterialCommunityIcons name="keyboard-backspace" size={30} color={tintColor} style={{marginLeft: Platform.OS === 'ios' ? 11:5}}/>
                            );
                        },
                    }}
                />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerStyle:{borderBottomWidth: 0}, headerTitle: ''}}/>
                <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
                <Stack.Screen name="Board" component={Board} options={{headerTitle: '', headerShown: false}}/>
                <Stack.Screen name="Potolio" component={Potolio} options={{headerTitle: '이력서 작성'}}/>

                <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>

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