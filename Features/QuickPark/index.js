import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Search from "../../components/Search";
import { useAuthContext } from "../../hooks/useAuthContext";
import { parkingLocations } from "../../data/parkingLocations";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
import * as Location from "expo-location";

const App = () => {
  const { search: searchValue } = useAuthContext();
  const { documents, error } = useCollection("owner");
  const { updateDocument, response } = useFirestore("owner");
  const [parkingInspector, setParkingInspector] = useState(null);
  const [currentLocaion, setCurrentLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [searchParking, setSearchParking] = useState({
    latitude: 24.9365694,
    longitude: 67.0822045,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const confirmYourParking = async () => {};

  const getLatitudeAndLongitude = (address) => {
    let placeAddress = address.replace(/ /g, "%20");
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${placeAddress}&key=c909d8b8091347eda09e59723dc49488&language=en&pretty=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log({ data });

        console.log(data.results[0].geometry.lat, data.results[0].geometry.lng);
        setSearchParking({
          latitude: data.results[0].geometry.lat,
          longitude: data.results[0].geometry.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (documents) {
      console.log(documents);
    }
  }, [documents]);

  useEffect(() => {
    if (searchValue) {
      console.log("search=>" + searchValue);
      documents &&
        documents.forEach((loc) => {
          console.log(loc.nameOfLoc);
          if (loc.nameOfLoc.includes(searchValue)) {
            console.log("=>" + loc.id);
            setParkingInspector(loc.id);
            getLatitudeAndLongitude(loc.nameOfLoc);
          }
        });
    }
  }, [searchValue]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords.latitude);
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Search />
      {location && (
        <MapView
          style={{ alignSelf: "stretch", height: "80%", width: "100%" }}
          region={searchParking}
        >
          <Marker coordinate={location} title="Marker" pinColor="red" />
          {searchParking && (
            <Marker
              coordinate={searchParking}
              title="Marker"
              pinColor="green"
            />
          )}
        </MapView>
      )}

      {/* <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.CreateAccButton}
          onPress={confirmYourParking}
          underlayColor="#fff"
        >
          <Text style={styles.CreateAccText}>Confirm Your Parking</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
});
