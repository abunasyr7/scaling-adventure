import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const CustomHeader = ({ title, date }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconContainer}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

// Стили для кастомного заголовка
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 60, // высота заголовка
    backgroundColor: "#f3f3f3", // цвет фона заголовка
  },
  iconContainer: {
    padding: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    // другие стили для заголовка
  },
  date: {
    // стили для даты
  },
});
