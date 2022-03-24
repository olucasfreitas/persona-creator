import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Step1() {
  const [avatar, setAvatar] = useState<string>();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Identificador</Text>
      <TouchableOpacity onPress={() => setAvatar("person1")}>
        <Image style={styles.avatar} source={require("./assets/person1.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setAvatar("person2")}>
        <Image style={styles.avatar} source={require("./assets/person2.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setAvatar("person3")}>
        <Image style={styles.avatar} source={require("./assets/person3.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  titulo: {
    fontSize: 32,
  },
  avatar: {
    width: 100,
    height: 100,
  },
});
