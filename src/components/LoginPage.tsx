import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient';
const LoginPage = ({ navigation }: any) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    //const [passwordVisible, setPasswordVisible] = useState(false);
    const [buttonOpacity, setButtonOpacity] = useState(1);

    const goToDashboard = () => {
        navigation.navigate("Dashboard");
        setUsername("");
        setPassword("");
        setShowPassword(false);
    }
    return (
        <LinearGradient colors={['#f5663b', '#bd068c', '#f5663b']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.container}>
            {/* top */}
            <View style={styles.topDesign}>
                <View style={[styles.bubble, styles.bubble1]} />
                <View style={[styles.bubble, styles.bubble2]} />
                <View style={[styles.bubble, styles.bubble3]} />
                <Text style={styles.title}>Asset Management System</Text>
            </View>
            {/* bottom */}
            <View style={styles.bottomDesign}>
                <Text style={styles.signInText}>Welcome</Text>
                <TextInput
                    label="User Name"
                    mode="outlined"
                    left={<TextInput.Icon icon="account" />}
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />

                <TextInput
                    label="Password"
                    mode="outlined"
                    secureTextEntry={!showPassword}
                    left={<TextInput.Icon icon="lock" />}
                    right={
                        <TextInput.Icon
                            icon={showPassword ? "eye" : "eye-off"}
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    }
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <TouchableOpacity style={[styles.buttonContainer, { opacity: buttonOpacity }]} onPressIn={() => setButtonOpacity(0.5)} onPressOut={() => setButtonOpacity(1)} onPress={goToDashboard}>
                    <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={[styles.bubble, styles.bubble4]} />
                <View style={[styles.bubble, styles.bubble5]} />
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        //alignItems: "center",
        padding: 20,
        backgroundColor: "#de35b1",
    },
    topDesign: {
        flex: 1,
        //backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
    },
    bubble: {
        position: 'absolute',
        backgroundColor: 'beige',
        opacity: 0.6,
        zIndex: 0,
        //elevation: 10,
    },
    bubble1: {
        width: 150,
        height: 150,
        borderRadius: 75,
        top: 80,
        left: -40,
    },
    bubble2: {
        width: 150,
        height: 150,
        borderRadius: 75,
        top: 170,
        right: -70,
    },
    bubble3: {
        width: 300,
        height: 300,
        borderRadius: 150,
        top: -50,
        left: 80,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        textShadowColor: "black"
        //fontFamily: "Calibri"
    },
    bottomDesign: {
        flex: 2,
        justifyContent: "center",
        //alignItems: "center",
        //backgroundColor: "#e6e6e6",
        borderRadius: 40,
        padding: 15,
        marginBottom: 30,
    },
    signInText: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "white"
    },
    input: {
        marginBottom: 15,
        backgroundColor: "lightgray",
        fontSize: 22,

    },
    buttonContainer: {
        backgroundColor: "blue",
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 10,
        //width: "70%",
        elevation: 3,
        zIndex: 2,

    },
    btnText: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    bubble4: {
        width: 150,
        height: 150,
        borderRadius: 75,
        top: 270,
        right: -70,
    },
    bubble5: {
        width: 300,
        height: 300,
        borderRadius: 150,
        top: 350,
        left: -100,
    },
})
export default LoginPage