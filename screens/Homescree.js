import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { AuthContext } from "../auth";

export default function HomeScreen({navigation}) {
    // console.log(props.navigation);
  const { signOut } = React.useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        margin:100
      }}
    >
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
      <Button title="Camera" onPress={()=>navigation.navigate('Camera')}  />
    </View>
  );
}
