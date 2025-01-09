import {StyleSheet, View,  Image, Text} from "react-native";
import React from "react";
import { colors } from "../constants/color";
import { fontSize, spacing } from "../constants/dimensions";
import { GoBackButton, GoForwardButton, PlayButton } from "./FloatingControls";
const imageUrl ="https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/815/325x325/what-you-did-1733792458-vYVprGNPBu.png";
const FloatingPlayer=()=>{
    return(
        <View style={styles.container}>
            <Image source={{uri:imageUrl}} style={styles.coverImage}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Chalk and Dust</Text>
                <Text style={styles.artist}>Alan Walker</Text>
            </View>
            <View style={styles.playerControlContainer}>
                <GoBackButton/>
                <PlayButton/>
                <GoForwardButton/>
            </View>
        </View>
    );
}
export default FloatingPlayer;
const styles= StyleSheet.create(
    {
        container:{
            flexDirection:"row",
            alignItems:"center"
        },
        coverImage:{
            height:70,
            width:70
        },titleContainer:{
            flex:1,
            paddingHorizontal:spacing.md
        },
        title:{
            color: colors.textPrimary,
            fontSize: fontSize.lg
        },
        artist:{
            color: colors.textSecondary,
            fontSize: fontSize.md
        },
        playerControlContainer:{
            flexDirection:"row",
            alignItems: "center",
            gap: spacing.sm
        }
    }
)