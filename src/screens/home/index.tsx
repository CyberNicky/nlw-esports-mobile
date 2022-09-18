
import { View, Image, FlatList } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../componets/Heading';
import { GameCard, GameCardProps } from '../../componets/GameCard';
import { GAMES } from '../../utils/games';
import { useEffect, useState } from 'react';
import { SafeAreaView } from '@react-native-safe-area-context';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

    useEffect(() =>{
      fetch('http://192.168.43.8:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
    }, []);
  return (
    <View style={styles.container}>
      <Image 
      source={logoImg}
      style={styles.logo}
      
      />
      <Heading 
      title='Encontre seu duo!'
      subtitle='Selecione o game que deseja jogar...'
      />
      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item})=> (
      
      <GameCard
      data= {item}
      />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        />
    </View>
  );
}