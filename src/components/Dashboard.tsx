import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = ({ navigation }: any) => {
    const [buttonOpacity, setButtonOpacity] = useState(1);
    const [buttonOpacity1, setButtonOpacity1] = useState(1);
    const [buttonOpacity2, setButtonOpacity2] = useState(1);
    const [buttonOpacity3, setButtonOpacity3] = useState(1);
    // const goToLogin = () => {
    //     navigation.replace("LoginPage");
    // }
    return (
        <LinearGradient colors={['#f5663b', '#bd068c', '#f5663b']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.container}>
            <Text style={styles.title}>Asset Management System</Text>
            <TouchableOpacity style={[styles.round, { opacity: buttonOpacity1 }]} onPressIn={() => setButtonOpacity1(0.5)} onPressOut={() => setButtonOpacity1(1)}>
                <Icon name="clipboard-check-outline" size={40} color="black" />
                <Text style={styles.roundTxt}>Assign/Surrender</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.round, { opacity: buttonOpacity2 }]} onPressIn={() => setButtonOpacity2(0.5)} onPressOut={() => setButtonOpacity2(1)}>
                <Icon name="barcode-scan" size={40} color="black" />
                <Text style={styles.roundTxt}>Asset Verification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.round, { opacity: buttonOpacity3 }]} onPressIn={() => setButtonOpacity3(0.5)} onPressOut={() => setButtonOpacity3(1)}>
                <Icon name="account-circle-outline" size={40} color="black" />
                <Text style={styles.roundTxt}>Profile</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={[styles.buttonContainer, { opacity: buttonOpacity }]} onPressIn={() => setButtonOpacity(0.5)} onPressOut={() => setButtonOpacity(1)} onPress={goToLogin}>
                <Text style={styles.btnText}>LOGIN</Text>
            </TouchableOpacity> */}
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue"
    },
    title: {
        fontSize: 36,
        textAlign: "center",
        //fontStyle: "italic",
        fontWeight: "bold",
        marginBottom: 50,
        color: "white"
        //marginTop: 150,
        //color: "white"
    },
    round: {
        borderRadius: 60,
        backgroundColor: "lightgray",
        padding: 10,
        margin: 10,
        width: 120,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
    },
    roundTxt: {
        textAlign: "center",
        fontSize: 12,
        color: "black",
        fontWeight: "bold",
    },
    buttonContainer: {
        backgroundColor: "blue",
        padding: 10,
        margin: 10,
        elevation: 5,

    },
    btnText: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    }
})

export default Dashboard;