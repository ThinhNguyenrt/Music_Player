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
    const isPlaying= true;
    return(
        <TouchableOpacity>
            <Feather name={isPlaying ? "pause": "play"} 
            size={iconSizes.md} 
            color={colors.iconPrimary} />
        </TouchableOpacity>
    );
}

export const GoForwardButton=()=>{
    return(
        <TouchableOpacity>
            <AntDesign name="stepforward" 
            size={iconSizes.md} 
            color={colors.iconPrimary}
            />
        </TouchableOpacity>
    );
}