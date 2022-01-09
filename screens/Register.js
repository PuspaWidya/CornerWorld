import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { colorsMain } from "../utilis";
import { useForm, Controller } from "react-hook-form";
import { useStoreUser } from "../store/user";
import { useMutation } from "react-query";
import Loading from "../components/Loading";
import Input from "../components/Input";

const Register = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addUser = useStoreUser((state) => state.addUser);
  const [success, setSuccess] = useState(true);
  const [border, setBorder] = useState(colorsMain.border.primary);

  const onFocusForm = () => {
    setBorder(colorsMain.border.secondary);
  };

  const onBlurForm = () => {
    setBorder(colorsMain.border.primary);
  };

  const onSubmit = (newData) => {
    setSuccess(false);
    mutate(newData);
  };

  const createUser = async (data) => {
    await addUser(data);
  };

  const { mutate, isLoading } = useMutation(createUser, {
    onSuccess: () => {
      alert("success make new user");
    },
    onSettled: () => {
      setSuccess(true);
      reset();
      navigation.navigate("Login");
    },
  });

  return (
    <>
      {!success && <Loading />}
      <View style={styles.content}>
        <Logo />
        <Text style={styles.title}>Register your account</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>Name</Text>
          <Controller
            control={control}
            name={"name"}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={(value) => onChange(value)}
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                style={styles.input(border)}
              />
            )}
          />
          {errors.name?.type == "required" && (
            <Text>First name is required</Text>
          )}
          <View style={{ padding: 10 }} />
          <Text style={styles.text}>Username</Text>
          <Controller
            control={control}
            name={"username"}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={(value) => onChange(value)}
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                style={styles.input(border)}
              />
            )}
          />
          {errors.username?.type == "required" && (
            <Text> Username is required</Text>
          )}
          <View style={{ padding: 10 }} />
          <Text style={styles.text}>Email</Text>
          <Controller
            control={control}
            name={"email"}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={(value) => onChange(value)}
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                style={styles.input(border)}
              />
            )}
          />

          {errors.email?.type == "required" && <Text>Email is required</Text>}
          <View style={{ padding: 10 }} />

          <Text style={styles.text}>Password</Text>
          <Controller
            control={control}
            name={"password"}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={(value) => onChange(value)}
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                style={styles.input(border)}
                secureTextEntry={true}
              />
            )}
          />
          {errors.password?.type == "required" && (
            <Text>Password is required</Text>
          )}

          <View style={{ heigth: 25, paddingTop: 60 }} />
          <Button title={"Continue"} onPress={handleSubmit(onSubmit)} />
        </ScrollView>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: colorsMain.text.greenDeep,
    fontWeight: "bold",
    marginVertical: 40,
    maxWidth: 250,
  },
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
