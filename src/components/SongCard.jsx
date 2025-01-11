import {Image,Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import { colors } from "../constants/color";
import { fontSize, spacing } from "../constants/dimensions";
const imageUrl= "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/812/325x325/severed-rose-1733360455-zVggjMOPR9.png";
const SongCard=({containerStyle,imageStyle})=>{
    return (
      <TouchableOpacity style={[styles.container,containerStyle]}>
        <Image source={{ uri: imageUrl }} style={[styles.coverImage,imageStyle]} />
        <Text style={styles.title}>Monster go home</Text>
        <Text style={styles.artist}>Alan Walker</Text>
      </TouchableOpacity>
    );
}
export default SongCard;
const styles= StyleSheet.create(
    {
        container:{
            height:250,
            width:270
        },
        coverImage:{
            width:250,
            height:250,
            borderRadius:10
        },
        title:{
            color: colors.textPrimary,
            textAlign:"center",
            fontSize: fontSize.lg,
            paddingVertical:spacing.sm
        },
        artist:{
            color: colors.textSecondary,
            textAlign:"center",
            fontSize: fontSize.md
        }
    }

)