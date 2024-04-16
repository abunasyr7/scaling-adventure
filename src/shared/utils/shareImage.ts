import * as Sharing from "expo-sharing";

export const shareImage = async (uri) => {
  try {
    await Sharing.shareAsync(uri);
  } catch (error) {
    alert("Oops, something went wrong. Please try again.");
  }
};
