import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.redBar}>
          <Image
            style={[styles.logoView, { height: 128 }]}
            source={require('./assets/logo.png')}
            resizeMode='contain'
            fadeDuration={0}
          />
        </View>
        <View style={styles.mainContent}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.photo}>
              <Image
                style={styles.photoView}
                source={require('./assets/example.jpg')}
                resizeMode='contain'
                fadeDuration={0}
              />
              <Text style={[styles.title, { height: "auto", lineHeight: 16 }]}>Trisha R. Bindah</Text>
            </View>


            <View style={[styles.category, { marginTop: 10 }]}>
              <Text style={styles.title}>Account</Text>
              <TouchableHighlight onPress={() => 1} style={styles.link}>
                <Text style={styles.subtitle}>Username</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => 1} style={styles.link}>
                <Text style={styles.subtitle}>Email Address</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => 1} style={styles.link}>
                <Text style={styles.subtitle}>Password</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.category}>
              <Text style={styles.title}>Settings</Text>
              <TouchableHighlight onPress={() => 1} style={styles.link}>
                <Text style={styles.subtitle}>Language</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => 1} style={styles.link}>
                <Text style={styles.subtitle}>Related Accounts</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => 1} style={styles.link}>
                <Text style={styles.subtitle}>Notifications</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.category}>
              <Text style={styles.title}>Settings</Text>
              <TouchableHighlight onPress={() => 1} style={styles.link}>
                <Text style={styles.subtitle}>Edit your information</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.category}>
              <TouchableHighlight onPress={() => 1} style={styles.link}>
                <Text style={styles.logOut}>Log out</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => 1} style={styles.link}>
                <Text style={styles.delete}>Delete Account</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redBar: {
    backgroundColor: '#d43939',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    top: '0%',
    width: '100%'
  },
  logoView: {
    width: '50%',
  },
  mainContent: {
    position: 'absolute',
    top: 128,
    bottom: 0,
    width: '100%',
    //backgroundColor: '#EEE'
  },
  photoView: {
    width: 70,
    height: 70,
    marginBottom: 10,
    borderRadius: 15,
    marginTop: 5
  },
  photo: {
    //backgroundColor: '#D7E',
    alignItems: "center"
  },
  category: {
    paddingHorizontal: 10,
    marginTop: 0
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    //backgroundColor: '#F7E',
    height: 40,
    lineHeight: 40
  },
  subtitle: {
    fontWeight: "normal",
    fontSize: 15
  },
  link: {
    height: 40,
    justifyContent: "center",
    //backgroundColor: '#E11',
  },
  logOut: {
    fontWeight: "bold"
  },
  delete: {
    fontWeight: "bold"
  }
});
