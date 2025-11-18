import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, Pressable, StyleSheet, Linking } from 'react-native';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#1e3c72', '#2a5298']}
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/minhaFoto.png")}
        style={styles.foto}
      />

      <Text style={styles.bio}>
        Olá! Meu nome é Lucas Ribeiro, desenvolvedor com experiência em Python,
        Java, C, SQL e robótica inclusiva. Atualmente trainee no programa PUTS.
      </Text>

      <Pressable style={styles.botao} onPress={() => Linking.openURL("https://wa.me/55SEUNUMERO")}>
        <Text style={styles.textoBotao}>WhatsApp</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={() => Linking.openURL("mailto:seuemail@gmail.com")}>
        <Text style={styles.textoBotao}>E-mail</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={() => Linking.openURL("https://www.linkedin.com/in/SEULINK/")}>
        <Text style={styles.textoBotao}>LinkedIn</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  bio: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: "#ffffffaa",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 7,
  },
  textoBotao: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  }
});
