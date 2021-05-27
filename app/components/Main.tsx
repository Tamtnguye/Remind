import React, {useCallback, useState} from 'react';
import { StyleSheet, 
    Text, 
    View,
    TextInput , //to allow text input
    TouchableOpacity, //wrapper for making views respond properly to touches
    ScrollView,//a view group that is used to make vertically scrollable views 
} from 'react-native';
import Note from "./Notes";

 const Main = () => {

    // default for the notes is an empty array
    const [notes, setNotes] = useState([]);
    // default for user input is an empty string
    const [inputVal, setInputVal] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}> - Remind To Do's</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <Note />

            </ScrollView>
            <View style={styles.footer}>
            <TextInput 
            onChangeText={(userInput) => setInputVal(userInput)}  //event that will pull value from user input
            style={styles.textInput}
            placeholder="> add something ..."
            placeholderTextColor="#eee"
            underlineColorAndroid="transparent">

            </TextInput>
        </View>
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        </View>
        
    );
 };

 //instead of using css we use the stylesheet class to create css 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
     header: {
         backgroundColor: '#3d3d3d',
         alignItems: 'center',
         justifyContent: 'center',
         borderBottomWidth: 10,
         borderBottomColor: '#ddd',
         paddingTop: 20,
     },
     headerText: {
         color: '#FFD700',
         fontSize: 36,
         padding: 26,
         fontWeight: "500",
     },
     scrollContainer: {
         flex: 1,
         marginBottom: 100,
     },
     footer: {
         position: 'absolute',
         bottom: 0,
         left: 0,
         right: 0,
         zIndex: 10,
     },
     textInput: {
         alignSelf: 'stretch',
         color: '#FFD700',
         padding: 20,
         backgroundColor: '#252525',
         borderTopWidth: 2,
         borderTopColor: '#ededed',
         fontSize: 32,
     },
     addButton: {
         position: 'absolute',
         zIndex: 11,
         right: 20,
         bottom: 100,
         backgroundColor: '#3d3d3d',
         width: 80,
         height: 80,
         borderRadius: 50,
         alignItems: 'center',
         justifyContent: 'center',
         elevation: 8,
     },
     addButtonText: {
         color: '#FFD700',
         fontSize: 26,
         fontWeight: "700",
     }
 });

 export default Main;
 