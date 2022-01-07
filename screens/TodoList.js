import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useMutation, useQuery, queryClient } from "react-query";
import tailwind, { getColor } from "tailwind-rn";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { TrashIcon } from "react-native-heroicons/outline";

export default function TodoList() {
  //   const [newTodo, setNewTodo] = useState();
  const [done, setDone] = useState(false);
  const { isError, data, isSuccess } = useQuery("market", () => getMarket());
  const { data: todo } = useQuery("todoGet", () => getTodo(), {
    refetchInterval: 3000,
  });

  //create
  const createTodo = async (data) => {
    const { data: response } = await axios.post(
      "https://61d3f115b4c10c001712bb4e.mockapi.io/api/user/todo",
      data
    );
    return data;
  };

  const { mutate, isLoading } = useMutation(createTodo, {
    onSuccess: (data) => {
      const message = "success";
      alert(message);
    },
  });
  //end

  //delete todo
  const deleteTodo = async (data) => {
    console.log(data);
    const { data: response } = await axios.delete(
      `https://61d3f115b4c10c001712bb4e.mockapi.io/api/user/todo/${data}`
    );
    return response;
  };
  const { mutate: deleteMutate } = useMutation(deleteTodo, {
    onSuccess: (data) => {
      const message = "success";
      alert(message);
    },
  });

  //editTodo
  const chageTodo = async (data) => {
    const checkStatus = await axios.get(
      `https://61d3f115b4c10c001712bb4e.mockapi.io/api/user/todo/${data}`
    );

    let { finished } = checkStatus.data;

    await axios.put(
      `https://61d3f115b4c10c001712bb4e.mockapi.io/api/user/todo/${data}`,
      { finished: !finished }
    );
  };

  const { mutate: editMutate } = useMutation(chageTodo, {
    onSuccess: (data) => {
      const message = "success";
      alert(message);
    },
  });

  //form
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    clearErrors,
  } = useForm();

  const onSubmit = (newData) => {
    mutate({ ...newData, finished: false });
  };
  //end

  const getMarket = async () => {
    const url = "https://61d3f115b4c10c001712bb4e.mockapi.io/api/user/fakeuser";
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("fetching error");
    }
    return res.json();
  };

  const getTodo = async () => {
    const url = "https://61d3f115b4c10c001712bb4e.mockapi.io/api/user/todo";
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("fetching error");
    }
    return res.json();
  };

  const onRemove = (id) => {
    console.log(id);
    deleteMutate(id);
  };

  const onChangeStatus = (id) => {
    console.log(id);
    editMutate(id);
  };

  return (
    <>
      <View style={tailwind("flex-1 items-center w-full bg-blue-100")}>
        <View style={tailwind("bg-white rounded p-6 m-4 w-full")}>
          <View style={tailwind("mb-4")}>
            <Text style={tailwind("text-gray-500 text-center")}>Todo List</Text>
            <View style={tailwind("flex mt-4")}>
              <Controller
                control={control}
                name="todo"
                rules={{ required: true }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={tailwind(
                      "border rounded w-full py-2 px-3 mr-4 text-gray-600"
                    )}
                    placeholder="Enter your Todo here"
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  ></TextInput>
                )}
              />
            </View>
          </View>
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          <View style={tailwind("flex mb-4 items-center")}>
            {isSuccess &&
              todo?.map((prop, key) => {
                return (
                  <View
                    key={prop.id}
                    style={tailwind("flex mb-4 items-center")}
                  >
                    <Text
                      style={tailwind(
                        `${
                          !prop.finished
                            ? "w-full text-gray-800"
                            : "w-full text-gray-800 line-through"
                        }`
                      )}
                    >
                      {prop?.todo}
                    </Text>

                    <TouchableOpacity onPress={() => onRemove(prop.id)}>
                      <TrashIcon color="red" size={20} />
                    </TouchableOpacity>
                    <View>
                      <TouchableOpacity onPress={() => onChangeStatus(prop.id)}>
                        <Text>Done</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            {isError && <Text>Error</Text>}
          </View>
        </View>
      </View>
    </>
  );
}
