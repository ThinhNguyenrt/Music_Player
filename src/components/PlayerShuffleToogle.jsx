import {StyleSheet, View,Text, TouchableOpacity} from "react-native";
import React from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { iconSizes } from "../constants/dimensions";
import { colors } from "../constants/color";
const PlayerShuffleToogle=()=>{
    return(
        <TouchableOpacity>
            <Entypo name="shuffle" 
            size={iconSizes.md} 
            color={colors.iconSecondary} />
        </TouchableOpacity>
    )
}
export default PlayerShuffleToogle;
const styles= StyleSheet.create(
    {

    }
)