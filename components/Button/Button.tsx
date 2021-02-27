import React from "react";
import colors from "../../constants/colors"
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle
} from "react-native";

interface ButtonProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  underlayColor?: string;
}

export function Button(props: ButtonProps): JSX.Element {
  return (
    <TouchableHighlight
      onPress={props?.onPress}
      underlayColor={
        props?.underlayColor ? props?.underlayColor : colors.BUTTON_UNDERLAY_COLOR
      }
      style={[style?.button, props?.buttonStyle]}
    >
      <Text style={[style?.title, props?.titleStyle]}>{props?.title}</Text>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#1058f3",
    width: "30%",
    padding: 10,
    borderRadius: 7,
    overflow: "hidden",
    alignItems: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 15
  },
});
