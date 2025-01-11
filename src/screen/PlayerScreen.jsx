import {StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import React from "react";
import { colors } from "../constants/color";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { fontSize, iconSizes, spacing } from "../constants/dimensions";
const imageUrl="https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/819/325x325/after-the-end-1734397255-9Lh9UTTj82.jpg"
const PlayerScreen = () => {
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
          <View style={styles.titleRow}>
            <Text style={styles.title}>After the end</Text>
            <TouchableOpacity>
              <AntDesign
                name="heart"
                size={iconSizes.md}
                color={colors.iconSecondary}
                style={styles.iconHeart}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.artist}>Rex Hooligan</Text>
          <View style={styles.divider} />
        </View>
        <View>
            <TouchableOpacity>
                <Feather name={true? "volume-x" : "volume-1"} 
                size={iconSizes.lg} 
                color={colors.iconSecondary} />
            </TouchableOpacity>
        </View>
      </View>
    );
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
      width: "100%",
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
      marginTop: spacing.md,
    },
    titleRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingHorizontal: spacing.md,
    },
    title: {
      fontSize: fontSize.lg,
      fontWeight: "bold",
      color: colors.textPrimary,
      flex: 1,
      textAlign: "center",
    },
    iconHeart: {
      position: "absolute",
      right: 0,
    },
    artist: {
      fontSize: fontSize.md,
      color: colors.textSecondary,
      marginTop: spacing.sm,
      textAlign: "center",
    },
    divider: {
      height: 1,
      backgroundColor: colors.textSecondary,
      width: "60%",
      marginTop: spacing.sm,
    },
  });
  