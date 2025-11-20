import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

const palavras: string[] = ["REACT", "JAVASCRIPT", "PYTHON", "COMPILER", "NEXTJS"];

const maxErros: number = 6; 

export default function Forca(): JSX.Element {
  
  const [palavraSecreta, setPalavraSecreta] = useState<string>("");
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  
  
  useEffect(() => {
    setPalavraSecreta(palavras[Math.floor(Math.random() * palavras.length)]);
  }, []);

 
  const reiniciar = (): void => {
    setPalavraSecreta(palavras[Math.floor(Math.random() * palavras.length)]);
    setLetrasUsadas([]);
    setLetrasErradas([]);
    setInput("");
  };

 
  const handleChute = (): void => {
    if (!palavraSecreta) return;
    const chute: string = input.toUpperCase().trim();
    
    
    if (!chute || letrasUsadas.includes(chute) || letrasErradas.includes(chute)) {
        setInput("");
        return;
    }
    
    
    if (chute.length > 1) {
      if (chute === palavraSecreta) {
        setLetrasUsadas(palavraSecreta.split("")); 
        setLetrasErradas([]);
      } else {
        
        setLetrasErradas(Array.from({ length: maxErros }, (_, i) => `E${i}`)); 
      }
      setInput("");
      return;
    }

    
    if (palavraSecreta.includes(chute)) {
      setLetrasUsadas([...letrasUsadas, chute]);
    } else {
      setLetrasErradas([...letrasErradas, chute]);
    }
    setInput("");
  };


  const gameOver: boolean = letrasErradas.length >= maxErros;

  const venceu: boolean = !!(palavraSecreta && palavraSecreta.split("").every(l => letrasUsadas.includes(l)));

  if (!palavraSecreta) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>

      
      <View style={styles.wordDisplay}>
        {palavraSecreta.split("").map((letra: string, i: number) => (
          <Text key={i} style={styles.letterSpace}>
            {letrasUsadas.includes(letra) ? letra : "_"}
          </Text>
        ))}
      </View>

      
      <View style={styles.hangmanArea}>
          
          <Text style={{ fontSize: 32, color: 'gray' }}> 
            [FORCA - {letrasErradas.length}/{maxErros}] 
          </Text>
      </View>

      
      <Text style={styles.infoText}>
        Tentativas restantes: {maxErros - letrasErradas.length}
      </Text>
      
      
      <View style={styles.inputArea}>
        <TextInput
          style={styles.textInput}
          onChangeText={setInput}
          value={input}
          autoCapitalize="characters"
          maxLength={palavraSecreta.length}
          editable={!gameOver && !venceu}
          onSubmitEditing={handleChute}
          placeholder={!gameOver && !venceu ? "Digite a letra ou palavra" : ""}
        />
        <Button 
            title="Chutar" 
            onPress={handleChute} 
            disabled={gameOver || venceu}
        />
      </View>

      
      <Text style={styles.infoText}>
        Letras erradas: 
        {letrasErradas.map((l: string, i: number) => (
          <Text key={i} style={styles.wrongLetter}> {l} </Text> 
        ))}
      </Text>

      
      {(gameOver || venceu) && (
        <View style={styles.endGameArea}>
          {venceu 
            ? <Text style={styles.messageWin}>🎉 Parabéns! Você venceu!</Text> 
            : <Text style={styles.messageLose}>💀 Game Over! A palavra era: {palavraSecreta}</Text>
          }
          <TouchableOpacity style={styles.button} onPress={reiniciar}>
              <Text style={styles.buttonText}>Reiniciar Jogo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        padding: 15, // Reduzido de 20 para 15
        backgroundColor: '#2a5298', 
    },
    title: {
        fontSize: 26, // Reduzido de 28 para 26
        fontWeight: 'bold',
        marginBottom: 20, // Reduzido de 30 para 20
        color: '#fff', 
    },
    wordDisplay: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center',
        flexWrap: 'wrap', // Permite que as letras quebrem a linha em palavras longas
    },
    letterSpace: {
        fontSize: 30, // Reduzido de 36 para 30
        fontWeight: 'bold',
        marginHorizontal: 3, // Reduzido de 5 para 3
        borderBottomWidth: 3,
        borderColor: '#fff', 
        paddingHorizontal: 5, 
        color: '#fff', 
    },
    inputArea: {
        flexDirection: 'row',
        marginBottom: 20,
        width: '95%', // Aumentado para usar mais largura
        justifyContent: 'center',
        maxWidth: 400,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    infoText: {
        fontSize: 16, // Reduzido de 18 para 16
        marginBottom: 10,
        color: '#fff', 
        fontWeight: '600',
    },
    wrongLetter: {
        color: '#ff6666', 
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
    },
    hangmanArea: {
        height: 180, // Reduzido de 200 para 180
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15, // Reduzido
        marginTop: 10,
        backgroundColor: '#4470b8', 
        borderRadius: 10,
    },
    endGameArea: {
        marginTop: 20, // Reduzido
        alignItems: 'center',
    },
    messageWin: {
        fontSize: 22, // Reduzido de 24 para 22
        color: '#ccffcc', 
        fontWeight: 'bold',
        marginBottom: 15,
    },
    messageLose: {
        fontSize: 22, // Reduzido de 24 para 22
        color: '#ffaaaa', 
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#58a0ff', 
        paddingVertical: 10, // Reduzido
        paddingHorizontal: 20, // Reduzido
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16, // Reduzido de 18 para 16
    }
});