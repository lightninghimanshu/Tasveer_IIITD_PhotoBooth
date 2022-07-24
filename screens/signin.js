import * as React from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { AuthContext } from "../auth";
export default function SignInScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "black" }}
    >
      <Image
        source = {require("../assets/xyz1.png")}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable onPress={() => signIn({ username, password })}>
          <View style={styles.button}>
            <Text style={{ alignSelf: "center", color: "white" }}>Sign In</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: 1,
    backgroundColor: "white",
    marginTop: 300,
    paddingHorizontal: 20,
    paddingTop: 100,
    borderRadius: 20,
  },
  input: {
    borderColor: "black",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "black",
    borderColor: "black",
    alighItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginHorizontal: 100,
    padding: 10,
    marginTop: 20,
    borderRadius: 20,
  },
});
