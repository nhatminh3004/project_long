import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


export default function LichSu({navigation}) {
    return (
        <View style={styles.container}>
            <Text>lich su</Text>
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
