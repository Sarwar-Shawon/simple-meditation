import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <ScrollView>
            <Text className="text-zinc-100 text-3xl font-bold">
              Change your beliefs with affirmations
            </Text>
          </ScrollView>
        </View>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
