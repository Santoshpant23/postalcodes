import React from 'react'
import { StyleSheet, Text, View } from 'react-native';



export default function Header() {
    return (
        <View style={styles.header} >
            <Text style={styles.text}>
                Postal Codes
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        height: 80,
        paddingTop: 35
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    }
})

