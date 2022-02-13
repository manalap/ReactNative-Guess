import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import Input from './Input';


const StartGame = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setConfirmed(false);
        setEnteredValue('');

    }

    const confirmedInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!','Number must be between 1 and 99.',
                [{text:'Ok',style:"destructive",onPress:resetInputHandler}]);
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput = <Text style={{fontSize:24, backgroundColor:'white',borderColor:'red',
            borderWidth:2,padding:10,borderRadius:10,marginVertical:10,alignItems:'center',
            justifyContent: 'center'}}>{selectedNumber}</Text>
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>

            <View style={styles.textInput}>
                <Text>Select a number:</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false}
                  keyboardType="numeric" maxLength={2} onChangeText={numberInputHandler} value={enteredValue} />
                <View style={styles.buttonText}>
                <Button title="Reset" onPress={resetInputHandler} color='skyblue'/>
                <Button title="Confirm" onPress={confirmedInputHandler} color='skyblue' />
                </View>
            </View>
            <View style={{marginTop:40,backgroundColor:'white'
                ,padding:10,borderRadius:10,alignItems:'center',
                justifyContent:'center'}}>

               {confirmedOutput}
            <Button title="Start" onPress={() => props.onStartGame(selectedNumber)} color='skyblue' />
            </View>
        </View>

        </TouchableWithoutFeedback>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    textInput: {
        width: '80%',
        maxWidth: '90%',
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        marginVertical: 20,
    },
    buttonText:{
        flexDirection: 'row',
        justifyContent:'center',
        width: '100%',
        paddingHorizontal: 10,

    },
    input: {
        width: '50%',
        height: 40,
        textAlign: 'center',
        marginVertical: 10,
        borderWidth: 1,

    }
});

export default StartGame;
