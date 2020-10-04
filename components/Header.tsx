import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

const Header = () => <Text style={styles.encabezado}>Cryptos</Text>;

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === "ios" ? 50 : 40,
    backgroundColor: "#5e49e2",
    paddingBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
    color: "#fff",
    marginBottom: 30,
  },
});

export default Header;
