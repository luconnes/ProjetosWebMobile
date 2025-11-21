import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfissionalScreen() {
  return (
    <LinearGradient
      colors={['#1e3c72', '#2a5298']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.title}>Experiência Profissional</Text>

        {/* EXPERIÊNCIA: CENTRAL IT */}
        <View style={styles.card}>
  <Text style={styles.cardTitle}>Trainee em Transformação Digital</Text>
  <Text style={styles.cardSubtitle}>Central IT • Recife, PE</Text>
  <Text style={styles.cardText}>2024 - Atual</Text>

  <View style={styles.responsibilities}>
    <Text style={styles.responsibilityItem}>
      - Coleta de feedback de clientes para identificar oportunidades de melhoria e inovação.
    </Text>
    <Text style={styles.responsibilityItem}>
      - Colaboração em estratégias de negócios digitais e automação de processos.
    </Text>
    <Text style={styles.responsibilityItem}>
      - Documentação e análise de requisitos de projetos tecnológicos.
    </Text>
    <Text style={styles.responsibilityItem}>
      - Teste de plataforma interna para melhora contínua.
    </Text>
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
    borderRadius: 10,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#ffffff22',
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    color: '#ddd',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  cardText: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: 10,
  },
  responsibilities: {
    marginTop: 5,
    paddingLeft: 5,
  },
  responsibilityItem: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 3,
  },
});
