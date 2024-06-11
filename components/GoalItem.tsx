import ListItem from "@/models/ListItem";
import { Text, View, StyleSheet, Pressable } from "react-native";

interface GoalItemProps {
  goal: ListItem;
  onDeleteItem: (id: string) => void;
}

export default function GoalItem(this: ListItem, props: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.goal.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.goal.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
