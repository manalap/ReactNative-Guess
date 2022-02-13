import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = props => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>
            {props.title}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 10,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',

    }
});

export default Header;
