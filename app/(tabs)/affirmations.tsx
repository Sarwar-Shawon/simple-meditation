import { View, Text } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 text-4xl text-left font-bold mb-3">
            Affirmations
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today
          </Text>
        </View>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
