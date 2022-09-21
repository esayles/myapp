import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import meme from "./quicksort.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert("You clicked me!")}>
        <Image source={meme} style={{ height: 480, width: 423 }} />
      </TouchableOpacity>
      <View style={{ height: 40 }} />
      <Image
        source={{ uri: "https://i.redd.it/jx92aw75udb81.jpg" }}
        style={{ width: 400, height: 500 }}
      />
      <Text style={styles.text}>I'm making an important change</Text>
      <Text style={styles.text2}>This is another line of text! </Text>
      <Text style={styles.text3}>
        This, too, is a line of text! I made it two sentences though.{" "}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#00ff00",
    fontSize: 38,
    fontFamily: "times",
  },
  text2: {
    color: "#ffff00",
    fontSize: 38,
    fontFamily: "sans-serif",
  },
  text3: {
    color: "#eeeeee",
    fontSize: 38,
    fontFamily: "monospace",
  },
});
