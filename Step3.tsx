import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Select } from "native-base";

export default function Step3() {
  const [sector, setSector] = useState<string>();
  const [position, setPosition] = useState<string>();
  const [boss, setBoss] = useState<string>();

  return (
    <View style={styles.container}>
      <Text>Poscionamento</Text>

      <TextInput
        style={styles.input}
        onChangeText={(value) => setSector(value)}
        value={sector}
        placeholder="Setor"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setPosition(value)}
        value={position}
        placeholder="Posição na empresa"
        keyboardType="default"
      />
      <Select
        style={styles.input}
        selectedValue={boss}
        minWidth="200"
        placeholder="Choose Service"
        mt={1}
        onValueChange={(itemValue) => setBoss(itemValue)}
      >
        <Select.Item label="CEO" key="CEO" value="CEO" />
        <Select.Item label="Diretor" key="Diretor" value="Diretor" />
        <Select.Item label="Presidente" key="Presidente" value="Presidente" />
      </Select>
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
