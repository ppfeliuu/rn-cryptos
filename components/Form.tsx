import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import axios from "axios";

const Form = ({
  moneda,
  criptomoneda,
  setMoneda,
  setCriptoMoneda,
  setConsultarAPI,
}: any) => {
  const [criptomonedas, setCriptoMonedas] = useState<any>([]);

  const getMoneda = (moneda: any) => {
    setMoneda(moneda);
  };

  const getCriptoMoneda = (cripto: any) => {
    setCriptoMoneda(cripto);
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

  const cotizarPrecio = () => {
    if (moneda.trim() === "" || criptomoneda.trim() === "") {
      mostrarAlerta();
      return;
    }

    setConsultarAPI(true);
  };

  const mostrarAlerta = () => {
    Alert.alert("Error...", "Ambos campos son obligatorios", [{ text: "OK" }]);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={(moneda) => getMoneda(moneda)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label="-Seleccione -" value="" />
        <Picker.Item label="Dólar" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra" value="GBP" />
      </Picker>
      <Text style={styles.label}>Crytomoneda</Text>

      <Picker
        selectedValue={criptomoneda}
        onValueChange={(cripto) => getCriptoMoneda(cripto)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label="-Seleccione -" value="" />
        {criptomonedas.map((cripto: any) => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight
        style={styles.btnCotizar}
        onPress={() => cotizarPrecio()}
      >
        <Text style={styles.textoCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    marginVertical: 20,
    textTransform: "uppercase",
  },
  btnCotizar: {
    backgroundColor: "#5e49e2",
    padding: 10,
    marginTop: 20,
  },
  textoCotizar: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default Form;
