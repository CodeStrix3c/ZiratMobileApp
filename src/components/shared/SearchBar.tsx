import { Search } from "lucide-react-native";
import React from "react";
import { TextInput, View } from "react-native";

type Props = {
    search: string;
    setSearch: (text: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
    return (
        <View
            className="
                w-[90%] self-center 
                flex-row items-center
                bg-white
                rounded-full
                px-4 py-2
                shadow-md 
                border border-gray-200
                 mb-6
            "
            style={{ height: 48 }}
        >
            <Search size={20} color="#c7611f" strokeWidth={2} />

            <TextInput
                placeholder="Search..."
                placeholderTextColor="#9CA3AF"
                value={search}
                onChangeText={setSearch}
                className="
                    ml-3
                    flex-1
                    text-base text-black
                "
                autoCorrect={false}
                autoCapitalize="none"
            />
        </View>
    );
}
