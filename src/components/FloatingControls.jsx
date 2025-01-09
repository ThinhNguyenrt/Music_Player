import { TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { iconSizes } from "../constants/dimensions";
import { colors } from '../constants/color';
export const GoBackButton=()=>{
    return(
        <TouchableOpacity>
            <AntDesign name="stepbackward" 
            size={iconSizes.md} 
            color={colors.iconPrimary}
            />
        </TouchableOpacity>
    );
}
export const PlayButton=()=>{
    return(
        <TouchableOpacity>
            <Feather name="pause" 
            size={iconSizes.md} 
            color={colors.iconPrimary} />
        </TouchableOpacity>
    );
}

export const GoForwardButton=()=>{
    return(
        <TouchableOpacity>
            <AntDesign name="forward" 
            size={iconSizes.md} 
            color={colors.iconPrimary}
            />
        </TouchableOpacity>
    );
}