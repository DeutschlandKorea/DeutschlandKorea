import { StatusBar } from "expo-status-bar";
import React from "react";
import {StyleSheet, TouchableOpacity, Text, View} from "react-native";
import {Images} from "../utils/Images";
import {Icon} from "../components/Button";

export function InitialScreen({  navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"transparent"}
        translucent={true}
      />
     <Icon
        source={Images.Logo}
        width={300}
        height={300}
        resizeMode="contain"
      />
      <View style={styles.container_3}>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.container_2}>
          <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Login")}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerBtn} onPress={()=>navigation.navigate("Registration")}>
            <Text style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems:"center"
  },

  container_2: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  container_3: {
    position:"absolute",
    width:"100%",
    marginBottom: 30,
    bottom:0,
  },

  loginBtn: {
    backgroundColor: "white",
    borderColor: "black",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
    borderWidth: 3,
  },

  loginText: {
    color: "black",
    fontWeight: "500",
    fontSize: 15,
  },

  registerBtn: {
    backgroundColor: "black",
    borderColor: "black",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
  },

  registerText: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
});
