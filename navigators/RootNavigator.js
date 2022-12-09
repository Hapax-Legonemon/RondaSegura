import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Login";
import ListaScreen from "../screens/Lista";
import RondaScreen from "../screens/Ronda";
import WellcomeScreen from "../screens/Wellcome";
import ConsultaScreen from "../screens/Consulta";

import BarcodeScannerScreen from "../components/BarcodeScanner";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Wellcome" component={WellcomeScreen} />
      <Stack.Screen name="Lista" component={ListaScreen} />
      <Stack.Screen name="Ronda" component={RondaScreen} />
      <Stack.Screen name="Consulta" component={ConsultaScreen} />

      <Stack.Screen name="Barcodescanner" component={BarcodeScannerScreen} />

    </Stack.Navigator>
  );
};

export default RootNavigator;
