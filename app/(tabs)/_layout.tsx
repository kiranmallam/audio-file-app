import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs
     screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2bb2e9',
        tabBarInactiveTintColor: '#888888'
      }}
    >
      <Tabs.Screen
        name="audio/index"
        options={{
          title: 'Audio',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="music" color={color} />,
        }}
      />
      <Tabs.Screen
        name="files/index"
        options={{
          title: 'Files',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="upload" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default Layout;
