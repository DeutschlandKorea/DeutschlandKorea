import React from "react";
import { StyleSheet, TextInput } from "react-native";

export function RegistInput({ style, ...props }) {
  return <TextInput {...props} style={[styles.input, style]} />;
}

const styles = StyleSheet.create({
  input: {
      backgroundColor: '#ffffff',
      width: '65%',
      padding: 10,
      borderColor: 'black',
      borderWidth: 1,
      paddingBottom: -10,
  },
});
