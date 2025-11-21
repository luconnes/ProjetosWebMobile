import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";

// --- CONFIGURAÇÕES DO JOGO ---
const palavras = ["banana", "uva", "manga", "abacaxi", "laranja"];
const MAX_ERROS = 6;

// CORES AJUSTADAS
const COR_FUNDO_INICIAL = "#1e3c72"; 
const COR_FUNDO_FIM_DE_JOGO = "#1e3c72"; 

// Definição das partes do boneco da forca (para 0 a 6 erros)
const partesForca = [
  // 0 erros
  `
  
  
  
  `,
  // 1 erro
  `
  O
  
  
  `,
  // 2 erros
  `
  O
  |
  
  `,
  // 3 erros
  `
  O
 /|
  
  `,
  // 4 erros
  `
  O
 /|\\
  
  `,
  // 5 erros
  `
  O
 /|\\
  /
  `,
  // 6 erros (Game Over)
  `
  O
 /|\\
  / \\
  `,
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
  const [mensagemFinal, setMensagemFinal] = useState(''); 

  // Status do jogo
  const ganhou = palavraSecreta.split("").every((l) => tentativas.includes(l));
  const perdeu = letrasErradas.length >= MAX_ERROS;

  // Efeito colateral para definir a mensagem final assim que o jogo terminar
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

  // Função para reiniciar o jogo
  const resetarJogo = () => {
    const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraSecreta(novaPalavra);
    setTentativas([]);
    setLetrasErradas([]);
    setLetra("");
    setBackground(COR_FUNDO_INICIAL);
    setJogoFinalizado(false);
    setMensagemFinal('');
  };

  // Função principal para processar a jogada
  const executarJogada = useCallback(() => {
    
    if (jogoFinalizado) {
      setLetra("");
      return;
    }
    
    const chute = letra.toLowerCase().trim();

    Keyboard.dismiss(); // Esconde o teclado

    // Validação de entrada: deve conter apenas letras
    if (!chute.match(/^[a-záéíóúâêîôûãõç]+$/i)) {
      Alert.alert("Aviso", "A entrada deve conter apenas letras.");
      setLetra("");
      return;
    }

    // ⚠️ LÓGICA DE CHUTE DE PALAVRA COMPLETA (MAIS DE UMA LETRA)
    if (chute.length > 1) {
      if (chute === palavraSecreta) {
        // VENCE
        setTentativas(palavraSecreta.split("")); 
        // A mensagem final de vitória será disparada pelo useEffect
      } else {
        // PERDE AUTOMATICAMENTE (Se a palavra for errada)
        Alert.alert(
          "💀 Game Over",
          `Você chutou a palavra "${chute.toUpperCase()}" e errou! Perdeu automaticamente! A palavra era: ${palavraSecreta.toUpperCase()}`
        );
        // --- CORREÇÃO APLICADA AQUI ---
        // Força o Game Over, preenchendo o array com espaços vazios para não aparecer na lista de "Letras erradas"
        setLetrasErradas(new Array(MAX_ERROS).fill(' ')); 
        setBackground(COR_FUNDO_FIM_DE_JOGO);
        setJogoFinalizado(true);
      }
      setLetra("");
      return;
    }

    // LÓGICA PARA CHUTE DE UMA ÚNICA LETRA

    // Validação de letra já tentada
    if (tentativas.includes(chute) || letrasErradas.includes(chute)) {
      Alert.alert("Aviso", `Você já tentou a letra "${chute.toUpperCase()}"!`);
      setLetra("");
      return;
    }

    // ACERTO
    if (palavraSecreta.includes(chute)) {
      setTentativas([...tentativas, chute]);
    }
    // ERRO
    else {
      setLetrasErradas([...letrasErradas, chute]);
    }

    setLetra(""); // Limpa o input
  }, [letra, tentativas, letrasErradas, palavraSecreta, jogoFinalizado]);
  
  // Formata a palavra para exibição (letras certas ou _)
  const exibirPalavra = palavraSecreta
    .split("")
    .map((l) => (tentativas.includes(l) ? l.toUpperCase() : "_"))
    .join(" ");

  // --- RENDERIZAÇÃO DA INTERFACE ---
  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={styles.title}>Jogo da Forca</Text>

      {/* Desenho da forca */}
      <Text style={styles.hangman}>{hangman}</Text>

      {/* Status de Erros */}
      <Text style={styles.status}>
        ERROS: {letrasErradas.length} / {MAX_ERROS}
      </Text>

      {/* Palavra Secreta */}
      <Text style={styles.word}>
        {exibirPalavra}
      </Text>

      {/* Exibe o resultado final e o botão de reset */}
      {(ganhou || perdeu) && (
        <View style={styles.finalMessageContainer}>
            <Text style={styles.finalMessageText}>
                {mensagemFinal}
            </Text>
            <TouchableOpacity 
                style={styles.resetButton} 
                onPress={resetarJogo}
                activeOpacity={0.7}
            >
                <Text style={styles.resetButtonText}>JOGAR NOVAMENTE</Text>
            </TouchableOpacity>
        </View>
      )}

      {/* Input e Botão de Jogada (Só aparecem se o jogo não tiver terminado) */}
      {!jogoFinalizado && (
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Digite uma letra ou a palavra"
            placeholderTextColor="#888"
            value={letra}
            onChangeText={setLetra}
            maxLength={palavraSecreta.length} // Limita o input ao tamanho da palavra
            onSubmitEditing={executarJogada} 
            editable={!jogoFinalizado}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.playButton}
            onPress={executarJogada}
            activeOpacity={0.7}
          >
            <Text style={styles.playButtonText}>CHUTAR</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Letras Erradas */}
      <View style={styles.row}>
        <Text style={styles.infoText}>Letras erradas: </Text>
        {letrasErradas
            .filter(l => l.length === 1 && l.trim() !== '') // Filtra palavras e espaços vazios
            .map((l, i) => (
          <Text key={i} style={styles.wrongLetter}>
            {l.toUpperCase()}{" "}
          </Text>
        ))}
      </View>
    </View>
  );
}

// --- ESTILOS ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "900",
  },
  hangman: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 20,
    fontFamily: "Courier",
    minHeight: 120, 
  },
  status: {
    fontSize: 24,
    color: "#f55",
    marginBottom: 20,
    fontWeight: "bold",
  },
  word: {
    fontSize: 40,
    color: "#fff",
    letterSpacing: 10,
    marginVertical: 30,
    fontWeight: "bold",
  },
  inputArea: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 20,
    width: 150,
    height: 50,
    textAlign: "center",
    borderRadius: 8,
    marginRight: 10,
    color: COR_FUNDO_INICIAL,
    paddingHorizontal: 10,
    textTransform: 'uppercase', 
  },
  playButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
  },
  playButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 18,
    color: "#fff",
    marginRight: 5,
  },
  wrongLetter: {
    fontSize: 18,
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
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  finalMessageText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});