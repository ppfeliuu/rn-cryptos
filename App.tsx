import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />

      <Image
        style={styles.imagen}
        source={require("./assets/img/cryptomonedas.png")}
      />

      <View style={styles.contenido}>
        <Form />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: "100%",
    height: 150,
    marginHorizontal: "2.5%",
  },
  contenido: {
    marginHorizontal: "2.5%",
  },
});
