import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import Navigation from './src/pages/Navigation';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Main />
    </>
  );
}
