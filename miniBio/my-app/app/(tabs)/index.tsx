import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

// Importe seus componentes personalizados (se necessário)
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// 🚨 SUBSTITUA ESSAS TRÊS LINHAS PELAS SUAS INFORMAÇÕES!
const MY_NAME = 'SEU NOME COMPLETO AQUI'; 
const MY_BIO = 'Sua mini biografia de um parágrafo. Fale sobre seus interesses, o que você estuda ou o que te motiva no mundo da programação.';
const MY_PHOTO_URL = 'https://picsum.photos/seed/seunome/300/300'; // Substitua por uma URL da sua foto (ou use uma imagem local)

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      // Você pode ajustar a cor do cabeçalho se quiser
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <ThemedView style={styles.imageContainer}>
          <Image
            source={{ uri: MY_PHOTO_URL }} 
            style={styles.profilePicture}
            contentFit="cover"
          />
        </ThemedView>
      }>
      
      {/* Container Principal com o Nome */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.nameText}>
          {MY_NAME}
        </ThemedText>
      </ThemedView>

      {/* Seção da Mini Bio */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Mini Biografia</ThemedText>
        <ThemedText>
          {MY_BIO}
        </ThemedText>
      </ThemedView>

      {/* Instruções de Entrega (Opcional, mas útil) */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Próximos Passos</ThemedText>
        <ThemedText>
          1. Substitua as constantes **MY_NAME, MY_BIO e MY_PHOTO_URL** acima.
        </ThemedText>
        <ThemedText>
          2. Publique no **GitHub** (`git push`).
        </ThemedText>
        <ThemedText>
          3. Publique no **Expo** (`npx expo publish`) para gerar o link do App.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

// ---

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
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
    // Alinha a imagem no centro do cabeçalho Parallax
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20, // Espaçamento entre a foto e o conteúdo
  },
  profilePicture: {
    height: 150,
    width: 150,
    borderRadius: 75, // Deixa a imagem perfeitamente circular
    borderWidth: 3,
    borderColor: 'white', // Adiciona uma borda branca
  },
  nameText: {
    fontSize: 32, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF', // Cor de destaque
  },
});