import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <View style={styles.centeredView}>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Rellene el Formulario</Text>
      </Pressable> */}
      <SafeAreaView style={styles.SafeAreaView}>
        <Text style={styles.tittle}>Biva Mas</Text>
        <TextInput
          style={styles.input}
          type="email"
          placeholder="email..."
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="contraseña..."
          keyboardType="numeric"
        />
        <Pressable style={[styles.button, styles.login]}>
          <Text style={styles.textStyle}>Log In</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    display: "flex",
    justifyContent: "center",
    margin: "2rem 1rem 2rem 1rem",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    display: "none",
  },
  login: {
    backgroundColor: "blue",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  tittle: {
    color: "pink",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: "3rem",
    marginTop: "4rem",
  },
});

export default App;
