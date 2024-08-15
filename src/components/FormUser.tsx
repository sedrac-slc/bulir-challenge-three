import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export enum TypeUser {
    CUSTOMER = 'CUSTOMER',
    PROVIDER = 'PROVIDER',
}

export enum TypeUserPage {


    CUSTOMER = 'CUSTOMER',
    PROVIDER = 'PROVIDER',
    REGISTER = 'REGISTER'
}

interface FormUserPros {
    isDisabled: boolean,
    isShowPassword: boolean,
    person: any
}

export default function FormUser({
    isDisabled,
    isShowPassword,
    person
}: FormUserPros) {

    const [confirm, setConfirm] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [nif, setNif] = useState<string>(person.nif ?? '');
    const [email, setEmail] = useState<string>(person.email ?? '');
    const [userType, setUserType] = useState<string>(person.type ?? '');
    const [balance, setBalance] = useState<string>(person.balance ?? '');
    const [fullName, setFullName] = useState<string>(person.fullName ?? '');

    return (
        <View className="flex justify-center gap-5">
            <View className="mx-2">
                <Text id="demo-simple-select-label">Tipo usuário</Text>
                <Picker selectedValue={userType} onValueChange={setUserType} className="border rounded bg-white border-gray-300 py-3 text-xl">
                    <Picker.Item value={TypeUser.CUSTOMER} label='Cliente'/>
                    <Picker.Item value={TypeUser.PROVIDER} label='Provedor'/>
                </Picker>
            </View>
            <View className="mx-2">
                <Text>Digita o seu nome completo:</Text>
                <TextInput value={fullName} onChangeText={setFullName} className="border rounded bg-white border-gray-300 py-3 text-xl"/>
            </View>
            <View className="mx-2">
                <Text>Digita o seu nome email</Text>
                <TextInput value={email} onChangeText={setEmail} className="border rounded bg-white border-gray-300 py-3 text-xl"/>
            </View>
            <View className="mx-2">
                <Text>Digita o bilhete de identidade</Text>
                <TextInput value={nif} onChangeText={setNif} className="border rounded bg-white border-gray-300 py-3 text-xl"/>
            </View>
            {TypeUser.CUSTOMER == userType && (
                <View className="mx-2">
                    <Text>Digita o saldo</Text>
                    <TextInput value={balance} onChangeText={setBalance} className="border rounded bg-white border-gray-300 py-3 text-xl"/>
                </View>
            )}
            {isShowPassword && (
                <>
                    <View className="mx-2">
                        <Text>Digita a sua senha</Text>
                        <TextInput value={password} onChangeText={setPassword}  className="border rounded bg-white border-gray-300 py-3 text-xl"/>
                    </View>
                    <View className="mx-2">
                        <Text>Confirma a sua senha</Text>
                        <TextInput value={confirm} onChangeText={setConfirm} className="border rounded bg-white border-gray-300 py-3 text-xl"/>
                    </View>
                </>
            )}
        </View>
    )
}