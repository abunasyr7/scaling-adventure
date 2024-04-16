import CommonBackground from "../../shared/ui/CommonBackground";
import { useState } from "react";
import { CameraSelect } from "../camera/CameraSelect";
import { DataPicker } from "../datepicker/DataPicker";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
import { fetchMarsPhotos } from "../../services/fetchMarsPhotos";

const HomeScreen = () => {
  const [photos, setPhotos] = useState();
  const [show, setShow] = useState(true);
  const [camera, setCamera] = useState("FHAZ");
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const handlePress = () => {
    queryClient
      .fetchQuery({
        queryKey: ["photos", camera, date],
        queryFn: () => fetchMarsPhotos({ camera: camera, earthDate: date }),
      })
      .then((data) => {
        //@ts-ignore
        navigation.navigate("Gallery", { data });
      });
  };

  return (
    <CommonBackground>
      <CameraSelect camera={camera} setCamera={setCamera} />
      <View style={styles.container}>
        <DataPicker setShow={setShow} date={date} setDate={setDate} />
        <Entypo
          name="calendar"
          size={24}
          color="black"
          onPress={() => setShow(true)}
        />
      </View>
      <Pressable onPress={handlePress} style={styles.submitButton}>
        <Text style={styles.text}>Explore</Text>
      </Pressable>
    </CommonBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: "70%",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    opacity: 0.5,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: "#BF2E0E",
    width: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#FFFFFF",
    paddingVertical: 18,
    fontSize: 18,
    lineHeight: 23,
  },
});
