import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";


const API_KEY = "AIzaSyB02yYJ-YslH0c7KmCBiC7iQCHPiPO2xXg";



const firebaseConfig = {
    "type": "service_account",
    "project_id": "smartmed-7c994",
    "private_key_id": "b14ecf55b836799cb6f55e90d863136551c56bc1",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+uNUb9jTLkvGn\nCwyZcl9FRFgeMA7JuQbwmAK2k1geMP+ihRnXV0NQ17td9F7q4C6CqcXjEkBgkSJ/\noL8mFIGiW4rOhi82b4DdjqYmDBbrgJ2nYjFvBfcf0/+cUZgn1ig3Hu450VQPwm93\nRikgBMeDjXfnjE5VZx20a7S0kd85fAVpLENsNELxvNdBtngkBdZMsYl4Vx9gkIj0\nIUYmRQE58FquxHy1b58ihUIHZrOn5ApxG5WUEp4ndS3Kf/MWpIhDtJGB00iqC8u2\n8WvysPTrvhYKM1woseNhnSO+r4HnAo2QzT6i82Xq5b2K1j2bx7GEJmsL0yoxVZ55\nW5KW0snrAgMBAAECggEAMeeSV9U2HliOY9u3ycUMGcdW2VtQ20bPgo/8EcL/STMg\nCOoUB21df19btyt01LehY+5BifeiIcKISOYKbk/qVc3nRcAFxZQqn46uegEq1Cec\n2QoQDlF8xvbFiSUuj6nxbu7offeAq/kACrEwnKCzhgAz8kIb0yv+sVGHgMI0q0kM\nOcNzx5aVTc+rN1PmYl1+jFMuTK0yTKSTtzkFC5Z/K8xl6/h4Bguk0MYXVuyqpnwO\nQKFxB5U9ZUmSzgKyzQbUieRINB73pddDpVaVMwCpaJq9pj1Nv1inMwpMtywLUYCs\n2pnIcdoz28X4IhluiXKKFhHhfOEb/PZMmhdQcH+TMQKBgQD9LaznrKQ6/evAzW/f\nGOAc+DqLunt9PkkDiDka6GDFlTMg+I10y6mOKi/vzEoVG5y4XgZVsbq7TtUBtyP+\nYFQz4xjxAwMVbJKjjFoKwz+SYEIVMaEyYVL5TS2r+jSCXhKYW6LiLV3l3VRp4mJF\nw9a9q1QKZdbJrO/Hfj6F/SYncQKBgQDA2PefAA4xV9CvKh37XZlNEl2l+NzSDI90\ntGVTJNGRj0N7G5DNlIW/0BwsbKi8gc2gyCeFAJtNnSTTIX8SA2b1yZ/jOCl31OS/\nCA0PTyNVQS0LCPCSGpNm6nTrnMoU5ZNjjAZBkFGOzXmfMd491Gq+214ZZgvFK8Vd\nowtlWkAxGwKBgQCK8wZyH84CkllQ927ugjh9rb5z8WTU19o6lgjBO8fgqIHnFoKM\nFzp3S7ADa5s8+mqIxRG09lYFdr5wspKOiU+tKnYF0CFhILVaDS1dusqpCys5doOB\nouhm6nSmbitjYT3TYHeEqmFeRpqNgjFtGI5CikUVb87x4He4hRDLeKP4AQKBgDLD\n6stsVFAg8cpqp+HXzddAEm7yiA6zR8BNDK9KbfCHahgqNYAorNzFh+UZ5YFaGitN\nBTo54qgXye3aT30KcDwbi39g9WmaHW08TVPOXVrAAX96JvoPDOZ2qbisWXYOyTHX\nVn5D43RYGsARfJOCK2d6j9bXyhlpYFc56HIRw/wpAoGAdrhWLDf+zxBSTObDViC+\nMhsdSYqX/GDNNDj7wdfE2CWfxUT4Y6FNFkh+oKeERNYhNiuy1ZggS03bQ6uJIgW/\nm/2Fg92GKx32xEJNF0ZPkKSky7vPNk2S3YYidQAYHBgkFkjCkJ4I5mS/m0Yzkxfz\ncVLUZIzss/DLEzVqRijUkTc=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-ijsqd@smartmed-7c994.iam.gserviceaccount.com",
    "client_id": "114224530205033588775",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ijsqd%40smartmed-7c994.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com",
    "databaseURL": "https://smartmed-7c994-default-rtdb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const patientId = "0Kf0yUzc4Oa1nDUda8s1HjtKJz12"; 

async function init() {
    try {
         const sessionId = sessionStorage.getItem('sessionId');
         console.log("Retrieved Session ID from sessionStorage: " + sessionId);
        if (sessionId) {
            await fetchUserData();
            await fetchSessionData(sessionId);

           setupUserQueryHandler();
            // console.log("User data :"+userData);
            // console.log("Session Data: "+ sessionData);
            // const prompt = createPrompt(userData, sessionData, userQuery); 
            // console.log(prompt);
            // callGemini(prompt);
            

        } else {
            document.getElementById('session-details').innerHTML = '<p>No session ID provided.</p>';
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', init);


function setupUserQueryHandler() {
    const sendQueryButton = document.getElementById('send-query-button');
    sendQueryButton.addEventListener('click', async () => {
        const userQuery = document.getElementById('user-query-input').value;
        if (userQuery.trim()) {
            console.log("User query: " + userQuery);
            const prompt = createPrompt(userData, sessionData, userQuery);
            console.log(prompt);
            await callGemini(prompt); 
            document.getElementById('user-query-input').value = ''; 
        } else {
            alert("Please enter a query before sending.");
        }
    });
}

let userData="";
let sessionData="";
let prompt11=""

function fetchUserData() {
    return new Promise((resolve, reject) => {
        const userdataRef = database.ref(`patients/${patientId}/userdata`);
        
        userdataRef.once('value', (snapshot) => {
            userData = snapshot.val(); 
            console.log("User data :"+userData);
            console.log("User  data1 :", userData);
            if (userData) {
                console.log("User data2 :"+userData);
                displayUserData(userData);
                resolve(userData);
            } else {
                document.getElementById('user-details').innerHTML = '<p>No user data found.</p>';
                reject('No user data found');
            }
        });
    });
}
function displayUserData(userData) {
    const userDetailsContainer = document.getElementById('user-details');
    
    userDetailsContainer.innerHTML = `
        <h3>User Information</h3>
        <p><strong>Name:</strong> ${userData.fullName || 'N/A'}</p>
        <p><strong>Email:</strong> ${userData.email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${userData.phone || 'N/A'}</p>
        <p><strong>Date of Birth:</strong> ${userData.dob || 'N/A'}</p>
         <p><strong>Gender:</strong> ${userData.gender || 'N/A'}</p>
          <p><strong>Height (cm):</strong> ${userData.height || 'N/A'}</p>
           <p><strong>Weight (kg):</strong> ${userData.weight || 'N/A'}</p>
    `;
}

function fetchSessionData(sessionId) {
    return new Promise((resolve, reject) => {
        const sessionRef = database.ref(`patients/${patientId}/sessions/${sessionId}`);
        
        sessionRef.once('value', (snapshot) => {
            sessionData = snapshot.val();
            if (sessionData) {
                displaySessionData(sessionId, sessionData);
                resolve(sessionData);
                
            } else {
                document.getElementById('session-details').innerHTML = '<p>Session not found.</p>';
                reject('Session not found');
            }
        });
    });
}

function displaySessionData(sessionId, sessionData) {
    const sessionDetailsContainer = document.getElementById('session-details');
console.log(sessionData);
    let conversationsHTML = '';
    if (sessionData.conversations) {
        conversationsHTML = Object.entries(sessionData.conversations).map(([timestamp, conv]) => `
            <div class="conversation-entry">
                <p><strong>Time:</strong> ${timestamp}</p>
                <p><strong>Symptoms:</strong> ${conv.symptoms || 'N/A'}</p>
                <p><strong>Text:</strong> ${conv.text || 'N/A'}</p>
            </div>
        `).join('');
    }

    let diagnosisHTML = '';
    if (sessionData.diagnosis) {
        const advice = sessionData.diagnosis.advice || {};
        diagnosisHTML = `
            <h4>Diagnosis</h4>
            <p><strong>Condition:</strong> ${sessionData.diagnosis.condition || 'Unknown'}</p>
            <p><strong>Certainty:</strong> ${sessionData.diagnosis.certainty || 'N/A'}</p>
            <p><strong>Severity:</strong> ${sessionData.diagnosis.severity || 'N/A'}</p>
            <h5>Advice</h5>
            <p><strong>Action Required:</strong> ${advice.actionRequired || 'N/A'}</p>
            <p><strong>General Advice:</strong> ${advice.generalAdvice || 'N/A'}</p>
        `;
    }

    let medicationsHTML = '';
    if (sessionData.medications) {
        medicationsHTML = Object.entries(sessionData.medications).map(([index, med]) => `
            <div class="medication-entry">
                <p><strong>Name:</strong> ${med.name}</p>
                <p><strong>Dose:</strong> ${med.dose}</p>
                <p><strong>Duration:</strong> ${med.duration}</p>
                <p><strong>Timing Advice:</strong> ${med.timingAdvice}</p>
                <p><strong>Side Effects:</strong> ${Object.values(med.sideEffects || {}).join(', ')}</p>
            </div>
        `).join('');
    }

    sessionDetailsContainer.innerHTML = `
        <h2>Medical Data</h2>
        <div class="conversations">
            <h3>Conversations</h3>
            ${conversationsHTML}
        </div>
        <div class="diagnosis">
            ${diagnosisHTML}
        </div>
        <div class="medications">
            <h3>Medications</h3>
            ${medicationsHTML}
        </div>
    `;
}
///////////////////////////////////////////////////////////////

function calculateBMI(weight, height) {
    const heightInMeters = height / 100; 
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2); 
}

function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function createPrompt(userData, sessionData, userQuery) {
    let promptBuilder = [];
    console.log("userData:"+userData);
    console.log("sessionData:"+sessionData);
    const bmi = calculateBMI(userData.weight, userData.height);
    const age = calculateAge(userData.dob);
    promptBuilder.push("Objective: Create a comprehensive and customized medical plan for the user that focuses on recovery and overall well-being. The user can modify this plan and ask questions regarding it.\n\n");

    promptBuilder.push("User Data:\n");
    promptBuilder.push(`Full Name: ${userData.fullName || 'N/A'}\n`);
    promptBuilder.push(`DOB: ${userData.dob || 'N/A'}\n`);
    promptBuilder.push(`Gender: ${userData.gender || 'N/A'}\n`);
    promptBuilder.push(`Height: ${userData.height || 'N/A'} cm\n`);
    promptBuilder.push(`Weight: ${userData.weight || 'N/A'} kg\n`);
    promptBuilder.push(`Email: ${userData.email || 'N/A'}\n`);
    promptBuilder.push(`Phone: ${userData.phone || 'N/A'}\n`);
    promptBuilder.push(`Emergency Contact: ${userData.emergencyContact || 'N/A'}\n`);
    promptBuilder.push(`Age: ${age || 'N/A'}\n`);
    promptBuilder.push(`BMI: ${bmi || 'N/A'}\n\n`);

    promptBuilder.push("Current Health Conditions:\n");


    if (sessionData.diagnosis && sessionData.diagnosis.condition) {
        promptBuilder.push(`${sessionData.diagnosis.condition}\n\n`);
    } else {
        promptBuilder.push('Unknown\n\n');
    }

    promptBuilder.push("Current Medications:\n");
    const medications = sessionData.medications || [];
    if (medications.length > 0) {
        medications.forEach(med => {
            promptBuilder.push(`Name: ${med.name || 'N/A'}, Dose: ${med.dose || 'N/A'}, Duration: ${med.duration || 'N/A'}, Timing Advice: ${med.timingAdvice || 'N/A'}\n`);
        });
    } else {
        promptBuilder.push('No medications listed\n');
    }
    promptBuilder.push("\n");

    promptBuilder.push("Previous Conversations:\n");
    const chatMessages = sessionData.conversations || {};
    for (const [timestamp, message] of Object.entries(chatMessages)) {
        promptBuilder.push(`${message.role}: ${message.text}\n`);
    }

    promptBuilder.push(`User Query: ${userQuery}\n\n`);

    promptBuilder.push("Instructions for AI: Based on the user data and their query, generate a comprehensive and customized medical plan focusing on recovery and overall well-being in JSON format. Use the following structure:\n");
    promptBuilder.push("{\n");
    promptBuilder.push("  \"medical_plan\": {\n");
    promptBuilder.push("    \"full_name\": \"[Full Name]\",\n");
    promptBuilder.push("    \"dietary_suggestions\": \"[Include detailed dietary suggestions, considering any specific restrictions or preferences]\",\n");
    promptBuilder.push("    \"exercise_recommendations\": \"[Include specific types of exercises, durations, and frequency tailored to the user's condition]\",\n");
    promptBuilder.push("    \"mental_health_strategies\": \"[Include strategies for managing stress and promoting mental well-being]\",\n");
    promptBuilder.push("    \"sleep_hygiene_tips\": \"[Include recommendations for improving sleep quality]\",\n");
    promptBuilder.push("    \"further_tests\": \"[Include any recommended tests or follow-ups to monitor progress]\",\n");
    promptBuilder.push("    \"lifestyle_changes\": \"[Suggest practical lifestyle changes to support recovery, like hydration, avoiding alcohol, etc.]\",\n");
    promptBuilder.push("    \"follow_up_recommendations\": \"[Specify any follow-up appointments or actions needed to monitor health progress]\"\n");
    promptBuilder.push("  },\n");
    promptBuilder.push("  \"user_response\": \"[Response to User Query]\"\n");
    promptBuilder.push("}\n");

    promptBuilder.push("\nEnsure the JSON response is valid and well-structured, and consider any additional factors that may impact the user's recovery and overall health.");

    return promptBuilder.join('');
}



var i=0;

async function callGemini(prompt) {
    console.log("Starting callGeminiAgain", prompt);
prompt11=prompt;
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const result = await model.generateContent(prompt);
        
       
        const resultText = typeof result.response.text === 'function' ? result.response.text() : result.response.text;
        console.log("API Response: " + resultText);

     
        const sanitizedText = sanitizeJsonResponse(resultText);
        console.log(sanitizedText);
        
        onGeminiResponse(sanitizedText);

    } catch (error) {
        console.error("Error occurred:", error);
        console.log("Calling Gemini API again", ++i);
        callGemini(prompt11);
    }
}


function sanitizeJsonResponse(jsonString) {
  
    if (typeof jsonString === 'string') {
        return jsonString.replace(/\n/g, " "); 
    } else {
        console.warn("Expected a string for sanitization, but got:", typeof jsonString);
        return jsonString; 
    }
}




/////////////////////////////////////////////////////////////////////////////////
function onGeminiResponse(response) {
    console.log("Gemini Response: ", response);

    
    response = response.trim().replace(/```json|```/g, '');

    response = response.replace(/\n/g, "\\n");

    try {
        const jsonResponse = JSON.parse(response);

        if (!jsonResponse.hasOwnProperty("medical_plan")) {
            console.error("Response does not contain medical_plan");
            alert("Invalid response format. Please try again.");
            askGemini(prompt1);  
            return;
        }

        const {
            full_name: fullName = "N/A",
            dietary_suggestions: dietarySuggestions = "N/A",
            exercise_recommendations: exerciseRecommendations = "N/A",
            mental_health_strategies: mentalHealthStrategies = "N/A",
            sleep_hygiene_tips: sleepHygieneTips = "N/A",
            further_tests: furtherTests = "N/A",
            lifestyle_changes: lifestyleChanges = "N/A",
            follow_up_recommendations: followUpRecommendations = "N/A"
        } = jsonResponse.medical_plan;

        const medicalPlanHtml = `
            <h2>Medical Plan for ${fullName}</h2>
            <h3>Dietary Suggestions</h3>
            <p>${dietarySuggestions}</p>
            <h3>Exercise Recommendations</h3>
            <p>${exerciseRecommendations}</p>
            <h3>Mental Health Strategies</h3>
            <p>${mentalHealthStrategies}</p>
            <h3>Sleep Hygiene Tips</h3>
            <p>${sleepHygieneTips}</p>
            <h3>Further Tests</h3>
            <p>${furtherTests}</p>
            <h3>Lifestyle Changes</h3>
            <p>${lifestyleChanges}</p>
            <h3>Follow-Up Recommendations</h3>
            <p>${followUpRecommendations}</p>
        `;

        document.getElementById("medical-plan-section").innerHTML = medicalPlanHtml;

        const userResponse = jsonResponse.user_response || "N/A";
        addChatMessage("AI", userResponse);

    } catch (error) {
        console.error("Error parsing JSON:", error);
        alert("Error processing response. Please try again.");
    }
}


function addChatMessage(role, message) {
    const chatContainer = document.getElementById("chat-container");
    if (!chatContainer) {
        console.error("Chat container not found");
        return; 
    }
    
    const messageElement = document.createElement("div");
    messageElement.className = role === "AI" ? "ai-message" : "user-message";
    messageElement.innerText = `${role}: ${message}`;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; 
}
