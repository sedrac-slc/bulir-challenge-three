import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="bg-slate-300 flex justify-center items-center h-full">
      <View className="bg-blue-400 mt-10 w-screen p-2 absolute top-0">
        <Text className="text-5xl text-white mt-10">Bem vindo</Text>
        <Text className="text-3xl text-white mt-3 mb-2">Bulir challenge tree</Text>
      </View>
      <View>
        <View className="gap-8">
          <TouchableOpacity className="w-screen">
            <Link href="/login" className="w-80 bg-blue-600 p-5 px-2.5 rounded-xl text-white text-center" >
              Autenticação
            </Link>
          </TouchableOpacity>

          <TouchableOpacity className="w-screen">
            <Link href="/register" className="w-80 bg-blue-600 p-5 px-2.5 rounded-xl text-white text-center" >
              Cadastramento
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

