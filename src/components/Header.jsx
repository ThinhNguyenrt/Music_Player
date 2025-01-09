import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react' 
import { colors } from '../constants/color';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { iconSizes, spacing } from '../constants/dimensions';
const Header=() =>{
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesome5
              name="grip-lines"
              size={iconSizes.md}
              color={colors.iconPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              name="search1"
              size={iconSizes.md}
              color={colors.iconPrimary}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default Header;
const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.md
    }
})