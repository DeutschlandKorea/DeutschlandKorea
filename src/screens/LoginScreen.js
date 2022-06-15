import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FilledButton } from "../components/FilledButton";
import { TextButton } from "../components/TextButton";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";

export function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"transparent"}
        translucent={true}
      />
      <Heading style={styles.title}>로그인</Heading>
      {/* <Error error={'error'} /> */}
      <Input style={styles.input} placeholder={"ID"} />
      <Input style={styles.input} placeholder={"PW"} secureTextEntry />
      <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={() => {}}
      />
      <TextButton
        title={"회원가입하기"}
        onPress={() => {
          navigation.navigate("Registration");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    marginBottom: 30,
  },

  input: {
    marginVertical: 10,
  },

  loginButton: {
    marginVertical: 10,
  },
});
