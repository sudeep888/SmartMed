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

///////////////////////////////////////////////////////////////////////

function createSessionCard(sessionId, sessionData) {
    const card = document.createElement('div');
    card.className = 'session-card';
    
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

    card.innerHTML = `
        <h2>Session ${sessionId}</h2>
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

    card.addEventListener('click', () => {
        console.log("Session ID :"+sessionId)
        sessionStorage.clear();
         sessionStorage.setItem('sessionId', sessionId); 
  
     window.location.href = `https://rex1671.github.io/SmartMed/MedicalPlan/medicalplan.html`; });

    return card;
}

function fetchUserData(callback) {
    const userdataRef = database.ref(`patients/${patientId}/userdata`);
    userdataRef.once('value', (snapshot) => {
        const userData = snapshot.val();
        console.log('User Data:', userData);
        callback(userData);
    });
}

function fetchAndDisplayPatientData() {
    const sessionsRef = database.ref(`patients/${patientId}/sessions`);
    sessionsRef.once('value', (snapshot) => {
        const sessionsData = snapshot.val();
        console.log('Fetched patient data from Firebase:', sessionsData);

        const sessionsContainer = document.getElementById('sessions-container');
        
        if (sessionsData) {
            Object.entries(sessionsData).forEach(([sessionId, sessionData]) => {
                const card = createSessionCard(sessionId, sessionData);
                sessionsContainer.appendChild(card);
            });
        } else {
            sessionsContainer.innerHTML = '<p>No sessions found for this patient.</p>';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayPatientData(); 
});
