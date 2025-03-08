let chronicConditionsOptions = [];
let medicalHistoryOptions = [];
let allergiesOptions = [];
let emergencyContactNames = [];
let diagnoses = [];
let medications = {};
let names = [];


let patients = []; 

fetch('data.json')
    .then(response => {
        console.log("Response received:", response);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.dir("Data received:", data);
   
        chronicConditionsOptions = data.chronicConditionsOptions;
        medicalHistoryOptions = data.medicalHistoryOptions;
        allergiesOptions = data.allergiesOptions;
        emergencyContactNames = data.emergencyContactNames;
        diagnoses = data.diagnoses;
        medications = data.medications;
        names = data.names;

    })
    .catch(error => console.error('Error fetching data:', error));

function generateRandomPatientID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
    let patientID = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        patientID += characters[randomIndex];
    }
    return patientID;
}

function generateRandomPatients(numberOfRecords) {
    const patients = [];
    const genders = ["Male", "Female", "Non-binary", "Transgender", "Genderqueer", "Genderfluid", "Agender", "Bigender", "Two-Spirit", "Other"];
    const ethnicities = ["Caucasian", "African American", "Asian", "Hispanic", "Native American", "Middle Eastern", "Pacific Islander", "Mixed", "Caribbean", "South Asian", "Other"];

    const alcoholUseOptions = ["None", "Occasional", "Moderate", "Heavy"];
    const smokingStatusOptions = ["Never", "Former Smoker", "Current Smoker"];
    const exerciseFrequencyOptions = ["None", "1-2 times/week", "3-5 times/week", "Daily"];
    const dietOptions = ["Balanced", "High-Protein", "Vegan", "Vegetarian", "Keto", "Mediterranean"];
    const familyHistoryOptions = ["Heart Disease", "Diabetes", "Cancer", "Hypertension", "None"];
    const insuranceProviders = ["HealthFirst", "UnitedHealth", "Aetna", "Cigna", "Blue Cross"];
    const coverageTypes = ["Basic", "Premium", "Comprehensive"];
    const vaccinationStatusOptions = ["Up to date", "Not up to date", "Unknown"];

    for (let i = 0; i < numberOfRecords; i++) {
        const diagnosis = diagnoses[Math.floor(Math.random() * diagnoses.length)];
        const patient = {
            patientID: generateRandomPatientID(),
            name: names[Math.floor(Math.random() * names.length)],
            age: Math.floor(Math.random() * (90 - 18 + 1)) + 18,
            gender: genders[Math.floor(Math.random() * genders.length)],
            ethnicity: ethnicities[Math.floor(Math.random() * ethnicities.length)],
            weight: (Math.random() * (120 - 50) + 50).toFixed(1), 
            height: Math.floor(Math.random() * (200 - 150 + 1)) + 150, 
            bloodPressure: `${Math.floor(Math.random() * (160 - 90 + 1)) + 90}/${Math.floor(Math.random() * (100 - 60 + 1)) + 60}`,
            heartRate: Math.floor(Math.random() * (100 - 60 + 1)) + 60, 
            bodyTemperature: (Math.random() * (37.5 - 36.0) + 36.0).toFixed(1), 
            diagnosis: diagnosis,
            medication: (medications[diagnosis] || ["None"])[Math.floor(Math.random() * (medications[diagnosis]?.length || 1))],
            lastVisitDate: new Date().toLocaleDateString(),
            nextAppointment: generateRandomFutureDate().toLocaleDateString(),
            emergencyContactName: emergencyContactNames[Math.floor(Math.random() * emergencyContactNames.length)],
            emergencyContactPhone: generateRandomPhoneNumber(),
            alcoholUse: alcoholUseOptions[Math.floor(Math.random() * alcoholUseOptions.length)],
            smokingStatus: smokingStatusOptions[Math.floor(Math.random() * smokingStatusOptions.length)],
            exerciseFrequency: exerciseFrequencyOptions[Math.floor(Math.random() * exerciseFrequencyOptions.length)],
            diet: dietOptions[Math.floor(Math.random() * dietOptions.length)],
            familyHistory: familyHistoryOptions[Math.floor(Math.random() * familyHistoryOptions.length)],
            chronicConditions: chronicConditionsOptions[Math.floor(Math.random() * chronicConditionsOptions.length)],
            insuranceProvider: insuranceProviders[Math.floor(Math.random() * insuranceProviders.length)],
            insurancePolicyNumber: Math.floor(Math.random() * 10000000000).toString(), 
            insuranceCoverageType: coverageTypes[Math.floor(Math.random() * coverageTypes.length)],
            medicalHistory: medicalHistoryOptions[Math.floor(Math.random() * medicalHistoryOptions.length)],
            allergies: allergiesOptions[Math.floor(Math.random() * allergiesOptions.length)],
            vaccinationStatus: vaccinationStatusOptions[Math.floor(Math.random() * vaccinationStatusOptions.length)],
        };
        patients.push(patient);
    }
    return patients;
}

function generateRandomPhoneNumber() {
    const areaCode = Math.floor(100 + Math.random() * 900); 
    const centralOfficeCode = Math.floor(100 + Math.random() * 900);
    const lineNumber = Math.floor(1000 + Math.random() * 9000);
    return `${areaCode}-${centralOfficeCode}-${lineNumber}`;
}

function generateRandomFutureDate() {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 365);
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + randomDays);
    return futureDate;
}

function displayPatientData(patients) {
    const patientListDiv = document.getElementById('patientList');
    patientListDiv.innerHTML = '';
    patients.forEach(patient => {
        const patientDiv = document.createElement('div');
        patientDiv.classList.add('patient');
        patientDiv.innerHTML = `
            <strong>Patient ID:</strong> <span class="value">${patient.patientID}</span><br>
            <strong>Name:</strong> <span class="value">${patient.name}</span><br>
            <strong>Age:</strong> <span class="value">${patient.age}</span><br>
            <strong>Gender:</strong> <span class="value">${patient.gender}</span><br>
            <strong>Ethnicity:</strong> <span class="value">${patient.ethnicity}</span><br>
            <strong>Weight:</strong> <span class="value">${patient.weight} kg</span><br>
            <strong>Height:</strong> <span class="value">${patient.height} cm</span><br>
            <strong>Blood Pressure:</strong> <span class="value">${patient.bloodPressure}</span><br>
            <strong>Heart Rate:</strong> <span class="value">${patient.heartRate} bpm</span><br>
            <strong>Body Temperature:</strong> <span class="value">${patient.bodyTemperature} °C</span><br>
            <strong>Diagnosis:</strong> <span class="value">${patient.diagnosis}</span><br>
            <strong>Medication:</strong> <span class="value">${patient.medication}</span><br>
            <strong>Last Visit Date:</strong> <span class="value">${patient.lastVisitDate}</span><br>
            <strong>Next Appointment:</strong> <span class="value">${patient.nextAppointment}</span><br>
            <strong>Emergency Contact Name:</strong> <span class="value">${patient.emergencyContactName}</span><br>
            <strong>Emergency Contact Phone:</strong> <span class="value">${patient.emergencyContactPhone}</span><br>
            <strong>Alcohol Use:</strong> <span class="value">${patient.alcoholUse}</span><br>
            <strong>Smoking Status:</strong> <span class="value">${patient.smokingStatus}</span><br>
            <strong>Exercise Frequency:</strong> <span class="value">${patient.exerciseFrequency}</span><br>
            <strong>Diet:</strong> <span class="value">${patient.diet}</span><br>
            <strong>Family History:</strong> <span class="value">${patient.familyHistory}</span><br>
            <strong>Chronic Conditions:</strong> <span class="value">${patient.chronicConditions}</span><br>
            <strong>Insurance Provider:</strong> <span class="value">${patient.insuranceProvider}</span><br>
            <strong>Insurance Policy Number:</strong> <span class="value">${patient.insurancePolicyNumber}</span><br>
            <strong>Insurance Coverage Type:</strong> <span class="value">${patient.insuranceCoverageType}</span><br>
            <strong>Medical History:</strong> <span class="value">${patient.medicalHistory}</span><br>
            <strong>Allergies:</strong> <span class="value">${patient.allergies}</span><br>
            <strong>Vaccination Status:</strong> <span class="value">${patient.vaccinationStatus}</span><br>
            <hr>
        `;
        patientListDiv.appendChild(patientDiv);
    });
}


document.getElementById('generateBtn').addEventListener('click', () => {
    const numberOfPatients = parseInt(document.getElementById('num_of_records').value) || 10; 
    patients = generateRandomPatients(numberOfPatients); 
    displayPatientData(patients);
    document.getElementById('floatingDownloadBtn').style.display = 'block';
});


document.getElementById('downloadBtn').addEventListener('click', () => {
    const downloadOptions = document.getElementById('downloadOptions');
    downloadOptions.style.display = downloadOptions.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('csvDownload').addEventListener('click', () => {
    downloadCSV(patients);
});

document.getElementById('excelDownload').addEventListener('click', () => {
    downloadExcel(patients);
});

document.getElementById('pdfDownload').addEventListener('click', () => {
    downloadPDF(patients);
});

function downloadCSV(patients) {
    const csvRows = [];
    const headers = Object.keys(patients[0]).map(key => key.replace(/([A-Z])/g, ' $1')).join(',');
    csvRows.push(headers);

    patients.forEach(patient => {
        const values = Object.values(patient).map(value => {
            const escapedValue = String(value).replace(/"/g, '""');
            return `"${escapedValue}"`;
        });
        csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'patients.csv');
    a.style.visibility = 'hidden';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


function downloadExcel(patients) {
    const ws = XLSX.utils.json_to_sheet(patients);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Patients');
    XLSX.writeFile(wb, 'patients.xlsx');
}
async function downloadPDF(patients) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const margin = 10;
    const startY = margin; 
    let y = startY;

  
    doc.setFontSize(16);
    doc.setTextColor(0, 102, 204); 
    doc.text('Patient Records', margin, y);
    y += 10; 


    patients.forEach((patient, index) => {
        if (index > 0) {
            y += 10; 
        }

        doc.setFontSize(14);
        doc.setTextColor(233, 85, 71); 
        doc.text(`Patient #${index + 1}`, margin, y);
        y += 5;

      
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); 
        doc.text(`Patient ID: ${formatToProperCase(patient.patientID)}`, margin, y);
        y += 5;

        doc.setTextColor(50, 50, 50); 
        Object.entries(patient).forEach(([key, value]) => {
            const displayKey = formatToProperCase(key.replace(/([A-Z])/g, ' $1')); 
            doc.text(`${displayKey}: ${formatToProperCase(value)}`, margin, y);
            y += 5;
        });

        y += 5; 
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, y, 200 - margin, y);
        y += 5; 

        if (y > doc.internal.pageSize.height - margin) {
            doc.addPage();
            y = startY; 
        }
    });

    doc.save('patients.pdf');
}

function formatToProperCase(text) {
    return text.toString().toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
}
