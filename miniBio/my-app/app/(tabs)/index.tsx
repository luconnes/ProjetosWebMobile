import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';


import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


const MY_NAME = 'Lucas Ribeiro D Azevedo'; 
const MY_BIO = 'Sou Lucas Ribeiro D’Azevedo, estudante de Ciência da Computação com experiência em Python, Java, C e SQL. Participei de projetos acadêmicos envolvendo compiladores, energia limpa e tecnologia assistiva com Arduino. Tenho grande interesse em inovação e inclusão.';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <ThemedView style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/Screenshot.png')} 
            style={styles.profilePicture}
            contentFit="cover"
          />
        </ThemedView>
      }>
      
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.nameText}>
          {MY_NAME}
        </ThemedText>
      </ThemedView>

      {/* Seção da Mini Bio */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Mini Biografia</ThemedText>
        {/* Usando a constante MY_BIO no ThemedText */}
        <ThemedText>
          {MY_BIO}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

// ---

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 15,
    paddingHorizontal: 16,
  },
  imageContainer: {
    
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  profilePicture: {
    height: 150,
    width: 150,
    borderRadius: 75, 
    borderWidth: 3,
    borderColor: 'white', 
  },
  nameText: {
    fontSize: 32, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
  },
});