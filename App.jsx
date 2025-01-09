import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";
const Stack = createNativeStackNavigator();
const App = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions=
            {{headerShown:false}
            }>
                <Stack.Screen name="HOME-SCREEN" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;