import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";

export default function BasicModal({ visible, onClose }) {
    const [open, setOpen] = useState(false)
    return (
        // <View>
        // {/* <LinearGradient
        //     colors={['#29042D', '#5F076A', '#192f6a']}
        //     style={styles.background}
        //     start={{ x: 0.5, y: 0 }}
        //     end={{ x: 1, y: 1 }}
        //     locations={[0, 0.5, 1]}
        // > */}

        //         <Text>Tetado</Text>
        //         {
        //             open && <Text>Rico</Text>
        //         }

        //     <TouchableOpacity onPress={() => setOpen(!open)}>
        //         <Text>Handle</Text>
        //     </TouchableOpacity>
        //     {/* </LinearGradient> */}
        // </View>
        <View>
            <LinearGradient
                colors={['#29042D', '#5F076A', '#192f6a']}
                style={styles.background}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0, 0.5, 1]}>

                <Modal visible={visible} animationType="slide">
                    <View style={styles.modal}>
                        <Text style={styles.text}>Quem leu e gay</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.text}>fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </LinearGradient >
        </View >
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },

    modal: {
        width: '50%',
        height: '20%',
        margin: 'auto',
        backgroundColor: '#ffd8d8',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10
    },
    text: {
        color: '#805841',
        textAlign: 'center'
    }
})