import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Input } from "native-base";

export default function Step1() {
  const [avatar, setAvatar] = React.useState<string>();
  const [name, setName] = React.useState<string>();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Identificador</Text>
      <Input
        mx="3"
        w="75%"
        maxWidth="300px"
        onChangeText={(value) => setName(value)}
        value={name}
        placeholder="Nome"
        keyboardType="default"
      />
      <View style={styles.photos}>
        <TouchableOpacity onPress={() => setAvatar("person1")}>
          <Image
            style={styles.avatar}
            source={require("./assets/person1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAvatar("person2")}>
          <Image
            style={styles.avatar}
            source={require("./assets/person2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAvatar("person3")}>
          <Image
            style={styles.avatar}
            source={require("./assets/person3.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
  titulo: {
    fontSize: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: 5,
    marginLeft: 5,
  },
  photos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
