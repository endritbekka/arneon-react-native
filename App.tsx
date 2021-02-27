import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "./components/Button"
import { useFonts } from 'expo-font';
import fonts from "./constants/fonts"

export default function App() {
  /* Load fonts */
  const [loaded] = useFonts({
    'Product-Sans-Bold': require('./assets/fonts/Product-Sans-Bold.ttf'),
    'Product-Sans-Italic': require('./assets/fonts/Product-Sans-Italic.ttf'),
    'Product-Sans-Regular': require('./assets/fonts/Product-Sans-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Button titleStyle={{ fontFamily: fonts?.regular }} onPress={() => {}} title="B U T T O N" />
    </View>
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
