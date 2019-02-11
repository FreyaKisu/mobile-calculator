import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import Expo from "expo";

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}

class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: "History"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>History:</Text>
        <Button onPress={() => navigate("Settings")} title="Settings" />
      </View>
    );
  }
}

class SettingScreen extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };

  render() {
    return <Text>Settings screen</Text>;
  }
}

const MyApp = createStackNavigator({
  History: { screen: HistoryScreen },
  Settings: { screen: SettingScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
