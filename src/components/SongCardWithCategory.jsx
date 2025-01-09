import { StyleSheet,View, Text, FlatList } from "react-native";
import React from "react"
import SongCard from "./SongCard";
import { fontSize, spacing } from "../constants/dimensions";
import { colors } from "../constants/color";
const SongCardWithCategory=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>Recommended for you</Text>
            <FlatList data={[1,2,3,4,5]} renderItem={SongCard} horizontal={true} ItemSeparatorComponent={<View style={{marginHorizontal:spacing.sm}} />} contentContainerStyle={{paddingHorizontal:spacing.lg}}/>
        </View>
    )
}
export default SongCardWithCategory;
const styles= StyleSheet.create(
    {
    headingText:{
        fontSize: fontSize.lg,
        color:colors.textPrimary,
        paddingHorizontal:spacing.md,
        paddingVertical:spacing.md
    },
    container:{
        flex:1
    }
    }
)