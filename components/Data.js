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

            <Text style={styles.header}>  District  Post Office  PostalCode</Text>
            <FlatList
                data={DATA}
                style={styles.flat}
                renderItem={({ item }) => (
                    <View>

                        <Text style={styles.lists}>  {item.District}  {item['Post Office']}  {item.PostalCode}</Text>
                    </View>
                )}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    data: {

    },
    items: {
        padding: 10,
    },
    lists: {
        padding: 20,
        backgroundColor: 'orange',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 10,
        marginTop: 20

    },
    header: {
        position: 'fixed',
        width: '100%',
        padding: 20,
        zIndex: 2,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 80


    },
    flat: {
        marginTop: 150
    }

})
