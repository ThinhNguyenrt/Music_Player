import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import { colors } from "../constants/color";
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { iconSizes, spacing } from "../constants/dimensions";
const LikeScreen=()=>{
    return(
        <View style= {styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <AntDesign name="arrowleft" 
                    size={iconSizes.md} 
                    color={colors.iconPrimary} />
                    <SimpleLineIcons name="equalizer" 
                    size={iconSizes.md} 
                    color={colors.iconPrimary} />
                </TouchableOpacity>
            </View>
            <Text style={styles.headingText}>Liked Songs</Text>
        </View>
    );
}
export default LikeScreen;
const styles= StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor: colors.background
        },
        headerContainer:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            paddingHorizontal:spacing.md,
            paddingVertical:spacing.md
        }
    }
)