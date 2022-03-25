import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { Modal, Button } from "native-base";

export default function Step4() {
  const [comunicativo, setComunicativo] = React.useState(false);
  const [colaborativo, setColaborativo] = React.useState(false);
  const [criativo, setCriativo] = React.useState(false);
  const [decisao, setDecisao] = React.useState(false);
  const [gestor, setGestor] = React.useState(false);
  const [lideranca, setLideranca] = React.useState(false);
  const [itens, setItens] = React.useState<string[]>([]);

  const addValue = (value: string) => {
    itens.push(value);
  };

  const removeValue = (valueRemove: string) => {
    const item = itens.findIndex((value) => value === valueRemove);
    itens.splice(item, 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidade</Text>
      <Checkbox
        value={comunicativo}
        onValueChange={(value) =>
          value
            ? (addValue("comunicativo"), setComunicativo(value))
            : (removeValue("comunicativo"), setComunicativo(value))
        }
        color={comunicativo ? "#4630EB" : undefined}
      />
      <Text>comunicativo</Text>
      <Checkbox
        value={colaborativo}
        onValueChange={(value) =>
          value
            ? (addValue("colaborativo"), setColaborativo(value))
            : (removeValue("colaborativo"), setColaborativo(value))
        }
        color={colaborativo ? "#4630EB" : undefined}
      />
      <Text>colaborativo</Text>
      <Checkbox
        value={criativo}
        onValueChange={(value) =>
          value
            ? (addValue("criativo"), setCriativo(value))
            : (removeValue("criativo"), setCriativo(value))
        }
        color={criativo ? "#4630EB" : undefined}
      />
      <Text>criativo</Text>
      <Checkbox
        value={decisao}
        onValueChange={(value) =>
          value
            ? (addValue("decisao"), setDecisao(value))
            : (removeValue("decisao"), setDecisao(value))
        }
        color={decisao ? "#4630EB" : undefined}
      />
      <Text>decisao</Text>
      <Checkbox
        value={gestor}
        onValueChange={(value) =>
          value
            ? (addValue("gestor"), setGestor(value))
            : (removeValue("gestor"), setGestor(value))
        }
        color={gestor ? "#4630EB" : undefined}
      />
      <Text>gestor</Text>
      <Checkbox
        value={lideranca}
        onValueChange={(value) =>
          value
            ? (addValue("lideranca"), setLideranca(value))
            : (removeValue("lideranca"), setLideranca(value))
        }
        color={lideranca ? "#4630EB" : undefined}
      />
      <Text>lideranca</Text>
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
