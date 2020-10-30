import React,{useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import api from './services/api'

export default function App (){
    const [projects, setProjects] = useState([]);

    useEffect(() =>{
        api.get('projects').then(res => {
            setProjects(res.data);
        })
    }, [])

    async function handleAddProject(){
        const res = await api.post('projects',{
            title: `Novo Projeto ${Date.now()}`,
            owner: 'Ricardo Naga.'
        })

        const project = res.data
        setProjects([...projects, project])
    }
    

    return (
        <>
        <StatusBar barStyle='light-content' backgroundColor='#7159C1'/>

        <SafeAreaView style={styles.container} >

        <FlatList data={projects}
        keyExtractor={project => project.id}
        renderItem={({item}) => (
            <Text style={styles.project}>{item.title}</Text>
        )}
        />

        <TouchableOpacity 
        activeOpacity={0.6} 
        style={styles.button}
        onPress={handleAddProject}>
            <Text style={styles.buttonText}> Adicionar Projeto </Text>
        </TouchableOpacity>

        </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159C1',
    },
    project:{
        color:'#FFF',
        fontSize: 20,
    },
    button:{
        margin: 20,
        backgroundColor: '#FFF',
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 16,

    },
})