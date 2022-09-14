import { StatusBar } from "react-native";
import{
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/home';

import { Background } from "./src/componets/Background";
import { Loading } from "./src/componets/Loading";

export default function App() {
  const [fontsLoaded]=useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  }

  );
  return (
    <Background>
      {/* ajustando a cor da barra de status */}
        <StatusBar
          barStyle="light-content" 
          backgroundColor="transparent"
          translucent
        />
        { fontsLoaded ? <Home /> : <Loading/>}

        
    </Background>
  );
}

