import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function TextButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    borderColor: 'gray',
    width: '75%',
    alignItems: 'center',
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
  },

  text: {
      color: 'black',
      fontWeight: '500',
      fontSize: 15,
  }
});
