import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthProvider';
import { ExamenesProvider } from './src/context/ExamenesProvider';

export default function App() {
  return (
    <>
      <AuthProvider>
        <ExamenesProvider>
          <StatusBar style='light' />
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </ExamenesProvider>
      </AuthProvider>
    </>
  );
}
