
import React ,{useState} from 'react';
import Header from './components/Header';
import StartGame from "./components/StartGame";
import GameState from "./components/GameState";
import GameOver from "./components/GameOver";

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content = <StartGame onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0 ) {
    content = <GameState userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if (guessRounds > 0) {
    content = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onRestart={newGameHandler} />
  }
    return (
    <View style={styles.screen}>
      <Header title="Guess Number"/>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

  }
});

export default App;
