import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPrivewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";
interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPrivewData[];
}
const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-xl font-bold text-white">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 mr-4">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full rounded-lg"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
