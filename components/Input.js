import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colorsMain } from "../utilis";
import { useForm, Controller } from "react-hook-form";

const Input = ({ text, value, onChangeText }) => {
  const [border, setBorder] = useState(colorsMain.border.primary);

  const onFocusForm = () => {
    setBorder(colorsMain.border.secondary);
  };

  const onBlurForm = () => {
    setBorder(colorsMain.border.primary);
  };

  const { control, handleSubmit } = useForm();
  const onChange = (data) => {
    console.log({ data });
  };

  return (
    <View>
      <Text style={styles.text}>{text}</Text>
      {/* <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
      /> */}

      <Controller
        control={control}
        name={text}
        rules={{ required: true }}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.input}
            // placeholder={"write a task"}
            value={{ value }}
            onChangeText={(value) => onChange(value)}
            onFocus={onFocusForm}
            onBlur={onBlurForm}
            style={styles.input(border)}
          />
        )}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  text: {
    fontSize: 16,
    color: colorsMain.text.greenDeep,
    marginBottom: 6,
  },
});
