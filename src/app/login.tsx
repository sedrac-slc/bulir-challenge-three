import { Link, router } from "expo-router";
import React, { useMemo, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { LoginApi } from "../api/Login.api";
import * as SecureStore from 'expo-secure-store';
import { KEY_PERSON, KEY_TOKEN, STATUS_UNAUTHORIZED } from "../util/environment";

export default function LoginScreen() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginApi = useMemo(() => new LoginApi(),[]);

    const handleSubmit = async () => {
        loginApi.sign(email, password).then(function ({ data }) {
            SecureStore.setItem(KEY_PERSON, data.user);
            SecureStore.setItem(KEY_TOKEN, data.access_token);
            router.replace('/login');
          }).catch(function (error) {
            if (error.response?.status == STATUS_UNAUTHORIZED) {
               return;
            }
        });
    }

  return (
    <View className="flex flex-col justify-center items-center gap-5 h-full">
        <View className="absolute top-0 left-0 p-5">
           <Link href="/">Voltar</Link>
        </View>        
        <View>
            <Text className="text-2xl font-semibold border-b pb-5">Faça o Login</Text>
        </View>
        <View className="flex flex-col gap-3 w-full mx-3 p-2">
            <Text className="">Digita o seu email</Text>
            <TextInput  value={email} onChangeText={setEmail} className="border rounded border-gray-100 py-3"/>
        </View>
        <View className="flex flex-col gap-3 w-full mx-3 p-2">
            <Text>Digita a sua senha</Text>
            <TextInput  value={password} onChangeText={setPassword} className="border rounded border-gray-100 py-3"/>
        </View>
        <Button
            title="Autenticação"
            onPress={handleSubmit}
            color="#1E90FF"
        />        
    </View>
  );
}
