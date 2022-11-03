import { Button, TouchableHighlight, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ButtonComponents, propsStack } from "../types/types";

export default function ButtonRouter(props: ButtonComponents) {
  const navigation = useNavigation<propsStack>();
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={props.hover}
      style={props.style}
      onPress={
        props.onPress ? () => navigation.navigate(props.nameRoute) : undefined
      }
    >
      <>
        {props.nameButtonOn ? (
          props.nameButton
        ) : (
          <Text
            style={{
              color: props.color ? props.color : "black",
              fontWeight: "900",
            }}
          >
            {props.nameButton}
          </Text>
        )}
      </>
    </TouchableHighlight>
  );
}
