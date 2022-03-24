import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Step2() {
  const [age, setAge] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [schooling, setSchooling] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();

  return (
    <View style={styles.container}>
      <Text>Dados Pessoais</Text>

      <TextInput
        style={styles.input}
        onChangeText={(value) => setAge(value)}
        value={age}
        placeholder="Idade"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setGender(value)}
        value={gender}
        placeholder="Sexo"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setSchooling(value)}
        value={schooling}
        placeholder="Escolaridade"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setPhone(value)}
        value={phone}
        placeholder="Telefone"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
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
    justifyContent: "center",
    flex: 1,
  },
  titulo: {
    fontSize: 32,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
