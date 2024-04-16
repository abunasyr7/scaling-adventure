import * as MediaLibrary from "expo-media-library";

export const saveImageToGallery = async (uri) => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== "granted") {
    alert("Permission to access gallery was denied");
    return;
  }
  try {
    const asset = await MediaLibrary.createAssetAsync(uri);
    await MediaLibrary.createAlbumAsync("Download", asset, false);
    alert("Image saved to gallery!");
  } catch (error) {
    console.error("Error saving image", error);
    alert("Failed to save image");
  }
};
