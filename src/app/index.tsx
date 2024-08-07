import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="w-full h-full flex justify-center items-center">
      <View className="p-5">
        <Text className="text-center text-5xl">Bulir</Text>
        <Text className="mx-6 my-6">Bem vindo a bulir mobile</Text>
        <View className="flex gap-4">
          <Link href="/login" className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Login
          </Link>
          <Link href="/register" className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Cadastramento
          </Link>          
        </View>
      </View>
    </View>
  );
}

