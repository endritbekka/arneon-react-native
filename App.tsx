import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "./components/Button"

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="B U T T O N" />
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
