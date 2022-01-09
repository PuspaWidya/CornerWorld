import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colorsMain } from "../utilis";
import { useStoreTodo } from "../store";
import Task from "../components/Task";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "react-query";

export default function Todo() {
  const [message, setmessage] = useState("");
  const todos = useStoreTodo((state) => state.todos);
  const getTodos = useStoreTodo((state) => state.getTodos);
  const addTodo = useStoreTodo((state) => state.addTodo);

  //create todo
  const { control, handleSubmit } = useForm();

  const onSubmit = (newData) => {
    mutate({ ...newData, finished: false });
  };

  const createTodo = async (data) => {
    await addTodo(data);
  };

  const { mutate, isLoading } = useMutation(createTodo, {
    onSuccess: () => {
      setmessage("success");
    },
    onSettled: async () => {
      setmessage("");
    },
  });
  //end create

  useEffect(() => {
    getTodos();
  }, [message]);

  return (
    <>
      <View style={styles.constainer}>
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}> Today's tasks :</Text>

          <View style={styles.items}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {todos.map((todo) => {
                return <Task key={todo?.id} text={todo} />;
              })}
            </ScrollView>
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboard}
        >
          <Controller
            control={control}
            name="todo"
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.input}
                placeholder={"write a task"}
                value={value}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />

          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View style={styles.addWrapper} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.addText} title="Submit">
                +
              </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: colorsMain.backGroundColorPrimary,
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
  },
  items: {
    padding: 10,
    height: "85%",
  },
  addText: {},
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  input: {
    paddingVertical: 15,
    width: 250,
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  keyboard: {
    position: "absolute",
    justifyContent: "space-around",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
