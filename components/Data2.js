import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native'
import postalcodes from '../postalcodes.json'

export default function DataT() {
    const [search, setsearch] = useState('')
    const [filterData, setfilterData] = useState([])
    const [masterData, setmasterData] = useState([])

    useEffect(() => {
        fetchPosts()
        return () => {

        }
    }, [])

    const DATA = postalcodes;
    const fetchPosts = () => {
        setfilterData(DATA)
        setmasterData(DATA)
    }
    const ItemView = ({ item }) => {
        return (
            <View style={styles.table}>

                <Text style={styles.lists}> {item.District.toUpperCase()}        </Text>
                <Text style={styles.lists}> {item.PostOffice.toUpperCase()}  </Text>
                <Text style={styles.lists}> {item.PostalCode}</Text>
            </View>
        )
    }
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.District ? item.District.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            });
            setfilterData(newData);
            setsearch(text);
        }
        else if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.District ? item.District.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            });
            setfilterData(newData);
            setsearch(text);
        }
        else {
            setfilterData(masterData)
            setsearch(text)
        }
    }
    const ItemSeparatorView = () => {
        return (
            <View
                style={{ height: '0.5', width: '100%', backgroundColor: 'yellow' }}
            />
        )
    }

    return (

        <View>
            <View style={styles.header}>
                <Text style={styles.Head}>District</Text>
                <Text style={styles.Head}>Post Office</Text>
                <Text style={styles.Head}>PostalCode</Text>
            </View>
            <TextInput
                style={styles.TextInput}
                value={search}
                placeholder="Search District Here"
                underlineColorAndroid="transparent"
                onChangeText={(text) => searchFilter(text)}
            />

            <FlatList
                data={filterData}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
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

    },
    itemstyle: {
        padding: 10
    }

})
