import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { colors } from "../constants/color";
import { fontSize, spacing } from "../constants/dimensions";
import { GoBackButton, GoForwardButton, PlayButton } from "./FloatingControls";
import { useNavigation } from "@react-navigation/native";

const imageUrl = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/815/325x325/what-you-did-1733792458-vYVprGNPBu.png";

const FloatingPlayer = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0); // Giá trị thanh trượt (0 -> 1)
  const handleOpenPlayerScreen =()=>{
    navigation.navigate("PLAYER-SCREEN");
  }
  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.85}
      onPress={handleOpenPlayerScreen}
      >
      <Image source={{ uri: imageUrl }} style={styles.coverImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chalk and Dust</Text>
        <Text style={styles.artist}>Alan Walker</Text>
        {/* Slider */}
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={progress}
          onValueChange={(value) => setProgress(value)}
          minimumTrackTintColor={colors.iconPrimary} // Màu phần đã kéo
          maximumTrackTintColor={colors.textSecondary} // Màu phần chưa kéo
          thumbTintColor={colors.iconPrimary} // Màu nút kéo
        />
      </View>
      <View style={styles.playerControlContainer}>
        <GoBackButton />
        <PlayButton />
        <GoForwardButton />
      </View>
    </TouchableOpacity>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
  },
  coverImage: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSize.lg,
  },
  artist: {
    color: colors.textSecondary,
    fontSize: fontSize.md,
  },
  slider: {
    width: "100%", // Thanh trượt chiếm toàn bộ chiều rộng
    height: 20,
    marginTop: spacing.sm,
  },
  playerControlContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingRight: spacing.md,
  },
});
