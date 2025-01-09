import { StyleSheet, View} from 'react-native'
import React from 'react' 
import { colors } from '../constants/color';
import Header from '../components/Header';
import SongCardWithCategory from '../components/SongCardWithCategory';
import FloatingPlayer from '../components/FloatingPlayer';

const HomeScreen=() =>{
    return (
      <View style={styles.container}>
        <Header/>
        <SongCardWithCategory/>
        <FloatingPlayer/>
      </View>
    );
}
export default HomeScreen;
const styles= StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        flex:1,
    }
})
