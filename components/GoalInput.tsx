import { useState } from "react";
import { View, StyleSheet, Button, Modal, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function GoalInput(props: any) {
  const [goalText, setGoalText] = useState<string>("");

  const goalInputHandler = (enteredText: string) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/images/goal.png")}
        />
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#f31282" title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button color="#b180f0" title="Add Goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    margin: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 12,
    borderRadius: 6,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
