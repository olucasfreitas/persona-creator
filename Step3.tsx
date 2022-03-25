import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Select, Input } from "native-base";

export default function Step3() {
  const [sector, setSector] = React.useState<string>();
  const [position, setPosition] = React.useState<string>();
  const [boss, setBoss] = React.useState<string>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Poscionamento</Text>

      <Input
        mx="3"
        w="75%"
        maxWidth="300px"
        onChangeText={(value: string) => setSector(value)}
        value={sector}
        placeholder="Setor"
        keyboardType="numeric"
      />
      <Input
        mx="3"
        w="75%"
        maxWidth="300px"
        onChangeText={(value: string) => setPosition(value)}
        value={position}
        placeholder="Posição na empresa"
        keyboardType="default"
      />
      <Select
        mx="3"
        w="75%"
        maxWidth="300px"
        selectedValue={boss}
        placeholder="Escolha um superior"
        mt={1}
        onValueChange={(itemValue) => setBoss(itemValue)}
      >
        <Select.Item label="CEO" value="CEO" />
        <Select.Item label="diretor" value="diretor" />
        <Select.Item label="presidente" value="presidente" />
      </Select>
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
