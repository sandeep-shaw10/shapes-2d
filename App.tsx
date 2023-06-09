import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import CircleScreen from './src/pages/shapes/Circle'
import TriangleScreen from './src/pages/shapes/Triangle';
import SquareScreen from './src/pages/shapes/Square';
import ReactangleScreen from './src/pages/shapes/Rectangle';
import TrapeziumScreen from './src/pages/shapes/Trapezium';
import NgonScreen from './src/pages/shapes/Ngon';
import RhombusScreen from './src/pages/shapes/Rhombus';
import ParallelogramScreen from './src/pages/shapes/Parallelogram';



function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Shape Calculator 2D', 
            headerStyle: {
              backgroundColor: '#082f49',
            }, 
            headerTintColor: '#bae6fd'
          }} 
        />
        <Stack.Screen name="circle" component={CircleScreen} options={{ title: 'Circle' }} />
        <Stack.Screen name="triangle" component={TriangleScreen} options={{ title: 'Triangle' }} />
        <Stack.Screen name="square" component={SquareScreen} options={{ title: 'Square' }} />
        <Stack.Screen name="rectangle" component={ReactangleScreen} options={{ title: 'Rectangle' }} />
        <Stack.Screen name="trapezium" component={TrapeziumScreen} options={{ title: 'Trapezium' }} />
        <Stack.Screen name="ngon" component={NgonScreen} options={{ title: 'Regular N-gon' }} />
        <Stack.Screen name="rhombus" component={RhombusScreen} options={{ title: 'Rhombus' }} />
        <Stack.Screen name="parallelogram" component={ParallelogramScreen} options={{ title: 'Parallelogram' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;