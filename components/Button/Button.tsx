import React from "react";
import colors from "../../constants/colors"
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  ActivityIndicatorProps
} from "react-native";

export interface ButtonProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onLongPress?: () => void,
  underlayColor?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingStyle?: ActivityIndicatorProps
}

export function Button(props: ButtonProps): JSX.Element {
  return (
    <TouchableHighlight
      disabled={props?.disabled}
      onLongPress={props?.onLongPress}
      onPress={props?.onPress}
      underlayColor={
        props?.underlayColor ? props?.underlayColor : colors.BUTTON_UNDERLAY_COLOR
      }
      style={[props?.loading ? style?.buttonWithLoading : style?.button, props?.buttonStyle]}
    >
      <>
        <Text style={[style?.title, props?.titleStyle]}>{props?.title}</Text>
        {props?.loading && <ActivityIndicator size="small" color="white" /> }
      </>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#1058f3",
    width: "50%",
    padding: 10,
    borderRadius: 7,
    overflow: "hidden",
    alignItems: "center",
  },
  buttonWithLoading: {
    backgroundColor: "#1058f3",
    width: "50%",
    padding: 10,
    borderRadius: 7,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    letterSpacing: 1.5
  },
});
