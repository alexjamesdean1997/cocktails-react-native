import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";

const App = () => {
  return (
      <ScrollView>
        <Header/>
        <Main/>
        <Navbar/>
      </ScrollView>
  );
}

export default App;