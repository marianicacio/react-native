import { Text, View, StyleSheet, Image } from "react-native"

export default function Card(props) {
    return (
        <View>
            <Image style={styles.img} source={props.image}></Image>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34
    },

    img: {
        width: 150,
        height: 20
    }
})