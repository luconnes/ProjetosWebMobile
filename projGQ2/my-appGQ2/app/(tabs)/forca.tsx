const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,     // ↓ antes 50
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,       // ↓ antes 36
    color: "#fff",
    marginBottom: 15,
    fontWeight: "900",
    textAlign: "center",
  },
  hangman: {
    color: "#fff",
    fontSize: 20,       // ↓ antes 22
    textAlign: "center",
    lineHeight: 22,     // ↓ antes 25
    marginBottom: 10,
    fontFamily: "Courier",
    minHeight: 90,      // ↓ antes 120
  },
  status: {
    fontSize: 20,       // ↓ antes 24
    color: "#f55",
    marginBottom: 15,
    fontWeight: "bold",
  },
  word: {
    fontSize: 32,       // ↓ antes 40
    color: "#fff",
    letterSpacing: 8,   // ↓ antes 10
    marginVertical: 20, // ↓ antes 30
    fontWeight: "bold",
    textAlign: "center",
  },
  inputArea: {
    flexDirection: 'row',
    marginBottom: 15,   // ↓ antes 20
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 18,       // ↓ antes 20
    width: 130,         // ↓ antes 150
    height: 45,         // ↓ antes 50
    textAlign: "center",
    borderRadius: 8,
    marginRight: 8,     // ↓ antes 10
    color: COR_FUNDO_INICIAL,
    paddingHorizontal: 10,
    textTransform: 'uppercase',
  },
  playButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,  // ↓ antes 12
    paddingHorizontal: 18,
    borderRadius: 8,
    height: 45,           // ↓ antes 50
    justifyContent: 'center',
  },
  playButtonText: {
    color: "#fff",
    fontSize: 16,         // ↓ antes 18
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,         // ↓ antes 18
    color: "#fff",
    marginRight: 5,
  },
  wrongLetter: {
    fontSize: 16,         // ↓ antes 18
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
    marginBottom: 15,
    padding: 12,           // ↓ antes 15
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  finalMessageText: {
    fontSize: 22,          // ↓ antes 26
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 8,
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,    // ↓ antes 10
    paddingHorizontal: 25, // ↓ antes 30
    borderRadius: 5,
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,          // ↓ antes 18
    fontWeight: 'bold',
  }
});
