<<<<<<< HEAD
import React from "react";
import { View, Text} from "react-native";
import styles from "./style";

export default function Resultimc(props){
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <Text style={styles.information}>{props.dataImc}</Text>
        </View>
    );
=======
import React from "react";
import { View, Text} from "react-native";
import styles from "./style";

export default function Resultimc(props){
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <Text style={styles.information}>{props.dataImc}</Text>
        </View>
    );
>>>>>>> 8d7378447f681799f1a9435248be48d631b9f96f
}