import { TextInput } from "react-native-gesture-handler";

export default function InputText({
    onChange,
}:Readonly<{
    onChange: () => void
}>) {

  return (
        <TextInput className="border" onChange={onChange}/>
  );
}