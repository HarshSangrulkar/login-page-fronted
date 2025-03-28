import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient';
//import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { Image } from "react-native";
const topImage = require("../assets/imageTop.jpg")
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
        <LinearGradient colors={['white', '#dcf7f6']} style={styles.container}>
            {/* top */}
            <View style={styles.topDesign}>
                <Image source={topImage} style={styles.imageStyle}></Image>
            </View>
            {/* bottom */}
            <View style={styles.bottomDesign}>
                <Text style={styles.signInText}>Sign in</Text>
                <Text style={styles.signInSubText}>Please login to continue using our app</Text>
                <TextInput
                    label="User Name"
                    mode="outlined"
                    left={<TextInput.Icon icon="account" />}
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                    theme={{
                        roundness: 35,
                        colors: {
                            primary: "#6a0dad", // Purple for outline and focus
                            text: "#6a0dad", // Purple text
                            placeholder: "#6a0dad", // Lighter purple for placeholder
                        },
                    }}
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
                    theme={{
                        roundness: 35,
                        colors: {
                            primary: "#6a0dad", // Purple for outline and focus
                            text: "#6a0dad", // Purple text
                            placeholder: "#a88fbf", // Lighter purple for placeholder
                        },
                    }}
                />
                <TouchableOpacity style={[styles.buttonContainer, { opacity: buttonOpacity }]} onPressIn={() => setButtonOpacity(0.5)} onPressOut={() => setButtonOpacity(1)} onPress={goToDashboard}>
                    <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.signupContainer}>
                    <Text style={styles.signUnSubText}>Dont have an account? </Text>
                    <TouchableOpacity><Text>Sign Up</Text></TouchableOpacity>
                </View>

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
        backgroundColor: "white",
    },
    topDesign: {
        flex: 1,
        //backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
    },
    imageStyle: {
        width: 400,
        height: 500,
        resizeMode: "contain",
        marginTop: 120,
        marginLeft: 10,
    },

    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        //textShadowColor: "black",
        marginTop: 90,
        //fontFamily: "Calibri"
        textShadowColor: "black",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 15,
    },
    bottomDesign: {
        flex: 2,
        justifyContent: "flex-start",
        //alignItems: "center",
        //backgroundColor: "#e6e6e6",
        borderRadius: 40,
        padding: 15,
        marginTop: 35,
    },
    signInText: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 20,
        textAlign: "center",
        color: "black"
    },
    signInSubText: {
        fontSize: 14,
        //fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "gray"
    },
    input: {
        marginBottom: 15,
        height: 70,
        //backgroundColor: "lightgray",
        fontSize: 22,
        //borderRadius: 50,
        //overflow: 'hidden',
        zIndex: 2

    },
    buttonContainer: {
        backgroundColor: "#4a18a1",
        //backgroundColor: "#f6fa0f",
        paddingVertical: 10,
        marginTop: "auto",
        borderRadius: 25,
        //width: "70%",
        //alignSelf: "center",
        elevation: 3,
        zIndex: 2,

    },
    btnText: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    signupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    signUnSubText: {
        fontSize: 14,
        //fontWeight: "bold",
        textAlign: "center",
        color: "gray"
    },

})
export default LoginPage