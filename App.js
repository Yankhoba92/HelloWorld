import { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Button,
  Modal,
  StatusBar,
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="light-content"/>
    </View>
  );
}
