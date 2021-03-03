/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { 
  NativeRouter, 
  Route, 
  Link 
} from "react-router-native";

import { Accueil } from './components/Accueil';
import { MonCompte } from './components/MonCompte';
import { Sujets } from './components/Sujets';

const App = () => {
  return (

    <NativeRouter>

      <View style={styles.container}>

        <View style={styles.nav}>

          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Accueil</Text>
          </Link>

          <Link to="/mon-compte" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Mon Compte</Text>
          </Link>

          <Link to="/sujets" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Sujets</Text>
          </Link>

        </View>

        <Route exact path="/" component={Accueil} />
        <Route path="/mon-compte" component={MonCompte} />
        <Route path="/sujets" component={Sujets} />

      </View>
      
    </NativeRouter>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;
