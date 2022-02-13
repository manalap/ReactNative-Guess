import React, { Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const GameOver = props => {
    return (
      <View style={styles.screen}>
          <Text>The game is over!</Text>
          <Button title="New Game" onPress={props.onRestart} />
      </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }
});

export default GameOver;
