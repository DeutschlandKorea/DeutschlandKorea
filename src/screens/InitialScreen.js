import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export function InitialScreen({ onPress }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"transparent"}
        translucent={true}
      />
      {/* <Image
        style={styles.image}
        source={require("\assets\logo.PNG")}
      /> */}
      <View style={styles.container_3}>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.container_2}>
          <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerBtn} onPress={onPress}>
            <Text style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 40,
    width: "100%",
    height: 300,
  },

  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#fff",
  },

  container_2: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  container_3: {
    paddingTop: 550,
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
