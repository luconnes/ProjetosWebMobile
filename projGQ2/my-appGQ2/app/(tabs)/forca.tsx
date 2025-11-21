import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
} from "react-native";

// --- CONFIGURAÇÕES DO JOGO ---
const palavras = [
  "servidor", "café", "compilação", "janela", "algoritmo", "bicicleta",
  "firewall", "chuva", "vetor", "relógio", "nuvem", "areia",
  "encapsulamento", "mesa", "kernel", "cadeira", "depuração", "fruta",
  "banco de dados", "lâmpada", "protocolo", "estrada", "API", "música",
  "byte", "montanha", "processador", "jardim", "token", "caminho",
  "pacote", "sol", "renderização", "livro", "repositório", "bola",
  "memória", "flor", "shell", "monitor", "teclado", "oceano",
  "script", "planeta", "lata", "função", "sofá", "árvore",
  "ponte", "variável", "cão", "diretório", "classe", "gato",
  "energia", "conexão", "ônibus", "operador", "sapato", "loop",
  "folha", "método", "cidade", "router", "piscina", "link",
  "tijolo", "framework"
];

const MAX_ERROS = 6;

// CORES
const COR_FUNDO_INICIAL = "#1e3c72"; 
const COR_FUNDO_FIM_DE_JOGO = "#1e3c72"; 

// Desenho da Forca
const partesForca = [
  `\n\n\n`,
  ` O\n\n`,
  ` O\n |\n`,
  ` O\n/|\n`,
  ` O\n/|\\\n`,
  ` O\n/|\\\n /\n`,
  ` O\n/|\\\n/ \\\n`,
];

export default function Forca() {
  const [palavraSecreta, setPalavraSecreta] = useState(
    palavras[Math.floor(Math.random() * palavras.length)]
  );
  const [tentativas, setTentativas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [letra, setLetra] = useState("");
  const [background, setBackground] = useState(COR_FUNDO_INICIAL);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [mensagemFinal, setMensagemFinal] = useState("");

  const ganhou = palavraSecreta.split("").every((l) => tentativas.includes(l));
  const perdeu = letrasErradas.length >= MAX_ERROS;

  React.useEffect(() => {
    if (ganhou && !jogoFinalizado) {
      setJogoFinalizado(true);
      setMensagemFinal("🎉 VOCÊ GANHOU!");
    } else if (perdeu && !jogoFinalizado) {
      setJogoFinalizado(true);
      setMensagemFinal(`💀 VOCÊ PERDEU! A palavra era: ${palavraSecreta.toUpperCase()}`);
    }
  }, [ganhou, perdeu, jogoFinalizado, palavraSecreta]);

  const hangman = partesForca[letrasErradas.length];

  const resetarJogo = () => {
    setPalavraSecreta(palavras[Math.floor(Math.random() * palavras.length)]);
    setTentativas([]);
    setLetrasErradas([]);
    setLetra("");
    setBackground(COR_FUNDO_INICIAL);
    setJogoFinalizado(false);
    setMensagemFinal("");
  };

  const executarJogada = useCallback(() => {
    if (jogoFinalizado) {
      setLetra("");
      return;
    }

    const chute = letra.toLowerCase().trim();
    Keyboard.dismiss();

    if (!chute.match(/^[a-záéíóúâêîôûãõç]+$/i)) {
      Alert.alert("Aviso", "Digite apenas letras.");
      setLetra("");
      return;
    }

    // Chute de palavra inteira
    if (chute.length > 1) {
      if (chute === palavraSecreta) {
        setTentativas(palavraSecreta.split(""));
      } else {
        Alert.alert(
          "💀 Game Over",
          `Você chutou "${chute.toUpperCase()}" e errou!\nA palavra era: ${palavraSecreta.toUpperCase()}`
        );
        setLetrasErradas(new Array(MAX_ERROS).fill(" "));
        setBackground(COR_FUNDO_FIM_DE_JOGO);
        setJogoFinalizado(true);
      }
      setLetra("");
      return;
    }

    // Chute de uma letra
    if (tentativas.includes(chute) || letrasErradas.includes(chute)) {
      Alert.alert("Aviso", `Você já tentou "${chute.toUpperCase()}"!`);
      setLetra("");
      return;
    }

    if (palavraSecreta.includes(chute)) {
      setTentativas([...tentativas, chute]);
    } else {
      setLetrasErradas([...letrasErradas, chute]);
    }

    setLetra("");
  }, [letra, tentativas, letrasErradas, palavraSecreta, jogoFinalizado]);

  const exibirPalavra = palavraSecreta
    .split("")
    .map((l) => (tentativas.includes(l) ? l.toUpperCase() : "_"))
    .join(" ");

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={styles.title}>Jogo da Forca</Text>

      <Text style={styles.hangman}>{hangman}</Text>

      <Text style={styles.status}>
        ERROS: {letrasErradas.length} / {MAX_ERROS}
      </Text>

      <Text style={styles.word}>{exibirPalavra}</Text>

      {(ganhou || perdeu) && (
        <View style={styles.finalMessageContainer}>
          <Text style={styles.finalMessageText}>{mensagemFinal}</Text>

          <TouchableOpacity style={styles.resetButton} onPress={resetarJogo}>
            <Text style={styles.resetButtonText}>JOGAR NOVAMENTE</Text>
          </TouchableOpacity>
        </View>
      )}

      {!jogoFinalizado && (
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Letra ou palavra"
            placeholderTextColor="#888"
            value={letra}
            onChangeText={setLetra}
            maxLength={palavraSecreta.length}
            onSubmitEditing={executarJogada}
            editable={!jogoFinalizado}
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.playButton} onPress={executarJogada}>
            <Text style={styles.playButtonText}>CHUTAR</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.row}>
        <Text style={styles.infoText}>Letras erradas: </Text>
        {letrasErradas
          .filter((l) => l.trim() !== "")
          .map((l, i) => (
            <Text key={i} style={styles.wrongLetter}>
              {l.toUpperCase()}{" "}
            </Text>
          ))}
      </View>
    </View>
  );
}

// --- ESTILOS (ajustados para caber no iPhone 12) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 15,
    fontWeight: "900",
    textAlign: "center",
  },
  hangman: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 10,
    fontFamily: "Courier",
    minHeight: 90,
  },
  status: {
    fontSize: 20,
    color: "#f55",
    marginBottom: 15,
    fontWeight: "bold",
  },
  word: {
    fontSize: 32,
    color: "#fff",
    letterSpacing: 8,
    marginVertical: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputArea: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 18,
    width: 130,
    height: 45,
    textAlign: "center",
    borderRadius: 8,
    marginRight: 8,
    color: COR_FUNDO_INICIAL,
    paddingHorizontal: 10,
    textTransform: "uppercase",
  },
  playButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    height: 45,
    justifyContent: "center",
  },
  playButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    color: "#fff",
    marginRight: 5,
  },
  wrongLetter: {
    fontSize: 16,
    color: "#ff4444",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  finalMessageContainer: {
    alignItems: "center",
    marginBottom: 15,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  finalMessageText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 8,
    textAlign: "center",
  },
  resetButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 10,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
