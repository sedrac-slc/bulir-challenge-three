import { CustomerApi } from "@/src/api/Customer.api";
import FormUser from "@/src/components/FormUser";
import { Customer } from "@/src/model/customer";
import { UserType } from "@/src/model/user";
import { ActionForm } from "@/src/util/ActionForm";
import { UserInit } from "@/src/util/UserInit";
import { Link } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Button, FlatList, Modal, StyleSheet, Text, View } from "react-native";

export default function CustomerScreen() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>('Adicionar');
  const [person, setPerson] = useState(UserInit.getCustomer);
  const [customers, setCustomers] = useState<Customer[]>([]);

  const customerApi = useMemo(() => new CustomerApi(), []);

  const findAll = async () => {
    await customerApi.findAll().then(({ data }) => { setCustomers(data); })
  }

  const handleClickOpen = () => {
    setOpen(true);
    setTitle(ActionForm.CREATE);
  }

  const handleClose = () => setOpen(false);

  useEffect(() => {
    findAll()
  }, [])

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const renderItem = ({ item }: any) => (
    <View className="border rounded mx-3 p-2 m-2">
      <Text>Nome: {item.user.fullName}</Text>
      <Text>Email: {item.user.email}</Text>
      <Text>NIF: {item.user.nif}</Text>
      <Text>Saldo: {item.balance}</Text>
      <View style={styles.container}>
        <Link href="/login" className="w-50 text-white text-center bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none  mt-2">
          editar
        </Link>
        <Link href="/login" className="w-50 text-white text-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none  mt-2">
          transações
        </Link>
      </View>
    </View>
  );

  return (
    <View className="w-screen h-screen flex gap-2">
      <View className="w-screen p-2">
        <Button onPress={() => { }} title="Criar" />
      </View>
      <FlatList
        data={customers} keyExtractor={item => item.id} renderItem={renderItem}
      />
      <Modal visible={open} animationType="fade" transparent={true}>
        <FormUser person={person} isShowPassword={title == ActionForm.CREATE} isDisabled={false}        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  }
});