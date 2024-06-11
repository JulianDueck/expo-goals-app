import { View, StyleSheet, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListItem from "@/models/ListItem";

export default function Index() {
  const [courseGoals, setCourseGoals] = useState<ListItem[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const addGoalHandler = (goalText: string) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: goalText },
    ]);
    setIsModalVisible(false);
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };

  const hideModalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={isModalVisible}
          onCancel={hideModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(item) => {
              return (
                <GoalItem goal={item.item} onDeleteItem={deleteGoalHandler} />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});
