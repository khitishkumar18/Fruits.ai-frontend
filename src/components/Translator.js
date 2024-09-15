import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

// List of languages
const languageOptions = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "bn", label: "Bengali" },
  { value: "ta", label: "Tamil" },
  { value: "te", label: "Telugu" },
  { value: "kn", label: "Kannada" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "de", label: "German" },
];

const Translator = () => {
  const [inputText, setInputText] = useState(""); // User's input text
  const [translatedText, setTranslatedText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [error, setError] = useState("");

  const translateMessage = async (text, languageCode) => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${languageCode}`
      );
      if (response.data.responseData && response.data.responseData.translatedText) {
        setTranslatedText(response.data.responseData.translatedText);
        setError("");
      } else {
        setError("Translation error: Response data is not as expected.");
      }
    } catch (error) {
      setError("Translation error: Unable to fetch translation.");
      console.error("Error in translation", error);
    }
  };

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    if (inputText) {
      translateMessage(inputText, selectedOption.value);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    if (selectedLanguage.value) {
      translateMessage(e.target.value, selectedLanguage.value);
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>🌍 Fruits.AI Translator 🍎</h3>
      <input
        type="text"
        placeholder="Enter text to translate"
        value={inputText}
        onChange={handleInputChange}
        style={styles.input}
      />
      <Select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        options={languageOptions}
        placeholder="Select Language"
        styles={customSelectStyles}
      />
      {error && <p style={styles.errorText}>{error}</p>}
      <p style={styles.translatedText}>
        {translatedText || "🌟 Translation will appear here... 🌟"}
      </p>
    </div>
  );
};

// Custom CSS-in-JS styles
const styles = {
  container: {
    padding: "30px",
    maxWidth: "600px",
    margin: "40px auto",
    background: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backgroundImage: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
    color: "#333",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "2em",
    marginBottom: "20px",
    color: "#333",
    fontWeight: "bold",
    textShadow: "1px 1px 6px rgba(0, 0, 0, 0.2)",
  },
  input: {
    width: "100%",
    padding: "15px",
    fontSize: "18px",
    borderRadius: "15px",
    marginBottom: "20px",
    border: "2px solid #ccc",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    outline: "none",
  },
  translatedText: {
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#444",
    background: "rgba(255, 255, 255, 0.8)",
    padding: "15px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    textShadow: "1px 1px 6px rgba(0, 0, 0, 0.2)",
  },
  errorText: {
    color: "red",
    fontSize: "16px",
    margin: "10px 0",
  },
};

// Custom Select styles (react-select)
const customSelectStyles = {
  control: (base) => ({
    ...base,
    background: "rgba(255, 255, 255, 0.9)",
    border: "2px solid #ccc",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    padding: "5px",
    fontSize: "16px",
  }),
  menu: (base) => ({
    ...base,
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "10px",
    backgroundColor: state.isSelected
      ? "#ff9a9e"
      : "rgba(255, 255, 255, 0.9)",
    color: state.isSelected ? "#fff" : "#000",
    "&:hover": {
      backgroundColor: "#fad0c4",
    },
  }),
};

export default Translator;
