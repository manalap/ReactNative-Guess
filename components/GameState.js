import React, {useState, useRef,useEffect} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';


const generateRandom = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max-min)) + min;
    if (rndNumber === exclude) {
        return generateRandom(min,max,exclude);
    }
    return rndNumber;
}



const GameState = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandom(1,100,props.userChoice))
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if(currentGuess === props.userChoice){
           onGameOver(rounds);
        }
    },[currentGuess,userChoice,onGameOver]);


    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.userChoice ) || (direction === 'upper' && currentGuess > props.userChoice)) {
            Alert.alert('You make mistake','Is is wrong....',[{text: 'sorry', style: 'cancel'}])
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandom(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Text>{currentGuess}</Text>
            <View style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')} color="skyblue" />
                <Button title="UPPER" onPress={nextGuessHandler.bind(this, 'upper')} color="skyblue"/>
            </View>
        </View>
        );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 200,
        maxWidth: '80%',

    }

})


export default GameState;
