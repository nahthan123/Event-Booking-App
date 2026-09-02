import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AuthNavigator from './src/navigators/AuthNavigator';
import { SplashScreens } from './src/screens';

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

useEffect(() => {
  const timeout = setTimeout(() => {
    setIsShowSplash(false);
  }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (isShowSplash) {
    return <SplashScreens />;
  }

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
