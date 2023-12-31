import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MLibrary from "expo-media-library";
export default function Camerascreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    // await MLibrary.saveToLibraryAsync(result.uri);
    if (!result.cancelled) {
      setImage(result.uri);
      setResult(result);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an   image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button
        title="Printing"
        onPress={() => navigation.navigate("Printing", { img: result })}
      />
    </View>
  );
}
