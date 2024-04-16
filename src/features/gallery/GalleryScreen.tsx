import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { shareImage } from "../../shared/utils/shareImage";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const imageSize = width / 3;

export const GalleryScreen = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const { data } = route.params;

  const openImage = (imgSrc) => {
    setCurrentImage(imgSrc);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openImage(item.img_src)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.img_src }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={data.photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          {/*<Text style={styles.photoId}>Photo ID: {currentImageId}</Text>*/}
          <TouchableOpacity onPress={() => shareImage(currentImage)}>
            <EvilIcons name="share-apple" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.modalContent}
            onPress={() => setModalVisible(false)}
          >
            <Image source={{ uri: currentImage }} style={styles.fullImage} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: imageSize,
    height: imageSize,
    padding: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  modalContent: {
    width: "90%",
    height: "90%",
  },
  fullImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
