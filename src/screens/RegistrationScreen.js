import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FilledButton } from "../components/FilledButton";
import { Heading } from "../components/Heading";
import { RegistInput } from "../components/RegistInput";
import { IconBtn } from "../components/IconBtn";

export function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"transparent"}
        translucent={true}
      />
      <IconBtn
        style={styles.returnIcon}
        name="return-up-back-outline" /*--------------------------------------------------안되는 부분---------------------------*/
        onPress={() => {}}
      />
      <Heading style={styles.title}>회원가입</Heading>
      {/* <Error error={'error'} /> */}
      <View style={styles.container_2}>
        <Text style={styles.text}>아이디</Text>
        <RegistInput style={styles.input} placeholder={"Enter Your ID"} />
      </View>
      <View style={styles.container_2}>
        <Text style={styles.text}>비밀번호</Text>
        <RegistInput style={styles.input} placeholder={"Enter PW"} secureTextEntry />
      </View>
      <View style={styles.container_2}>
        <Text style={styles.text_2}>비밀번호 확인</Text>
        <RegistInput style={styles.input} placeholder={"Enter PW again"} secureTextEntry />
      </View>
      <View style={styles.container_2}>
        <Text style={styles.text}>이메일</Text>
        <RegistInput
          style={styles.input}
          placeholder={"email-address"}
          keyboardType={"email-address"}
        />
      </View>
      <FilledButton
        title={"가입하기"}
        style={styles.registerButton}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#fff",
  },

  container_2: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    marginBottom: 30,
    paddingLeft: 20,
  },

  input: {
    marginVertical: 10,
    marginLeft: 20,
  },

  registerButton: {
    marginTop: 200,
    marginVertical: 10,
    marginLeft: 50,
  },

  text: {
    fontWeight: "500",
    fontSize: 18,
    paddingRight: 20,
  },

  text_2: {
    fontWeight: "500",
    fontSize: 14,
    paddingRight: 20,
  },

  returnIcon: {
    position: "absolute",
    top: 60,
    left: 16,
  },
});
