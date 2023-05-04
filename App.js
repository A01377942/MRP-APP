import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import PasswordRestart from './src/pages/PasswordRestart';


export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NativeRouter>
        <Main />
    </NativeRouter>
    </>
  );
}
