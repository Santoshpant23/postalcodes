import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import postalcodes from '../postalcodes.json'

export default function Data() {
    const DATA = postalcodes;
    const handlePress = () => {
        // console.log(data);
    }

    return (

        // <ScrollView>
        //     <View style={styles.data}>
        //         <Text style={styles.items}>Hello dear</Text>
        //         <Button title='Click Me' onPress={handlePress} />
        //         <View>
        //             {
        //                 data.map((element) => {
        //                     return (
        //                         <Text>{element.District}-{element['Post Office']}-{element.PostalCode}</Text>
        //                     )
        //                 })
        //             }
        //         </View>
        //     </View>
        // </ScrollView>

        // <Text style={styles.header}></Text>
        <View>
            <View style={styles.header}>

                <Text style={styles.Head}>District</Text>
                <Text style={styles.Head}>Post Office</Text>
                <Text style={styles.Head}>PostalCode</Text>
            </View>
            <FlatList
                data={DATA}
                style={styles.flat}
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
    data: {

    },
    Head: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',

    },
    items: {
        padding: 10,
    },
    lists: {
        // padding: 20,
        // backgroundColor: 'orange',
        fontWeight: 'bold',
        fontSize: 16,
        // marginVertical: 10,
        display: 'flex',
        justifyContent: 'space-between'
        // marginTop: 20

    },
    header: {
        // position: 'fixed',
        // width: '100%',
        padding: 20,
        // zIndex: 2,

        backgroundColor: 'black',

        marginTop: 80,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        // alignItems: '',
        width: '100%',



    },
    flat: {
        // marginTop: 150
    },
    table: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        // alignItems: '',
        width: '100%',
        padding: 20,
        backgroundColor: 'orange',

        marginVertical: 10,

    }

})
