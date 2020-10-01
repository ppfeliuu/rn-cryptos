import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

const Header = () => <Text style={styles.encabezado}>Cryptos</Text>;

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === "ios" ? 50 : 40,
  },
});

export default Header;
