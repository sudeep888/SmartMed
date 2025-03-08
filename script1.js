import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDTMqspY_C4KUwAqozRE7STorg0-HZD2yU";

async function askGemini() {
    const prompt = document.getElementById("prompt").value;
    const output = document.getElementById("output");

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

        const result = await model.generateContent(prompt);
        output.textContent = result.response.text();

    } catch (error) {
        console.error("Error:", error);
        output.textContent = "Error: Could not get response from Gemini.";
    }
}

window.askGemini = askGemini; 
