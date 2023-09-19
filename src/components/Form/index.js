import React, { useState} from "react";
import { TextInput, View, Text,  Button, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

const [height, setHeight] = useState(null);
const [weight, setWeight]= useState(null);
const [messageImc, setMessageImc] =useState ("Preencha o peso e altura");
const [imc, setImc] =useState (null);
const [textButton, setTextButton]=useState ("Calcular");

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
if (weight != null && height !=null){
    imcCalculator()
    setHeight(null)
    setWeight(null)
    setMessageImc(" Seu Imc é igual a: ")
    setTextButton ("Calcular Novamente")
return
}
setImc(null)
setTextButton("Calcular novamente")
setMessageImc("Preencha o Peso e altura")
}

return(
<View style={styles.formContext}>
<View style={styles.form}>
    <Text style={styles.label}>Altura</Text>
    <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex: 1.90" keyboardType="numeric"/>

    <Text style={styles.label}>Peso</Text>
    <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex: 90" keyboardType="numeric"/>

    <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationImc()}>
    <Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>

</View>
<ResultImc messageResultImc={messageImc} resultImc={imc}/>
</View>
);
}