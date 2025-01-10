import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";
import LikeScreen from "./src/screen/LikeScreen";
const Stack = createNativeStackNavigator();
const App = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions=
            {{headerShown:false}
            }
            initialRouteName="LIKE-SCREEN">
                <Stack.Screen name="HOME-SCREEN" component={HomeScreen}/>
                <Stack.Screen name="LIKE-SCREEN" component={LikeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;