import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


export default function Donhang({  }) {
    return (

        <View style={styles.container}>
            <Text>don hang</Text>
            <StatusBar style="auto" />
        </View >


    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});