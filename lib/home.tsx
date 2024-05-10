
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'}/>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <Text style={styles.text}>audiophile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },

  text: { 
    color: 'white',
    fontFamily: 'Manrope',
    fontSize: 35,
  }
});


export default HomeScreen;