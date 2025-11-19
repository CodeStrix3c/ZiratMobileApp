import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdvisoryScreen from '../screens/AdvisoryScreen';
import AlertsScreen from '../screens/AlertsScreen';
import FinancialYieldScreen from '../screens/FinancialYieldScreen';
import InputResourceScreen from '../screens/InputResourceScreen';
import OrchardScreen from '../screens/OrchardScreen';
import PestDiseaseScreen from '../screens/PestDiseaseScreen';
import SoilWaterScreen from '../screens/SoilWaterScreen';
import WeatherScreen from '../screens/WeatherScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Orchard" component={OrchardScreen} />
            <Stack.Screen name="Weather" component={WeatherScreen} />
            <Stack.Screen name="SoilWater" component={SoilWaterScreen} />
            <Stack.Screen name="PestDisease" component={PestDiseaseScreen} />
            <Stack.Screen name="InputResource" component={InputResourceScreen} />
            <Stack.Screen name="FinancialYield" component={FinancialYieldScreen} />
            <Stack.Screen name="Advisory" component={AdvisoryScreen} />
            <Stack.Screen name="Alerts" component={AlertsScreen} />
        </Stack.Navigator>
    );
}
