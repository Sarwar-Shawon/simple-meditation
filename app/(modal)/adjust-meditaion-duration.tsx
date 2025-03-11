import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";

const AdjustMeditaionDuration = () => {
  //
  const { setDuration } = useContext(TimerContext);
  //
  const handleress = (duration: number) => {
    setDuration(duration);
    router.back();
  };
  //
  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-6 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color={"white"} />
        </Pressable>
        <View className="justify-center h-4/5">
          <Text className="text-white text-3xl font-bold text-center mb-8">
            Adjust Meditation Duration
          </Text>
          <View>
            <CustomButton
              title="10 Seconds"
              onPress={() => handleress(10)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="5 Minutes"
              onPress={() => handleress(5 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="10 Minutes"
              onPress={() => handleress(10 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="15 Minutes"
              onPress={() => handleress(15 * 60)}
              containerStyles="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditaionDuration;
