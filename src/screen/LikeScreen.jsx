import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import { colors } from "../constants/color";
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { fontSize, iconSizes, spacing } from "../constants/dimensions";
import SongCard from "../components/SongCard";
const LikeScreen=()=>{
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
          <TouchableOpacity>
            <SimpleLineIcons
              name="equalizer"
              size={iconSizes.md}
              color={colors.iconPrimary}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          ListHeaderComponent={
            <Text style={styles.headingText}>Liked Songs</Text>
          }
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={() => (
            <SongCard
              containerStyle={{ width: "47%" }}
              imageStyle={{
                height: 160,
                width: 160,
              }}
            />
          )}
          numColumns={2}
          contentContainerStyle={{
            paddingBottom: 180,
            paddingHorizontal: spacing.md,
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginVertical: spacing.lg,
          }}
        />
      </View>
    );
}
export default LikeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  headingText: {
    fontSize: fontSize.lg,
    color: colors.textPrimary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
});