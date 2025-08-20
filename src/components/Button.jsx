import { TouchableOpacity, Text } from "react-native"

export default function Button({label}) {
    return (
        <TouchableOpacity>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}