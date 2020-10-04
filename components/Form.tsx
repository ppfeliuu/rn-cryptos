import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";
import axios from "axios";

const Form = () => {
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptoMoneda] = useState("");
  const [criptomonedas, setCriptoMonedas] = useState("");

  const getMoneda = (moneda: any) => {
    setMoneda(moneda);
  };

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      setCriptoMonedas(resultado.data.Data);
    };

    consultarAPI();
  }, []);

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={(moneda) => getMoneda(moneda)}
      >
        <Picker.Item label="-Seleccione -" value="" />
        <Picker.Item label="Dólar" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra" value="GBP" />
      </Picker>
      <Text style={styles.label}>Crytomoneda</Text>

      <Picker></Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    marginVertical: 20,
    textTransform: "uppercase",
  },
});

export default Form;
