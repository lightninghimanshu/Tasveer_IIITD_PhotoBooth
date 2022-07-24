import React from "react";
import { View, Text, Button, Image } from "react-native";
import { AuthContext } from "../auth";

export default function Printing({ route, navigation }) {
  const { signOut } = React.useContext(AuthContext);
  console.log("dsd",route.params.img.uri);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Client-ID b0a38c90e44f29b");
  myHeaders.append(
    "Cookie",
    "IMGURSESSION=bb88875114e2428cd7419afaae94457a; _nc=1; UPSERVERID=upload.i-0bdcb93b0298588e5.production"
  );

  let localUri = route.params.img.uri;
  let filename = localUri.split('/').pop();
  console.log("\n",localUri," \n");
  // Infer the type of the image
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  var formdata = new FormData();
  // formdata.append("image", fileInput.files[0], "/C:/Users/light/OneDrive - iiitd.ac.in/Desktop/TT.png");
  // formdata.append("image","https://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg");


  formdata.append('image', { uri: localUri, name: filename, type });
  // formdata.append("image", route.params.img, route.params.img.uri);
  // console.log("hhh\n");
  console.log(formdata);


  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("https://api.imgur.com/3/image", requestOptions)
    .then(response => response.text())
    .then(result => console.log((JSON.stringify(result))))
    .catch(error => console.log('error', error));


  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 100,
      }}
    >
      <Text>Printing</Text>
      {route.params.img ? (
        <Image
          source={{ uri: route.params.img.uri }}
          style={{ width: 200, height: 200 }}
        />
      ) : null}
      <Button title="Sign out" onPress={signOut} />
      <Button
        title="Camera"
        onPress={() => navigation.navigate("Camera", { new: true })}
      />
    </View>
  );
}
