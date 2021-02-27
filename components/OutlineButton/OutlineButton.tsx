import React from "react";
import { colors, fonts } from "../../constants";
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  ActivityIndicatorProps,
} from "react-native";


export interface OutlineButton {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onLongPress?: () => void;
  underlayColor?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingStyle?: ActivityIndicatorProps;
}

export function OutlineButton(props: OutlineButton): JSX.Element {
  return (
    <TouchableHighlight
      disabled={props?.disabled}
      onLongPress={props?.onLongPress}
      onPress={props?.onPress}
      underlayColor={
        props?.underlayColor ? props?.underlayColor : "transparent"
      }
      style={[
        props?.loading ? style.buttonWithLoading : style?.button,
        props?.buttonStyle,
      ]}
    >
      <>
        <Text style={[style?.title, props?.titleStyle]}>{props?.title}</Text>
        {props?.loading && (
          <ActivityIndicator { ...props?.loadingStyle } />
        )}
      </>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.BUTTON_UNDERLAY_COLOR,
    width: "50%",
    padding: 10,
    borderRadius: 7,
    overflow: "hidden",
    alignItems: "center",
  },
  buttonWithLoading: {
    borderWidth: 1,
    borderColor: colors.BUTTON_UNDERLAY_COLOR,
    width: "53%",
    padding: 10,
    borderRadius: 7,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  title: {
    color: colors.BUTTON_COLOR,
    textAlign: "center",
    fontSize: 15,
    letterSpacing: 1.5,
    fontFamily: fonts.bold,
  },
});
