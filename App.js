import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

/* Importando os recursos da API nativa/móvel */
import * as ImagePicker from "expo-image-picker";
import { useState } from 'react';

export default function App() {
  
  /* State tradicional para armazenar a referência da foto (quando existir) */
  const [foto, setFoto] = useState(null);

  /* State de checagem de permissões de uso (através de hook useCameraPermission) */
  const [status, RequestPermission] = ImagePicker.useCameraPermissions();

  return (
    <>
      <StatusBar />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title='Escolher Foto' />
        <Image style={{ width: 300, height: 300 }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
