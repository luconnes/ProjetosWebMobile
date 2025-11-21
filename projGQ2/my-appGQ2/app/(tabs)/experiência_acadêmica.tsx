import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

// --- DADOS EXTRAÍDOS DO GOOGLE DRIVE ---
const CERTIFICADOS_DATA = [
  {
    titulo: "PREPARANDO DADOS PARA ANÁLISE - MICROSOFT POWER BI",
    detalhes: "Carga horária: 7 hora(s). Período: 06/08/2025 a 09/08/2025. Emitido por EV.",
  },
  {
    titulo: "Métricas para Produtos Digitais",
    detalhes: "Instrutores: Will Sertório, Vinicius dos Santos. Duração: 5 horas. Data: 27 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "Aprenda a transformar seus clientes em fãs",
    detalhes: "Instrutores: José Ricardo Noronha. Duração: 3 horas. Data: 28 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "ChatGPT para o Trabalho: O Guia Definitivo para Inovar IA",
    detalhes: "Instrutores: Diego Davila, Backyard Courses. Duração: 2.5 horas. Data: 23 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "Praticando Customer Experience",
    detalhes: "Instrutores: RB Treinamento e Cursos. Duração: 2 horas. Data: 28 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "INTRODUÇÃO À ANÁLISE DE DADOS - MICROSOFT POWER BI",
    detalhes: "Carga horária: 5 hora(s). Período: 03/08/2025 a 04/08/2025. Emitido por EV.",
  },
  {
    titulo: "VISUALIZANDO DADOS NO POWER BI",
    detalhes: "Carga horária: 10 hora(s). Período: 11/08/2025 a 12/08/2025. Emitido por EV.",
  },
  {
    titulo: "Como Desenvolver a Cultura Digital",
    detalhes: "Instrutores: Cristiane Thiel. Duração: 3 horas. Data: 28 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "MODELANDO DADOS NO POWER BI",
    detalhes: "Carga horária: 11 hora(s). Período: 05/08/2025 a 11/08/2025. Emitido por EV.",
  },
  {
    titulo: "ANÁLISE DE DADOS NO POWER BI",
    detalhes: "Carga horária: 4 hora(s). Período: 05/08/2025 a 12/08/2025. Emitido por EV.",
  },
  {
    titulo: "Medir a experiência do cliente | NPS",
    detalhes: "Instrutores: Thiago Berka. Duração: 3.5 horas. Data: 2 de Maio de 2025. Emitido por Udemy.",
  },
  {
    titulo: "Habilidades essenciais para o futuro do trabalho",
    detalhes: "Instrutores: Bruna Ruschel Moreira. Duração: 3.5 horas. Data: 25 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "Guia para Desbloquear a Criatividade e ter Ideias Originais",
    detalhes: "Instrutores: Bruna Ruschel Moreira. Duração: 3 horas. Data: 2 de Maio de 2025. Emitido por Udemy.",
  },
  {
    titulo: "Ambiente de Trabalho Multigeracional",
    detalhes: "Instrutores: Hcode Treinamentos. Duração: 2.5 horas. Data: 21 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "Comunicação Assertiva",
    detalhes: "Instrutores: Dante Bonetti. Duração: 1 hora. Data: 23 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "Inteligência Emocional e Social",
    detalhes: "Instrutores: Débora Dalla Vecchia, Marcus Oliveira, Guilherme Queiroz. Duração: 5 horas. Data: 23 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "BPM, BPMN e Modelagem de Processos",
    detalhes: "Instrutores: Davi Salgueiro. Duração: 15.5 horas. Data: 16 de Dezembro de 2024. Emitido por Udemy.",
  },
  {
    titulo: "Negociação Ganha-Ganha (Harvard)",
    detalhes: "Instrutores: José Ricardo Noronha. Duração: 2.5 horas. Data: 28 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "Gestão do Tempo, Produtividade e GTD",
    detalhes: "Instrutores: Paulo Andrade. Duração: 16 horas. Data: 28 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "UX & Design Thinking",
    detalhes: "Instrutores: Leandro Rezende. Duração: 11.5 horas. Data: 28 de Abril de 2025. Emitido por Udemy.",
  },
  {
    titulo: "Negociação de Alta Performance",
    detalhes: "Instrutores: Bruno Rabin. Duração: 2 horas. Data: 27 de Março de 2025. Emitido por Udemy.",
  },
  {
    titulo: "Como Resolver Problemas Complexos",
    detalhes: "Instrutores: Kleber Donady. Duração: 2.5 horas. Data: 2 de Maio de 2025. Emitido por Udemy.",
  },
];

const GOOGLE_DRIVE_LINK =
  "https://drive.google.com/drive/folders/18QCjIX4jCv8z-_FFHpnUlSwtISjeKvN8";

export default function CertificadosScreen() {
  return (
    <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.title}>
          Certificados 
        </Text>

        {/* Botão de acesso ao Drive */}
        <TouchableOpacity
          style={styles.driveButton}
          onPress={() => Linking.openURL(GOOGLE_DRIVE_LINK)}
        >
          <Text style={styles.driveButtonText}>Acessar Certificados no Drive</Text>
        </TouchableOpacity>

        {/* Cards dos certificados */}
        {CERTIFICADOS_DATA.map((certificado, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.cardTitle}>{certificado.titulo}</Text>
            <Text style={styles.cardDescription}>{certificado.detalhes}</Text>
          </View>
        ))}

      </ScrollView>
    </LinearGradient>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 20,
    textAlign: "center",
  },
  driveButton: {
    backgroundColor: "#ffffff33",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ffffff55",
    marginBottom: 25,
  },
  driveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#ffffff15",
    width: "100%",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ffffff22",
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardDescription: {
    color: "#ddd",
    fontSize: 16,
    lineHeight: 22,
  },
});
