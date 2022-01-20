import React, { useState } from 'react'
import {KeyboardAvoidingView, TextInput, TouchableOpacity, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import styles from '../styles/taskinputfield'

const TaskInputField = (props) => {
    const[task, setTask] = useState()

    const handleAddTask = value => {
        props.addTask(value)
        setTask(null)
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <TextInput style={styles.inputField} value={task} placeholder='Escreva uma tarefa'
                onChangeText={text => setTask(text)}
                onChangeTextColor={'#fff'}
            />
            <TouchableOpacity onPress={() => handleAddTask(task)}>
                <View style={styles.button}>
                    <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
                </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}
export default TaskInputField