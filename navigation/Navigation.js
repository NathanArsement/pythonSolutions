import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ThirdScreen from '../screens/ThirdScreen';
import SecondScreen from '../screens/SecondScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Problems" component={SecondScreen} />
        <Stack.Screen name="Solutions" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;