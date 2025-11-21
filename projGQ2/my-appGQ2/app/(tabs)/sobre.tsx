import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SobreScreen() {
  return (
    <LinearGradient
      colors={['#1e3c72', '#2a5298']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.mainTitle}>Tecnologias e Módulos</Text>

        {/* CARD 1 */}
        <View style={styles.card}>
          <Text style={styles.cardSectionTitle}>1. Base de Desenvolvimento</Text>

          <View style={styles.techItem}>
            <Text style={styles.techName}>React Native (Framework)</Text>
            <Text style={styles.techDescription}>
              Framework principal para construir aplicativos móveis nativos para iOS e Android usando JavaScript e React.
            </Text>
          </View>

          <View style={styles.techItem}>
            <Text style={styles.techName}>Expo (Plataforma)</Text>
            <Text style={styles.techDescription}>
              Conjunto de ferramentas que facilita a criação, desenvolvimento e deploy do app, permitindo testes rápidos com o Expo Go.
            </Text>
          </View>
        </View>

        {/* CARD 2 */}
        <View style={styles.card}>
          <Text style={styles.cardSectionTitle}>2. Estrutura e Organização</Text>

          <View style={styles.techItem}>
            <Text style={styles.techName}>TypeScript (Linguagem/Tipagem)</Text>
            <Text style={styles.techDescription}>
              Adiciona tipagem estática ao JavaScript, tornando o código mais seguro e menos propenso a erros.
            </Text>
          </View>

          <View style={styles.techItem}>
            <Text style={styles.techName}>Expo Router (Navegação)</Text>
            <Text style={styles.techDescription}>
              Sistema de roteamento baseado em arquivos que cria automaticamente as rotas e organiza a navegação por abas.
            </Text>
          </View>
        </View>

        {/* CARD 3 */}
        <View style={styles.card}>
          <Text style={styles.cardSectionTitle}>3. Módulos e Otimização (Forca)</Text>

          <View style={styles.list}>
            <Text style={styles.listItem}>• useState (Hook): Gerenciamento do estado dinâmico do jogo.</Text>
            <Text style={styles.listItem}>• useCallback (Hook): Otimiza a função de execução da jogada.</Text>
            <Text style={styles.listItem}>• Alert (React Native): Exibição de pop-ups nativos.</Text>
            <Text style={styles.listItem}>• TouchableOpacity / Keyboard: Interatividade e controle do teclado.</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
    paddingVertical: 30,
  },
  mainTitle: { 
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    color: 'white',
    textAlign: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffffaa',
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  cardSectionTitle: { 
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e3c72',
  },
  techItem: {
    marginBottom: 10,
  },
  techName: { 
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  techDescription: { 
    fontSize: 14,
    marginTop: 2,
    color: '#333',
  },
  list: { 
    marginTop: 5,
    width: '100%',
  },
  listItem: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
    lineHeight: 20,
  },
});
