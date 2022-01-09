import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colorsMain } from "../utilis";
import { TrashIcon } from "react-native-heroicons/outline";
import { useMutation } from "react-query";
import { useStoreTodo } from "../store";

export default function Task(props) {
  const deleteTodo = useStoreTodo((state) => state.deleteTodos);
  const editTodo = useStoreTodo((state) => state.editTodo);

  //edit todo
  const onChangeStatus = (id) => {
    editMutate(id);
  };

  const chageTodo = async (data) => {
    editTodo(data);
  };

  const { mutate: editMutate } = useMutation(chageTodo, {
    onSuccess: (data) => {
      const message = "success";
      alert(message);
    },
  });

  //end edit

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => onChangeStatus(props?.text.id)}
        >
          <Text style={styles.insert}>{props.text.finished ? "O" : "X"}</Text>
        </TouchableOpacity>
        <Text style={[styles.text, props.text.finished && styles.textfinished]}>
          {props?.text.todo}
        </Text>
      </View>
      <View style={styles.edit.todo}>
        <TouchableOpacity onPress={() => deleteTodo(props?.text.id)}>
          <TrashIcon color="green" size={20} style={{ margin: 5 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colorsMain.backGroundColorWhite,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: colorsMain.square.primary,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    maxWidth: "80%",
  },
  textfinished: {
    textDecorationLine: "line-through",
    fontWeight: "900",
  },
  edit: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  insert: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
