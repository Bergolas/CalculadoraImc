import React, { useState} from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

const [height, setHeight] = useState(null);
const [weight, setWeight]= useState(null);
const [messageImc, setMessageImc] =useState ("Preencha o peso e altura");
const [imc, setImc]=useState (null);
const [messagedata, setMessagedata] =useState (null); 
const [textButton, setTextButton]=useState ("Calcular");
const [errormessage, setErrorMessage]=useState(null);

function imcCalculator(){
    return (weight/(height*height)).toFixed(2)
}


    function verificationImc(){
            setErrorMessage("Campo obrigatorio")
            Vibration.vibrate()
    }

function validationImc(){
if (weight != null && height !=null){
    const data = imcCalculator()
    setImc(imcCalculator())
    setHeight(null)
    setWeight(null)
    setMessageImc(" Seu Imc é igual a: ")
    setTextButton ("Calcular Novamente")
    if(data < 18.5){
        setMessagedata("abaixo do peso")
    }
    else if(data < 24.9 && data >= 18.6){
        setMessagedata("peso ideal")
    }
    else if(data < 29.9 && data >= 25.0){
        setMessagedata("levemente acima do peso")
    }
    else if(data > 25.0){
        setMessagedata("obesidade")
    }
    setErrorMessage(null)
    return
}
    setImc(null)
    setTextButton("Calcular novamente")
    setMessageImc("Preencha o Peso e altura para calcular")
    setMessagedata(null)
    verificationImc()
}

return(
<View style={styles.formContext}>
<View style={styles.form}>
    <Text style={styles.label}>Altura</Text>
    <Text style={styles.errormessage}>{errormessage}</Text>
    <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex: 1.90" keyboardType="numeric"/>

    <Text style={styles.label}>Peso</Text>
    <Text style={styles.errormessage}>{errormessage}</Text>
    <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex: 90" keyboardType="numeric"/>

    <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationImc()}>
    <Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>

</View>
<ResultImc messageResultImc={messageImc} resultImc={imc} dataImc={messagedata}/>
</View>
);
}