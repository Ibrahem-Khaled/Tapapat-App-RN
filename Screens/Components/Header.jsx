import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Foundation } from '@expo/vector-icons';

const Header = ({ name }) => {
    return (
        <View style={styles.main}>
            <AntDesign name="customerservice" size={28} color="tomato" />
            <Text style={styles.txt}>{name}</Text>
            <Foundation name="list" size={28} color="tomato" />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 18
    },
})