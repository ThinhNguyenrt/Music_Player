import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import Slider from "@react-native-community/slider";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../constants/color";
import { fontSize, iconSizes, spacing } from "../constants/dimensions";

const PlayerScreen = () => {
  const [currentTime, setCurrentTime] = useState(50);
  const [duration, setDuration] = useState(240);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const onSliderValueChange = (value) => {
    setCurrentTime(value);
  };

  const imageUrl =
    "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/819/325x325/after-the-end-1734397255-9Lh9UTTj82.jpg";

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            size={iconSizes.md}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}>Playing now</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.coverImage} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>After the End</Text>
        <Text style={styles.artist}>Rex Hooligan</Text>
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          minimumTrackTintColor={colors.iconPrimary}
          maximumTrackTintColor={colors.textSecondary}
          thumbTintColor={colors.iconPrimary}
          onValueChange={onSliderValueChange}
        />
        <Text style={styles.timeText}>-{formatTime(duration - currentTime)}</Text>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <AntDesign
            name="banckward"
            size={iconSizes.lg}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlayPause} style={styles.playPauseButton}>
          <AntDesign
            name={isPlaying ? "pause" : "caretright"}
            size={iconSizes.lg}
            color={colors.textPrimary}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign
            name="forward"
            size={iconSizes.lg}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  headingText: {
    color: colors.textPrimary,
    textAlign: "center",
    fontSize: fontSize.lg,
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: spacing.xl,
  },
  coverImage: {
    height: 255,
    width: 255,
    borderRadius: 10,
  },
  titleContainer: {
    alignItems: "center",
    marginVertical: spacing.md,
  },
  title: {
    fontSize: fontSize.lg,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  artist: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.md,
  },
  slider: {
    flex: 1,
    marginHorizontal: spacing.md,
  },
  timeText: {
    color: colors.textSecondary,
    fontSize: fontSize.sm,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: spacing.lg,
  },
  playPauseButton: {
    backgroundColor: colors.iconPrimary,
    padding: spacing.md,
    borderRadius: 50,
  },
});
