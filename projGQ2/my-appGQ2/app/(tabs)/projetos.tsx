import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';

export default function ProjetosScreen() {
  return (
    <LinearGradient
      colors={['#1e3c72', '#2a5298']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.title}>Meus Projetos</Text>

        {/* --- PROJETO 1: Robótica Inclusiva --- */}
        <View style={styles.card}>
          
          <Pressable
            style={styles.button}
            onPress={() => Linking.openURL('https://github.com/naoehcleber/hackathon')}
          >
            <Text style={styles.buttonText}>Ver Projeto no GitHub</Text>
          </Pressable>

          <Text style={styles.cardTitle}>Aplicação de tracking em tempo real</Text>
          <Text style={styles.cardDescription}>
            Aplicação utilizada no projeto vencedor do Hackaton de Inovação Urbana, responsável por simular em tempo real o rastreamento de indivíduos dentro de uma área delimitada no bairro de Santo Antônio.
          </Text>
        </View>

        {/* --- PROJETO 2: Sistema Webdriver (BodeUrb) --- */}
        <View style={styles.card}>

          <Pressable
            style={styles.button}
            onPress={() => Linking.openURL('https://github.com/luconnes/Projeto-de-Asis')}
          >
            <Text style={styles.buttonText}>Ver Projeto no GitHub</Text>
          </Pressable>

          <Text style={styles.cardTitle}>Compilador</Text>
          <Text style={styles.cardDescription}>
            Compilador feito na matéria de "Compiladores" na universidade.
          </Text>
        </View>

        {/* --- PROJETO 3: Dispenser Automático --- */}
        <View style={styles.card}>

          <Pressable
            style={styles.button}
            onPress={() => Linking.openURL('https://github.com/tarsilaAmado/TrabalhoDeBancoDeDados')}
          >
            <Text style={styles.buttonText}>Ver Projeto no GitHub</Text>
          </Pressable>

          <Text style={styles.cardTitle}>Sistema de WebDrive feito com SQL</Text>
          <Text style={styles.cardDescription}>
            Sistema desenvolvido em python com funções adiministrativas com conexão à Banco de Dados.
          </Text>
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
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 25,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff15',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#ffffff22',
  },

  /* --- BOTÃO DO GITHUB --- */
  button: {
    backgroundColor: '#ffffff22',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff44',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#ddd',
    fontSize: 16,
    lineHeight: 22,
  },
  footerText: {
    color: '#bbb',
    fontSize: 14,
    marginTop: 15,
    marginBottom: 30,
  }
});
