import {StyleSheet } from "react-native";


const styles = StyleSheet.create({
    formContext:{
        width: "100%",
        height: "auto",
        bottom: 0,
        backgroundColor: "#2d3000",
        alignItems: "center",
        borderTopLeftRadius: 30,    
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginTop: 10,
    },

    form:{
        width: "auto",
        height: "auto",
        marginTop: 20,
        padding: 20,
    },

    label:{
        color:"#fff",
        fontSize: 18 ,
        paddingLeft: 20,
    },

    input:{
        width: "auto",
        borderRadius: 20,
        backgroundColor: "#cd8d00",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffb210",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    }


})

export default styles