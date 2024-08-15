import { Link, router } from "expo-router";
import React, { useMemo, useState } from "react";
import { Button , Text, TextInput, View,  } from "react-native";
import { LoginApi } from "../api/Login.api";
import * as SecureStore from 'expo-secure-store';
import { KEY_PERSON, KEY_TOKEN, STATUS_UNAUTHORIZED } from "../util/environment";

export default function LoginScreen() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginApi = useMemo(() => new LoginApi(), []);

    const handleSubmit = async () => {
        loginApi.sign(email, password).then(function ({ data }) {
            SecureStore.setItem(KEY_PERSON, JSON.stringify(data.user));
            SecureStore.setItem(KEY_TOKEN, data.access_token);
            router.replace('/dash');
        }).catch(function (error) {
            console.error(error)
            router.replace('/dash');
            if (error.response?.status == STATUS_UNAUTHORIZED) {
                return;
            }
        });
    }

    return (
        <View className="bg-gray-300 justify-center items-center h-full w-screen">
            <View className="bg-blue-400 mt-10 w-screen p-2 absolute top-0">
            <Link href="/" className="text-white">Tela inicial</Link>
                <Text className="text-5xl text-white mt-10 mb-2">Login</Text>
            </View>
            <View className="w-full p-2">
                <View className="flex flex-col gap-3 p-2">
                    <Text className="">Digita o seu email</Text>
                    <TextInput value={email} onChangeText={setEmail} className="border rounded bg-white border-gray-100 py-3 text-xl" />
                </View>
                <View className="flex flex-col gap-3 p-2 mb-5">
                    <Text>Digita a sua senha</Text>
                    <TextInput secureTextEntry={true} value={password} onChangeText={setPassword} className="border rounded bg-white border-gray-100 py-3 text-xl" />
                </View>
                <Button
                    title="Autenticação"
                    onPress={handleSubmit}
                    color="#1E90FF"
                />
            </View>
        </View>
    );
}