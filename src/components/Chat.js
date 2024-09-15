import React from "react";
import ChatBot from "react-simple-chatbot";

// Define the steps for the Fruits.AI chatbot
const steps = [
  // Greeting and Introduction
  {
    id: "1",
    message: "Welcome to Fruits.AI! How can I assist you today?",
    trigger: "options",
  },

  // Main Options
  {
    id: "options",
    options: [
      { value: "suggest", label: "Suggest me a fruit", trigger: "suggestFruit" },
      { value: "nutrition", label: "Nutritional information", trigger: "nutritionOptions" },
      { value: "order", label: "Place an order", trigger: "order" },
      { value: "faq", label: "FAQ", trigger: "faq" },
      { value: "support", label: "Customer Support", trigger: "support" },
    ],
  },

  // Fruit Suggestions
  {
    id: "suggestFruit",
    message: "What kind of fruit do you like? Sweet or Sour?",
    trigger: "fruitPreference",
  },
  {
    id: "fruitPreference",
    options: [
      { value: "sweet", label: "Sweet", trigger: "sweetFruits" },
      { value: "sour", label: "Sour", trigger: "sourFruits" },
    ],
  },
  {
    id: "sweetFruits",
    message: "You should try Mango, Banana, or Watermelon. Would you like to know more?",
    trigger: "moreOnFruits",
  },
  {
    id: "sourFruits",
    message: "You might like Lemon, Pineapple, or Green Apple. Would you like to know more?",
    trigger: "moreOnFruits",
  },
  {
    id: "moreOnFruits",
    options: [
      { value: "yes", label: "Yes", trigger: "nutritionOptions" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },

  // Nutritional Information
  {
    id: "nutritionOptions",
    message: "Which fruit's nutritional information would you like to know?",
    trigger: "chooseFruitForNutrition",
  },
  {
    id: "chooseFruitForNutrition",
    options: [
      { value: "banana", label: "Banana", trigger: "bananaInfo" },
      { value: "apple", label: "Apple", trigger: "appleInfo" },
      { value: "mango", label: "Mango", trigger: "mangoInfo" },
    ],
  },
  {
    id: "bananaInfo",
    message:
      "A Banana contains: \n- Calories: 89 \n- Carbs: 22.8g \n- Protein: 1.1g \nWould you like to know more?",
    trigger: "moreInfo",
  },
  {
    id: "appleInfo",
    message:
      "An Apple contains: \n- Calories: 52 \n- Carbs: 14g \n- Protein: 0.3g \nWould you like to know more?",
    trigger: "moreInfo",
  },
  {
    id: "mangoInfo",
    message:
      "A Mango contains: \n- Calories: 60 \n- Carbs: 15g \n- Protein: 0.8g \nWould you like to know more?",
    trigger: "moreInfo",
  },
  {
    id: "moreInfo",
    options: [
      { value: "yes", label: "Yes", trigger: "nutritionOptions" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },

  // Order Placement
  {
    id: "order",
    message: "What fruit would you like to order?",
    trigger: "chooseFruitOrder",
  },
  {
    id: "chooseFruitOrder",
    options: [
      { value: "banana", label: "Banana", trigger: "bananaOrder" },
      { value: "apple", label: "Apple", trigger: "appleOrder" },
      { value: "mango", label: "Mango", trigger: "mangoOrder" },
    ],
  },
  {
    id: "bananaOrder",
    message: "How many kilograms of Bananas would you like to order?",
    trigger: "quantity",
  },
  {
    id: "appleOrder",
    message: "How many kilograms of Apples would you like to order?",
    trigger: "quantity",
  },
  {
    id: "mangoOrder",
    message: "How many kilograms of Mangoes would you like to order?",
    trigger: "quantity",
  },
  {
    id: "quantity",
    user: true,
    trigger: "confirmOrder",
  },
  {
    id: "confirmOrder",
    message: "Thank you for your order! We'll process it shortly.",
    end: true,
  },

  // FAQ
  {
    id: "faq",
    message: "What would you like to ask?",
    trigger: "faqOptions",
  },
  {
    id: "faqOptions",
    options: [
      { value: "delivery", label: "Delivery Time", trigger: "deliveryFAQ" },
      { value: "payment", label: "Payment Options", trigger: "paymentFAQ" },
    ],
  },
  {
    id: "deliveryFAQ",
    message: "Our standard delivery time is within 2-3 business days.",
    trigger: "askMore",
  },
  {
    id: "paymentFAQ",
    message: "We accept all major credit cards, PayPal, and Apple Pay.",
    trigger: "askMore",
  },
  {
    id: "askMore",
    options: [
      { value: "yes", label: "Yes", trigger: "faqOptions" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },

  // Customer Support
  {
    id: "support",
    message:
      "You can reach out to our support team at support@fruits.ai or call 1-800-FRUITS-AI.",
    trigger: "end",
  },

  // End
  {
    id: "end",
    message: "Thank you for using Fruits.AI. Have a fruity day!",
    end: true,
  },
];

function SecondBot() {
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Fruits.AI Chatbot</h1>
      <ChatBot
        steps={steps}
        style={{
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
        botAvatar="https://www.clipartkey.com/mpngs/m/315-3158064_vector-chatbot-icon.png"
        userAvatar="https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png"
        customStyle={{
          backgroundColor: "#f5f8fb",
        }}
        headerTitle="Fruits.AI Assistant"
      />
    </div>
  );
}

export default SecondBot;
