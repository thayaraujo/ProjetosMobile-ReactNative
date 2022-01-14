import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    
    const [number, setNumber] = useState(0);

    function handleNumber() {
        //Math.floor arredonda o número. 
        // Math.random gera número decimal, por isso foi feito * 10, para trazer as casas para frente
        const new_number = Math.floor(Math.random() * 10)

        setNumber(number + new_number)
    };

    return (
            <SafeAreaView style={style.container}>
                <Text style={style.number}>{number}</Text>
                <TouchableOpacity onPress={handleNumber} style={style.button}>
                    <Text style={style.buttonText}>Gerar números aleatórios</Text>
                </TouchableOpacity>
            </SafeAreaView>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ADD8E6',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 38,
        color: '#000000',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#BC8F8F',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default App;