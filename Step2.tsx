import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Input } from "native-base";

export default function Step2() {
  const [age, setAge] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [schooling, setSchooling] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Pessoais</Text>

      <Input
        mx="3"
        w="75%"
        maxWidth="300px"
        onChangeText={(value) => setAge(value)}
        value={age}
        placeholder="Idade"
        keyboardType="numeric"
      />
      <Input
        mx="3"
        w="75%"
        maxWidth="300px"
        onChangeText={(value) => setGender(value)}
        value={gender}
        placeholder="Sexo"
        keyboardType="default"
      />
      <Input
        mx="3"
        w="75%"
        maxWidth="300px"
        onChangeText={(value) => setSchooling(value)}
        value={schooling}
        placeholder="Escolaridade"
        keyboardType="default"
      />
      <Input
        mx="3"
        w="75%"
        maxWidth="300px"
        onChangeText={(value) => setPhone(value)}
        value={phone}
        placeholder="Telefone"
        keyboardType="number-pad"
      />
      <Input
        mx="3"
        w="75%"
        maxWidth="300px"
        onChangeText={(value) => setEmail(value)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
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
  title: {
    fontSize: 32,
    marginBottom: 10,
  },
});
