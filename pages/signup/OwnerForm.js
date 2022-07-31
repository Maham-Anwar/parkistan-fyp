import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import {
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  BalooBhai2_700Bold,
  BalooBhai2_800ExtraBold,
} from "@expo-google-fonts/baloo-bhai-2";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as DocumentPicker from "expo-document-picker";
import { useOwnerSignup } from "../../hooks/useOwnerSignup";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";

export default function Signup({ navigation }) {
  const [fontsLoaded] = useFonts({
    BalooBhai2_400Regular,
    BalooBhai2_500Medium,
    BalooBhai2_600SemiBold,
    BalooBhai2_700Bold,
    BalooBhai2_800ExtraBold,
  });

  const [name, setName] = useState("");
  const [contactNum, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [spaceDesc, setSpaceDesc] = useState("");
  const [nameOfLoc, setNameOfLoc] = useState("");
  const [location, setLocation] = useState("");
  const [mainArea, setMainArea] = useState("");

  const { signup, error, isPending } = useOwnerSignup();

  // var docUri;
  let docUri, docName, docSize, docType;

  const handleCreateAccount = (e) => {
    e.preventDefault();
    //console.log("Name: ",name,"\nContact No: ",contactNum,"\nEmail Address: ",email,"\nCNIC #: ",cnic,"\nPassword: ",password,"\nConfirm Password: ",confirmPassword,"\nSpace Description: ",spaceDesc,"\nUploaded document Data: ",{docName,docSize,docType,docUri})

    console.log(nameOfLoc);
    signup(email, password, name, cnic, contactNum, mainArea, nameOfLoc);
    if (!error) {
      // setEmail("");
      // setPassword("");
      // setName("");
      // setConfirmPassword("");
      // setCnic("");
      // setContact("");
    }
  };

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    (docUri = result.uri),
      (docName = result.name),
      (docSize = result.size),
      (docType = result.mimeType);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.LRHeading}>REGISTRATION</Text>
      </View>

      <View style={{ overflow: "hidden", paddingBottom: 5 }}>
        <View style={styles.AccChoicesParent}>
          <Text
            onPress={() => {
              navigation.navigate("UserSignUpScreen");
            }}
            style={styles.AccChoices}
          >
            User
          </Text>
          <Text style={styles.Active}>Owner</Text>
          <Text style={styles.userUnderline}>_______________</Text>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        {/* Name */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.TextInput}
            maxLength={50}
            onChangeText={(value) => setName(value)}
            value={name}
            placeholder="Name"
            placeholderTextColor="#033205"
            autoCapitalize="words"
            autoCorrect={false}
          ></TextInput>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(24, 27, 36, 0.6)",
            }}
          ></View>
        </View>

        {/* contactNum */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.TextInput}
            maxLength={11}
            onChangeText={(value) => setContact(value)}
            value={contactNum}
            placeholder="Contact Number"
            placeholderTextColor="#033205"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
          ></TextInput>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(24, 27, 36, 0.6)",
            }}
          ></View>
        </View>

        {/* Email Address */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.TextInput}
            maxLength={30}
            onChangeText={(value) => setEmail(value)}
            value={email}
            placeholder="Email Address"
            placeholderTextColor="#033205"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          ></TextInput>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(24, 27, 36, 0.6)",
            }}
          ></View>
        </View>

        {/* CNIC */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.TextInput}
            maxLength={15}
            onChangeText={(value) => setCnic(value)}
            value={cnic}
            placeholder="CNIC #"
            placeholderTextColor="#033205"
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(24, 27, 36, 0.6)",
            }}
          ></View>
        </View>

        {/* password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(value) => setPassword(value)}
            value={password}
            placeholder="Password"
            placeholderTextColor="#033205"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          ></TextInput>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(24, 27, 36, 0.6)",
            }}
          ></View>
        </View>

        {/* confirm password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(value) => setConfirmPassword(value)}
            value={confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="#033205"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          ></TextInput>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(24, 27, 36, 0.6)",
            }}
          ></View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.TextInput}
            maxLength={30}
            onChangeText={(value) => setMainArea(value)}
            value={mainArea}
            placeholder="Enter Your Location"
            placeholderTextColor="#033205"
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(24, 27, 36, 0.6)",
            }}
          ></View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.TextInput}
            maxLength={30}
            onChangeText={(value) => setNameOfLoc(value)}
            value={nameOfLoc}
            placeholder="Enter Your Complete Address"
            placeholderTextColor="#033205"
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(24, 27, 36, 0.6)",
            }}
          ></View>
        </View>

        {/* Space Description */}
        {/* <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput}
          onChangeText={(value) => setSpaceDesc(value)}
          value={spaceDesc}
          placeholder='Space Description'
          placeholderTextColor="#033205"
          autoCapitalize="none"
          autoCorrect={false}
          multiline={true}
          

        >

        </TextInput>
        <View style={{borderBottomWidth:1,
     borderBottomColor: 'rgba(24, 27, 36, 0.6)'}}></View>
        </View> */}

        <Text style={styles.uploadDocsHeading}>Upload Documents</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.UploadDocContainer}>
          <Text
            style={{
              width: 200,
              height: 30,
              color: "rgba(139, 185, 141, 0.8)",
            }}
            onPress={pickDocument}
          >
            hello
          </Text>
          <View style={{ flexWrap: "wrap" }}>
            <Entypo
              name="upload"
              size={20}
              color="black"
              style={{ margin: 5 }}
            />
            <FontAwesome5
              name="file-upload"
              size={20}
              color="black"
              style={{ margin: 5 }}
            />
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.CreateAccButton}
          onPress={handleCreateAccount}
          underlayColor="#fff"
        >
          <Text style={styles.CreateAccText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <View>{error && <Text>{error}</Text>}</View>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={styles.HaveAccText}>Already have an account?</Text>
        <Text
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.BottomHeading}
        >
          Login
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  LRHeading: {
    //top heading for Login and registration
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "BalooBhai2_700Bold",
    color: "#033205",
    fontSize: 20,
  },
  AccChoicesParent: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 47,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  AccChoices: {
    fontFamily: "BalooBhai2_700Bold",
    color: "#808080",
    // textDecorationLine:'underline',
    fontSize: 20,
    marginRight: 50,
    marginLeft: 70,
    marginTop: 5,
  },
  Active: {
    color: "#033205",
    fontFamily: "BalooBhai2_700Bold",
    fontSize: 20,
    marginRight: 50,
    marginLeft: 70,
    marginTop: 5,
  },
  userUnderline: {
    color: "#FFFFFF",
    borderBottomWidth: 4,
    borderBottomColor: "#033205",
    marginTop: -25,
    marginLeft: 215,
  },
  inputContainer: {
    // flexDirection: 'row',
    width: 298,
    height: 42,
    backgroundColor: "#FFFFFF",
    // borderBottomWidth:1,
    // borderBottomColor: '#033205',
    textAlign: "center",
    margin: 5,
    //  shadowColor: '#000',

    //   shadowOffset: { width: 1, height: 1 },
    //   shadowOpacity: 0.4,
    //   shadowRadius: 3,
    //   elevation: 5,
  },
  TextInput: {
    marginTop: 12,
    fontFamily: "BalooBhai2_400Regular",
    lineHeight: 20,
    fontSize: 18,
  },
  uploadDocsHeading: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "BalooBhai2_700Bold",
    color: "#033205",
    fontSize: 20,
  },
  UploadDocContainer: {
    flexDirection: "row",
    width: 281,
    height: 30,
    backgroundColor: "rgba(139, 185, 141, 0.8)",
    borderRadius: 50,
    //paddingTop: 10,
    //paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    elevation: 2,
  },

  CreateAccButton: {
    width: 168,
    height: 35,
    marginTop: 20,
    paddingTop: 3,
    // paddingBottom:5,
    backgroundColor: "#033205",
    borderRadius: 50,
    borderWidth: 1,
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    elevation: 2,
  },
  CreateAccText: {
    fontFamily: "BalooBhai2_400Regular",
    fontSize: 16,
    color: "#D8F0D7",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  HaveAccText: {
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 32,
    fontFamily: "BalooBhai2_400Regular",
  }, //Have an acc or dont have acc text

  BottomHeading: {
    //Signup and Login bottom heads
    fontSize: 24,
    lineHeight: 39,
    color: "#033205",
    fontFamily: "BalooBhai2_700Bold",
  },
});
