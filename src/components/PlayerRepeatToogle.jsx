import {StyleSheet, View,Text, TouchableOpacity} from "react-native";
import React from "react";
import Feather from '@expo/vector-icons/Feather';
import { iconSizes } from "../constants/dimensions";
import { colors } from "../constants/color";
const PlayerRepeatToogle= ()=>{
    return(
        <TouchableOpacity>
            <Feather name="repeat" 
            size={iconSizes.md} 
            color={colors.iconSecondary} />
        </TouchableOpacity>
    );
}
export default PlayerRepeatToogle;
const styles= StyleSheet.create(
    {

    }
)