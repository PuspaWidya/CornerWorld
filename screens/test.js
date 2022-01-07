import React, { useEffect } from "react";
import { Text, View, StatusBar, Button } from "react-native";
import tailwind from "tailwind-rn";
// import { useStore } from "../store";
// import { useStore2 } from "../store";
// import { useStore } from "../store";

export default function Test() {
  // const removeStudent = useStore((state) => state.removeStudent);
  // const students = useStore((state) => state.students);
  // const bears = useStore2((state) => state.bears);
  // const message = useStore2((state) => state.message);
  // const increasePopulation = useStore2((state) => state.increasePopulation);
  // const todos = useStore((state) => state.todos);
  // const getTodos = useStore((state) => state.getTodos);
  // console.log(todos);

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#fff"></StatusBar>
      {/* <Text>{bears} around here ....</Text>
      <Button onPress={increasePopulation} title="increase" />
      <Text>{students.length}</Text> */}
      <Text>dasdasdasdasadaaaaa</Text>
      {/* <Text>{todos.length}</Text> */}
    </>
  );
}
