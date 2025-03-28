import React, { useState } from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native"
import { TextInput } from "react-native-paper";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const SampleLogin = ({ navigation }: any) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [buttonOpacity, setButtonOpacity] = useState(1);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            {/* top */}
            <View style={styles.topDesign}>
                <Text style={styles.welcomeText}>ASSET MANAGEMENT</Text>
                <Text style={styles.headline}>Your Headline Name</Text>
                <Text style={styles.description}>
                    somethinh
                </Text>
            </View>
            {/* bottom */}
            <View style={styles.bottomDesign}>
                {/* <View style={styles.inputContainer}>
                    {username === '' && <FontAwesomeIcon icon={faUser} style={styles.icon} />}
                    <TextInput style={styles.input} placeholder="Username" placeholderTextColor="gray" value={username}
                        onChangeText={setUsername}></TextInput>
                </View> */}
                <View style={styles.passContainer}>
                    {password === '' && <FontAwesomeIcon icon={faLock} style={styles.icon} />}
                    <TextInput style={styles.password} placeholder="Password"
                        secureTextEntry={!passwordVisible}

                        placeholderTextColor="gray"
                        value={password}
                        onChangeText={setPassword}></TextInput>
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <FontAwesomeIcon
                            icon={passwordVisible ? faEye : faEyeSlash} style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <TextInput
                    label="User Name"
                    mode="outlined"

                    value={username}
                    onChangeText={setUsername}
                //   style={styles.input}
                />
                <TouchableOpacity style={[styles.buttonContainer, { opacity: buttonOpacity }]} onPressIn={() => setButtonOpacity(0.5)} onPressOut={() => setButtonOpacity(1)}>
                    <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: "row",
        //justifyContent: "center",
        //alignItems: "center",
        backgroundColor: "yellow",
        padding: 20,
    },
    topDesign: {
        flex: 1,
        padding: 20,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
    },
    headline: {
        fontSize: 18,
        color: "white",
        marginTop: 5,
    },
    description: {
        fontSize: 14,
        color: "white",
        marginTop: 10,
    },
    bottomDesign: {
        flex: 1,
        padding: 20,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "lightgray",
        margin: 10,
        padding: 3,
        paddingLeft: 10,
        width: "90%",
    },
    // input: {
    //     //margin: 15,
    //     padding: 15,
    //     width: "95%",
    //     backgroundColor: "lightgray",

    // },
    passContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightgray",
        margin: 10,
        padding: 3,
        paddingHorizontal: 10,
        width: "90%",
    },
    password: {
        //margin: 15,
        padding: 15,
        width: "90%",
        backgroundColor: "lightgray",
    },
    icon: {
        color: "gray",
    },

    //button
    buttonContainer: {
        backgroundColor: "gray",
        borderWidth: 1,
        borderBlockColor: "black",
        borderRadius: 5,
        padding: 15,
        margin: 25,
        width: "70%",
        elevation: 3,

    },
    btnText: {
        fontSize: 16,
        textAlign: "center",
        color: "white",
    }
})
export default SampleLogin;