import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text>Welcome to CPRG307 !</Text>
      <Text> My name Is Jaskirat !</Text>
      <Text> My profile pic </Text>
      <Button title="Click me!" color="green" />
      <Image source={require("./assets/profile.jpeg")} style={styles.img} />
      <Text> Beach view</Text>
      <Image source={require("./assets/beach.jpeg")} style={styles.img} />
      <Text> Random clics </Text>
      <Image source={require("./assets/pixel.jpeg")} style={styles.img} />
      
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio
        aspernatur vitae unde fugit temporibus, culpa quos reiciendis non
        laboriosam dolorum? Tempora pariatur beatae labore dolores similique et
        ad dignissimos, perspiciatis vitae neque delectus numquam blanditiis
        iusto natus minima sequi iure adipisci dolor. Voluptatibus numquam
        maiores iure sapiente, architecto suscipit distinctio, maxime nam, rerum
        impedit ad? Modi possimus repudiandae similique adipisci aut tempore
        soluta maxime quae blanditiis praesentium, nihil impedit quos quibusdam
        error architecto et iure cum nisi accusantium. Cumque iste neque quia
        perspiciatis labor!!!!!!!!!!!!!!!!!!</Text>
      <StatusBar style="auto" />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    color: "red",
  },
  img: {
    width: 200,
    height: 200,
  }
});
