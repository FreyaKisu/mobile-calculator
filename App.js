import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { createAppContainer, createStackNavigator } from "react-navigation";

/*const CalcApp = createStackNavigator({
  Home: { screen: HomeScreen },
  History: { screen: HistoryScreen }
});*/

export default class App extends React.Component {
  static navigationOptions = { title: "Home" };

  constructor(props) {
    super(props);
    this.state = { number1: "", number2: "", result: "", data: [] };
  }

  buttonPlus = event => {
    let res = Number(this.state.number1) + Number(this.state.number2);
    this.setState({
      result: Number(this.state.number1) + Number(this.state.number2),
      data: [
        ...this.state.data,
        { key: this.state.number1 + " + " + this.state.number2 + " = " + res }
      ]
    });
  };

  buttonMinus = event => {
    let res = Number(this.state.number1) - Number(this.state.number2);
    this.setState({
      result: Number(this.state.number1) - Number(this.state.number2),
      data: [
        ...this.state.data,
        { key: this.state.number1 + " - " + this.state.number2 + " = " + res }
      ]
    });
  };

  render() {
    console.log("props", this.props);
    //const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          <Text>Enter two numbers to calculate:</Text>
          <TextInput
            style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
            keyboardType="number-pad"
            onChangeText={number1 => this.setState({ number1 })}
            value={this.state.number1}
          />
          <TextInput
            style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
            keyboardType="number-pad"
            onChangeText={number2 => this.setState({ number2 })}
            value={this.state.number2}
          />
        </View>

        <View styles={styles.button}>
          <Button onPress={this.buttonPlus} title="+" />
          <Button onPress={this.buttonMinus} title="-" />
          {/*<Button onPress={() => navigate("History")} title="HISTORY" />*/}
        </View>
        <View style={styles.flexTest}>
          <Text>Result: {this.state.result}</Text>
        </View>
        <View style={styles.history}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 250,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },

  button: {
    flex: 1,
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  history: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  flexTest: {
    flex: 1
  }
});
