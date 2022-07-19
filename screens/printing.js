import React from "react";
import { View, Text, Button, Image } from "react-native";
import { AuthContext } from "../auth";

export default function Printing({route, navigation}) {
  const { signOut } = React.useContext(AuthContext);
console.log(route.params)
  return (
    <View
    style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        margin:100,
    }}>
      <Text>Printing</Text>
      {route.params.img? ( <Image source={{ uri: route.params.img }} style={{ width: 200, height: 200 }} /> ) : null}
      <Button title="Sign out" onPress={signOut} />
        <Button title="Camera" onPress={()=>navigation.navigate('Camera', {new:true})} />
    </View>
  );
}