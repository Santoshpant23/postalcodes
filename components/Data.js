import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native'
import postalcodes from '../postalcodes.json'

export default function Data() {
    const DATA = postalcodes;
    // const [search, setsearch] = useState('')
    const handlePress = () => {

    }

    return (

        <View>
            <TextInput
                style={styles.TextInput}
                // value={search}
                placeholder="Search Here"
            // underlineColorAndroid="transparent"
            />
            <View style={styles.header}>
                <Text style={styles.Head}>District</Text>
                <Text style={styles.Head}>Post Office</Text>
                <Text style={styles.Head}>PostalCode</Text>
            </View>
            <FlatList
                data={DATA}

                renderItem={({ item }) => (
                    <View style={styles.table}>

                        <Text style={styles.lists}> {item.District}        </Text>
                        <Text style={styles.lists}> {item['Post Office']}  </Text>
                        <Text style={styles.lists}> {item.PostalCode}</Text>
                    </View>
                )}
            />
        </View>

    )
}
const styles = StyleSheet.create({

    Head: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',

    },

    lists: {

        fontWeight: 'bold',
        fontSize: 16,

        display: 'flex',
        justifyContent: 'space-between'


    },
    header: {

        padding: 20,


        backgroundColor: 'black',

        marginTop: 80,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',

        width: '100%',



    },

    table: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',

        width: '100%',
        padding: 20,
        backgroundColor: 'orange',

        marginVertical: 10,

    },
    TextInput: {
        height: 50,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        backgroundColor: 'white',
        // marginTop: 80,
        borderColor: '#009688'

    }

})
