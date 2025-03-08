
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";


const API_KEY = "AIzaSyDTMqspY_C4KUwAqozRE7STorg0-HZD2yU";


function createPromptImage(previousConversation, symptoms, diagnosis) {
 console.log("createPromptImage opened"+"previousConversation"+previousConversation+"symptoms"+symptoms+"diagnosis"+diagnosis)
 
    return `Suppose you are a trained doctor. Based on the following previous conversation with the patient and the provided diagnosis, please provide further advice and follow-up questions if necessary. ` +
        `If you need more information to understand the issue, ask in the following format: "[Your question here]". ` +
        `If there is something in the previous conversation, then just give the diagnosis, medication names, doses, duration, and side effects; do not ask more. ` +
        `Ensure you provide enough detail for effective diagnosis and advice. ` +
        `If a diagnosis can be made, provide it along with general advice and medication suggestions in this JSON format:\n` +
        `{\n` +
        `  "followUpRequired": "[Yes/No]",\n` +
        `  "questions": [\n` +
        `    {"question": "[Your follow-up question here]"},\n` +
        `    {"question": "[Your follow-up question here]"}\n` +
        `  ],\n` +
        `  "diagnosis": {\n` +
        `    "condition": "[The diagnosis condition here]",\n` +
        `    "certainty": "[Low/Medium/High]"\n` +
        `  },\n` +
        `  "advice": {\n` +
        `    "generalAdvice": "[Your general advice here]",\n` +
        `    "severity": "[Mild/Moderate/Severe]",\n` +
        `    "actionRequired": "[Actions the patient should take here]",\n` +
        `    "lifestyleChanges": [\n` +
        `      "[Suggestion 1]",\n` +
        `      "[Suggestion 2]"\n` +
        `    ],\n` +
        `    "preventativeMeasures": "[Suggestions for avoiding similar issues in the future (return String type only)]"\n` +
        `  },\n` +
        `  "medications": [\n` +
        `    {\n` +
        `      "name": "[Medication name 1]",\n` +
        `      "dose": "[Dosage]",\n` +
        `      "duration": "[Duration]",\n` +
        `      "sideEffects": [\n` +
        `        "[Side effect 1]",\n` +
        `        "[Side effect 2]"\n` +
        `      ],\n` +
        `      "timingAdvice": "[When to take medication]"\n` +
        `    },\n` +
        `    {\n` +
        `      "name": "[Medication name 2]",\n` +
        `      "dose": "[Dosage]",\n` +
        `      "duration": "[Duration]",\n` +
        `      "sideEffects": [\n` +
        `        "[Side effect 1]",\n` +
        `        "[Side effect 2]"\n` +
        `      ],\n` +
        `      "timingAdvice": "[When to take medication]"\n` +
        `    }\n` +
        `  ],\n` +
        `  "furtherTests": {\n` +
        `    "required": "[Yes/No]",\n` +
        `    "suggestedTests": [\n` +
        `      "[Test name 1]",\n` +
        `      "[Test name 2]"\n` +
        `    ]\n` +
        `  }\n` +
        `}\n` +
       
        `**Initial are Symptoms said by patient are **:\n${intialimageanalysis}` +
        `**Initial Diagnosis of image:**\n${intialimageanalysis}` +
        `**Symptom Analysis**:\n Please provide a brief analysis of the symptoms described.`;
}




function createPromptText(previousConversation, symptoms, diagnosis) {
  console.log("createPromptText opened"+"previousConversation"+previousConversation+"symptoms"+symptoms+"diagnosis"+diagnosis)
    return `Suppose you are a trained doctor. Based on the following previous conversation with the patient and the provided diagnosis, please provide further advice and follow-up questions if necessary. ` +
        `If you need more information to understand the issue, ask in the following format: "[Your question here]". ` +
        `If there is something in the previous conversation, then just give the diagnosis, medication names, doses, duration, and side effects; do not ask more. ` +
        `Ensure you provide enough detail for effective diagnosis and advice. ` +
        `If a diagnosis can be made, provide it along with general advice and medication suggestions in this JSON format:\n` +
        `{\n` +
        `  "followUpRequired": "[Yes/No]",\n` +
        `  "questions": [\n` +
        `    {"question": "[Your follow-up question here]"},\n` +
        `    {"question": "[Your follow-up question here]"}\n` +
        `  ],\n` +
        `  "diagnosis": {\n` +
        `    "condition": "[The diagnosis condition here]",\n` +
        `    "certainty": "[Low/Medium/High]"\n` +
        `  },\n` +
        `  "advice": {\n` +
        `    "generalAdvice": "[Your general advice here]",\n` +
        `    "severity": "[Mild/Moderate/Severe]",\n` +
        `    "actionRequired": "[Actions the patient should take here]",\n` +
        `    "lifestyleChanges": [\n` +
        `      "[Suggestion 1]",\n` +
        `      "[Suggestion 2]"\n` +
        `    ],\n` +
        `    "preventativeMeasures": "[Suggestions for avoiding similar issues in the future (return String type only)]"\n` +
        `  },\n` +
        `  "medications": [\n` +
        `    {\n` +
        `      "name": "[Medication name 1]",\n` +
        `      "dose": "[Dosage]",\n` +
        `      "duration": "[Duration]",\n` +
        `      "sideEffects": [\n` +
        `        "[Side effect 1]",\n` +
        `        "[Side effect 2]"\n` +
        `      ],\n` +
        `      "timingAdvice": "[When to take medication]"\n` +
        `    },\n` +
        `    {\n` +
        `      "name": "[Medication name 2]",\n` +
        `      "dose": "[Dosage]",\n` +
        `      "duration": "[Duration]",\n` +
        `      "sideEffects": [\n` +
        `        "[Side effect 1]",\n` +
        `        "[Side effect 2]"\n` +
        `      ],\n` +
        `      "timingAdvice": "[When to take medication]"\n` +
        `    }\n` +
        `  ],\n` +
        `  "furtherTests": {\n` +
        `    "required": "[Yes/No]",\n` +
        `    "suggestedTests": [\n` +
        `      "[Test name 1]",\n` +
        `      "[Test name 2]"\n` +
        `    ]\n` +
        `  }\n` +
        `}\n` +
        `Previous Conversation**:\n"${previousConversation}` +
               
        `**Initial are Symptoms said by patient are **:\n${symptoms}` +
        `**Symptom Analysis**:\n Please provide a brief analysis of the symptoms described.`;
}



async function sendRequestToGemini(prompt) {
 console.log("sendRequestToGemini opened"+prompt)
    console.log("Prompt sent to Gemini: " + prompt);
   
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
   
    try {
        const result = await model.generateContent(prompt);
        const resultText = result.response.text();
        console.log("API Response: " + resultText);
        processApiResponse(resultText);
    } catch (error) {
        console.error("Error: " + error);
        document.getElementById("output").textContent = "Error communicating with the server.";
    }
}

function processApiResponse(responseText) {
    console.log("processApiResponse Opened" + responseText);
    try {

        if (responseText.trim().startsWith("{")) {
            const response = JSON.parse(responseText);
            console.log("API Response processed successfully", response);
            updateOutput(response);
        } else {
        
            console.log("Received plain text response:", responseText);
            document.getElementById("output").textContent = responseText;
        }
    } catch (error) {
        console.error("Error processing API response: " + error.message);
        sendRequestToGemini(currentSymptoms);
    }
}

function updateOutput(response) {
 console.log("updateOutput"+response)
    const outputTextView = document.getElementById("output");
    
  
    outputTextView.style.visibility = 'visible';
    
    
    outputTextView.innerHTML = "";

   
    const diagnosisContainer = document.createElement("div");
    diagnosisContainer.classList.add("diagnosis-container");
    diagnosisContainer.innerHTML = `
        <div class="diagnosis-header">Diagnosis Information</div>
        <div><strong>Diagnosis Condition:</strong> ${response.diagnosis.condition}</div>
        <div><strong>Certainty:</strong> ${response.diagnosis.certainty}</div>
        <div><strong>General Advice:</strong> ${response.advice.generalAdvice}</div>
        <div><strong>Lifestyle Changes:</strong> ${response.advice.lifestyleChanges.join(", ")}</div>
        <div><strong>Preventative Measures:</strong> ${response.advice.preventativeMeasures}</div>
    `;
    outputTextView.appendChild(diagnosisContainer); 

    
    if (response.medications && response.medications.length > 0) {
        const medicationsOutput = response.medications.map(medication => `
            <div>
                <strong>Name:</strong> ${medication.name}<br>
                <strong>Dose:</strong> ${medication.dose}<br>
                <strong>Duration:</strong> ${medication.duration}<br>
                <strong>Side Effects:</strong> ${medication.sideEffects.join(", ")}<br>
                <strong>Timing Advice:</strong> ${medication.timingAdvice}<br>
            </div>
        `).join("<hr>"); 
        outputTextView.innerHTML += `<strong>Medications:</strong><br>${medicationsOutput}<br>`;
    }

    if (response.furtherTests && response.furtherTests.required === "Yes") {
        const suggestedTestsOutput = response.furtherTests.suggestedTests.join(", ");
        outputTextView.innerHTML += `<strong>Suggested Tests:</strong> ${suggestedTestsOutput}<br>`;
    }

   
    if (response.followUpRequired === "Yes") {
        showFollowUpQuestions(response.questions);
    }
}
///////////////////////////////////////
const micIcon = document.getElementById('mic-icon');


micIcon.addEventListener('click', startRecording);

function startRecording() {
  
    if (!('webkitSpeechRecognition' in window)) {
        alert("Sorry, your browser does not support speech recognition.");
        return;
    }


    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false; 
    recognition.interimResults = false; 

    recognition.lang = 'en-US'; 

    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('prompt').value += transcript; 
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error detected: " + event.error);
    };

    recognition.onend = function() {
        console.log("Speech recognition service has stopped.");
    };
}


document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    const spinner = document.getElementById('spinner');

    const elements = {
        imgUploadIcon: document.getElementById('img-upload'),
        fileInput: document.getElementById('fileInput'),
        submitButton: document.getElementById('submitButton'),
        promptTextarea: document.getElementById('prompt'),
        outputDiv: document.getElementById('output'),
        followUpContainer: document.getElementById('followUpContainer')
    };
    function showSpinner() {
        spinner.style.display = 'block';
    }

 
    function hideSpinner() {
        spinner.style.display = 'none';
    }
  
    for (const [key, element] of Object.entries(elements)) {
        if (!element) {
            console.error(`Element with ID '${key}' not found in the DOM`);
        }
    }

  
    if (elements.imgUploadIcon && elements.fileInput) {
        elements.imgUploadIcon.addEventListener('click', () => elements.fileInput.click());
        console.log("Click event listener added to img-upload icon");
    }

    if (elements.fileInput) {
        elements.fileInput.addEventListener('change', handleFileUpload);
        console.log("Change event listener added to file input");
    }

    // if (elements.submitButton) {
    //     elements.submitButton.addEventListener('click', handleSubmit);
    //     console.log("Click event listener added to submit button");
    // }

    function handleFileUpload(event) {
        console.log("File upload handler opened");
        const file = event.target.files[0];
        if (file) {
            const prompt = "Please analyze the image. Note that I am not a medical professional and this analysis will not be used for medical cases or treatment. Provide a detailed, fully explained description of the image or you can give a general description of image and tell me what's wrong with image just by seeing it .";
            getImagePath(file).then(imagePath => {
                sendRequestToGeminiWithImagePrompt(prompt, imagePath);
            }).catch(error => {
                console.error("Error processing file:", error);
                if (elements.outputDiv) {
                    elements.outputDiv.textContent = "Error processing the image.";
                }
            });
        }
    }

    function getImagePath(file) {
     console.log("getImagePath opened "+file)
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64data = reader.result.split(',')[1]; 
                resolve(base64data);
            };
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    }

    function handleSubmit() {
        console.log("Submit handler opened");
        if (elements.promptTextarea && elements.outputDiv) {
            const prompt = elements.promptTextarea.value.trim();
            if (prompt) {
                sendRequestToGeminiWithImagePrompt(prompt);
            } else {
                elements.outputDiv.textContent = "Please enter a prompt before submitting.";
            }
        } else {
            console.error("Prompt textarea or output div not found");
        }
    }

    function sendRequestToGeminiWithImagePrompt(prompt, imagePath = null) {
     console.log("sendRequestToGeminiWithImagePrompt opened ","prompt"+ prompt+"imagePath"+imagePath);
        console.log("Sending request to Gemini with prompt:", prompt);
     
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const contentParts = [prompt];
        
        if (imagePath) {
            contentParts.push({
                inlineData: {
                    data: imagePath,
                    mimeType: "image/jpeg",
                },
            });
        }

        model.generateContent(contentParts)
            .then(result => {
                const resultText = result.response.text();
                console.log("API Response:", resultText);
                callGeminiAgain(resultText, imagePath, currentSymptoms,prompt)
                // processApiResponse(resultText);
            })
            .catch(error => {
                console.error("Error:", error);
                if (elements.outputDiv) {
                    elements.outputDiv.textContent = "Error communicating with the server.";
                }
            });
    }

   
});
var intialimageanalysis="";
var i=0;
////////////////////////////////////////////////////////////
async function callGeminiAgain(initialDiagnosis, imagePath, symptoms,prompt) {
  console.log("callGeminiAgain opened ","initialDiagnosis"+ initialDiagnosis+"imagePath"+imagePath+"symptoms"+symptoms+"prompt"+prompt);
    console.log("Starting callGeminiAgain method with initialDiagnosis: ", initialDiagnosis);

    const refinedPrompt = createRefinedPrompt(initialDiagnosis);
 console.log("Refined Prompt:"+refinedPrompt);
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const result = await model.generateContentStream(refinedPrompt);
        console.dir("API Result: ", result);

        const cleanedResultText = await processStream(result.stream);
        
        console.log("Cleaned API Response: ", cleanedResultText);
        const jsonResponse = parseJsonResponse(cleanedResultText);

     
        processDiagnosis(jsonResponse, symptoms, imagePath);

    } catch (error) {
        console.error("Error occurred:", error);
        console.log("Calling  Gemini API again ",++i);

        sendRequestToGeminiWithImagePrompt(prompt, imagePath);
    }
}


function createRefinedPrompt(initialDiagnosis) {
  console.log("createRefinedPrompt opened ", initialDiagnosis);
  
    return  `You are provided with text that analyzes medical information, potentially including medical diagnoses: '${initialDiagnosis}'. Your task is to extract the medical condition described in the text while filtering out disclaimers and irrelevant information.

**Instructions:**

1. **Analyze the entire text:** Carefully read the entire input text.
2. **Identify disclaimers:** Look for statements that explicitly state the AI's inability to provide medical diagnoses, such as 'I am an AI and cannot provide medical diagnoses...' or similar.
3. **Extract medical information:** Identify and extract any phrases, sentences, or sections that describe a medical condition, injury, or diagnosis.  This may include symptoms, observations about medical images, or potential diagnoses.
4. **Filter disclaimers:**  If the text ONLY contains a disclaimer like the one mentioned in step 2 and NO other medical information, it means there's no actual diagnosis provided.
5. **Return JSON response:** Return your analysis as a JSON object in the following format:

   - **If a medical condition IS described:**
     \`\`\`json
     {
       'diagnosis': 'yes',
       'message': 'brief explanation of the medical condition'
     }
     \`\`\`

   - **If NO medical condition is described OR the text ONLY contains a disclaimer:**
     \`\`\`json
     {
       'diagnosis': 'no',
       'message': 'why this is not a medical diagnosis (e.g., 'No medical information provided', 'Text only contains a disclaimer')'
     }
     \`\`\`

**Example:**

**Input Text:** 
'The X-ray reveals a fracture in the radius bone, consistent with a Colles' fracture. **Important Disclaimer:** I am an AI and cannot provide medical diagnoses...'

**JSON Output:**
\`\`\`json
{
  'diagnosis': 'yes',
  'message': 'Fracture in the radius bone, potentially a Colles' fracture.'
}
\`\`\`

**Important:** Your primary goal is to accurately extract general medical information given here. If any medical condition is described, even alongside a disclaimer, you should report it.  Only return 'no diagnosis' if the text provides absolutely no medical insights and only contains a generic disclaimer.`;
}

async function processStream(stream) {
 console.dir("processStream opened"+stream)
    let cleanedResultText = ""; 
    if (stream) {
        for await (const chunk of stream) {
            cleanedResultText += chunk.text(); 
        }
    } else {
        throw new Error("Expected result.stream to be an async iterable but received: " + stream);
    }
    return cleanedResultText;
}


function parseJsonResponse(cleanedResultText) {
 console.log("parseJsonResponse opened"+cleanedResultText)
    const jsonResponseStr = cleanedResultText.replace(/```json/, "").replace(/```/, "").trim();
    return JSON.parse(jsonResponseStr);
}

function processDiagnosis(jsonResponse, symptoms, imagePath) {
 console.log("processDiagnosis opened"+"jsonresponse"+jsonResponse+"symptoms"+symptoms+" imagePath"+ imagePath)
    const diagnosis = jsonResponse.diagnosis || "no";
    const message = jsonResponse.message || "Diagnosis not found";
intialimageanalysis=message;
console.log("intial image analysis data update:"+intialimageanalysis);
    if (diagnosis === "no") {
        console.log("No valid diagnosis found. Logging the message: ", message);
        sendRequestToGeminiWithImage(symptoms, imagePath);
    } else {
        console.log("Processed valid API response successfully.");
        const finalPrompt = createPromptImage("", symptoms, message);
       
       
        sendRequestToGemini(finalPrompt);
        
    }
}
//////////////////////////////////////////////////////////


function showFollowUpQuestions(questions) {
 console.log("Show follow Up Questions opened"+questions)
    const followUpContainer = document.getElementById("followUpContainer");
    followUpContainer.innerHTML = "<h3>Follow-Up Questions</h3>";

    questions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.textContent = question.question;

      
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("input-container"); 

        const answerInput = document.createElement("input");
        answerInput.placeholder = "Your answer...";
        answerInput.type = "text";
        answerInput.id = `answerInput${index}`; 

     
        // const micButton = document.createElement("button");
        // const micImage = document.createElement("img");
        // micImage.src = "mic.png"; 
        // micImage.alt = "Mic";
        // micImage.classList.add("mic-image"); 
        
        // micButton.classList.add("mic-button");
        // micButton.onclick = () => startVoiceRecognition(answerInput.id); 
        
        // micButton.appendChild(micImage); 
        

        
        inputContainer.appendChild(answerInput);
        // inputContainer.appendChild(micButton);

        followUpContainer.appendChild(questionElement);
        followUpContainer.appendChild(inputContainer); 
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Follow-Up Answers";
    submitButton.onclick = () => submitFollowUpAnswers(questions);
    followUpContainer.appendChild(submitButton);
}




function startVoiceRecognition(inputId) {

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Sorry, your browser does not support speech recognition.");
        return;
    }

    const recognition = new SpeechRecognition();
    
    recognition.continuous = false; 
    recognition.interimResults = false; 
    recognition.lang = 'en-US'; 

    recognition.onstart = function() {
        console.log("Voice recognition activated. Speak now.");
    };

 
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript; 
        console.log("Transcribed speech:", transcript);
        document.getElementById(inputId).value = transcript; 
    };

   
    recognition.onerror = function(event) {
        console.error("Voice recognition error: ", event.error);
        switch (event.error) {
            case 'network':
                alert("Network error occurred. Please check your internet connection.");
                break;
            case 'not-allowed':
                alert("Microphone access denied. Please allow microphone access.");
                break;
            default:
                alert("An error occurred during voice recognition: " + event.error);
        }
    };

    recognition.onend = function() {
        console.log("Voice recognition service has stopped.");
    };

    recognition.start();
}



//////////////////////////////////////////////////////////
function submitFollowUpAnswers(questions) {
 console.log("submitFollow up answers opened"+questions )
    const followUpConversation = []; 
    const followUpContainer = document.getElementById("followUpContainer");
    
    const inputs = followUpContainer.getElementsByTagName("input");
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i].question;
        const answer = inputs[i].value;

        followUpConversation.push(`Doctor: "${question}"\nPatient: "${answer}"\n`);
    }
    currentSymptoms += "\n\nFollow-up Conversation:\n" + followUpConversation.join("");
    const newPrompt = createPromptText( currentSymptoms,"", "");
    console.log("currentSymptoms"+currentSymptoms);
    console.log("New prompt after follow-up:", newPrompt);

    
    sendRequestToGemini(newPrompt);
    followUpContainer.innerHTML = "";



}
let currentSymptoms = ""; 
let intialsymptom="";
async function askGemini() {
 console.log("askGemini opened")
    const prompt = document.getElementById("prompt").value;
    intialsymptom=prompt;
    currentSymptoms=prompt;
    const previousConversation = ""; 
  
    const selectedImageUri = null; 
    const Prompt1 = await createPromptText(previousConversation, currentSymptoms, prompt);

sendRequestToGemini(Prompt1);
}


document.getElementById("submitButton").addEventListener("click", askGemini);
