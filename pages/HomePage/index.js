import React, { useState, useEffect } from "react";
import InsetShadow from "react-native-inset-shadow";
import Ionicons from "react-native-vector-icons/Ionicons";
import DrawerScreen from "./../../screens/DrawerScreen";
import { useAuthContext } from "../../hooks/useAuthContext";
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
import AppLoading from "expo-app-loading";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useDocument } from "../../hooks/useDocument";
import {
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  BalooBhai2_700Bold,
  BalooBhai2_800ExtraBold,
} from "@expo-google-fonts/baloo-bhai-2";
import { useFonts } from "expo-font";
const HomePage = ({ navigation }) => {
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.uid);
  const [fontsLoaded] = useFonts({
    BalooBhai2_400Regular,
    BalooBhai2_500Medium,
    BalooBhai2_600SemiBold,
    BalooBhai2_700Bold,
    BalooBhai2_800ExtraBold,
  });

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigation.navigate("LoginScreen");
    }
  }, [user]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  var headerImg = require("./../../assets/parkingHeader.jpg");
  return (
    <View style={styles.container}>
      <Image style={styles.header} source={headerImg} />
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.topHeading}>
            Hi {document?.displayName}, Welcome To Parkistan{" "}
          </Text>
          <Ionicons name="location" size={21} color="#033205" />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <View>
            <View style={styles.icons}>
              <Image
                style={styles.gif}
                source={require("./../../assets/car.gif")}
              />
            </View>
            <Text style={styles.iconText}>Easy Parking</Text>
          </View>

          <View>
            <View style={styles.icons}>
              <Image
                style={styles.gif}
                source={require("./../../assets/smartphone.gif")}
              />
            </View>
            <Text style={styles.iconText}>Online Payment</Text>
          </View>

          <View>
            <View style={styles.icons}>
              <Image
                style={styles.gif}
                source={require("./../../assets/clock.gif")}
              />
            </View>
            <Text style={styles.iconText}>Time Saver</Text>
          </View>

          <View>
            <View style={styles.icons}>
              <Image
                style={styles.gif}
                source={require("./../../assets/shield.gif")}
              />
            </View>
            <Text style={styles.iconText}>Secure</Text>
          </View>

          <View>
            <View style={styles.icons}>
              <Image
                style={styles.gif}
                source={require("./../../assets/search.gif")}
              />
            </View>
            <Text style={styles.iconText}>Quick Park</Text>
          </View>

          <View>
            <View style={styles.icons}>
              <Image
                style={styles.gif}
                source={require("./../../assets/home.gif")}
              />
            </View>
            <Text style={styles.iconText}>Accesibility</Text>
          </View>
        </View>

        <View style={{ marginTop: 20, alignItems: "center" }}>
          <InsetShadow
            containerStyle={styles.shadow}
            shadowRadius={20}
            shadowOffset={25}
            elevation={5}
            shadowOpacity={0.2}
            color="rgba(128,128,128,1)"
          >
            {/* main destination container  */}
            <View style={{ paddingTop: 20, paddingLeft: 10 }}>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <View style={styles.whiteCircle}></View>
                <Text style={styles.middleText}>Where are you going?</Text>
              </View>

              <View
                style={{
                  height: 68,
                  width: 0,
                  borderWidth: 1,
                  borderRadius: 50,
                  borderColor: "rgba(139, 185, 141, 0.8)",
                  marginLeft: 5,
                }}
              ></View>

              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <View style={styles.greenCircle}></View>
                <View style={styles.locationInputContainer}>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your destination"
                    placeholderTextColor="#033205"
                  ></TextInput>
                  <FontAwesome
                    name="search"
                    size={15}
                    color="#808080"
                    style={{ marginTop: 7, marginLeft: 10 }}
                  />
                </View>
              </View>
            </View>
          </InsetShadow>
          <View style={styles.QuickParkHeading}>
            <Text
              onPress={() => navigation.navigate("Map")}
              style={styles.QpText}
            >
              Search Parking Spot
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#f5f5f5',
    backgroundColor: "#F5FFFA",
    //alignItems: 'center',
    //marginTop:50
  },
  header: {
    width: "100%",
    height: "30%",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  topHeading: {
    fontFamily: "BalooBhai2_700Bold",
    color: "#033205",
    fontSize: 20,
  },
  middleText: {
    fontFamily: "BalooBhai2_500Medium",
    color: "#033205",
    fontSize: 15,
  },
  shadow: {
    backgroundColor: "#FFFFFF",
    width: 345,
    height: 160,
    borderRadius: 6,
  },
  QuickParkHeading: {
    justifyContent: "center",
    width: 200,
    height: 30,
    backgroundColor: "rgba(139, 185, 141, 0.8)",
    borderRadius: 50,
    padding: 5,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    elevation: 2,
  },
  QpText: {
    fontFamily: "BalooBhai2_700Bold",
    color: "#033205",
    textAlign: "center",
    fontSize: 15,
  },
  whiteCircle: {
    width: 13,
    height: 12,
    marginRight: 20,
    marginTop: 5,
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
    // borderColor:'#033205'
    borderColor: "rgba(139, 185, 141, 0.8)",
  },
  greenCircle: {
    width: 13,
    height: 12,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 50,
    //backgroundColor:'#033205'
    backgroundColor: "rgba(139, 185, 141, 0.8)",
  },
  locationInputContainer: {
    marginTop: -5,
    flexDirection: "row",
    flexWrap: "wrap",
    width: 291,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#F5FFFA",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  TextInput: {
    fontFamily: "BalooBhai2_500Medium",
    width: 230,
    height: 23,
    marginLeft: 20,
    marginTop: 5,
  },
  icons: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    overflow: "hidden",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    elevation: 3,
  },
  gif: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  iconText: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "BalooBhai2_400Regular",
    fontSize: 13,
    color: "#696969",
  },
});
export default HomePage;
