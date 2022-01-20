import React, { useState } from 'react'
import { View, Text, Keyboard, ScrollView } from "react-native"
import TaskInputField from './src/components/TaskInputField'
import TaskItem from './src/components/TaskItem'
import styles from './src/styles/app'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = task => {
    if (task == null) return
    setTasks([...tasks, task])
    Keyboard.dismiss()
  }

  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index != deleteIndex))
  }

  return (
    <View style={styles.container} >
      <Text style={styles.title}>Lista de Tarefas</Text>
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task, index) => {
            return(
              <View key={index + 1}>
                <TaskItem index={index + 1} task={task}
                  deleteTask={() => deleteTask(index)}
                />
              </View>
            )
          })
        }
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  )
}

export default App