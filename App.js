import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity 
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.name}>Donna Stroupe</Text>
      </View>

      {/* Category */}
      <Text style={styles.sectionTitle}>Category</Text>

      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryItem}>
          <Text>Resort</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Text>Homestay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Text>Hotel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Text>Lodge</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Text>Villa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Text>Apartment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Text>Hostel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Destination */}
      <Text style={styles.sectionTitle}>Popular Destination</Text>

      <View style={styles.imageRow}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.destinationImage}
        />

        <Image
          source={{ uri: "https://picsum.photos/201" }}
          style={styles.destinationImage}
        />

        <Image
          source={{ uri: "https://picsum.photos/202" }}
          style={styles.destinationImage}
        />
      </View>

      {/* Recommended */}
      <Text style={styles.sectionTitle}>Recommended</Text>

      <Image
        source={{ uri: "https://picsum.photos/300/200" }}
        style={styles.recommendedImage}
      />

      <Image
        source={{ uri: "https://picsum.photos/301/200" }}
        style={styles.recommendedImage}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  header: {
    backgroundColor: "#5B4DBC",
    padding: 20,
  },

  welcome: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  name: {
    color: "white",
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 15,
  },

  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  categoryItem: {
    backgroundColor: "#6C63FF",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  imageRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  destinationImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  recommendedImage: {
    width: "90%",
    height: 150,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 15,
  },

});