const profileButton = document.getElementById('profileButton'); 
profileButton.addEventListener('click', () => {
    window.location.href = 'profile.html'; 
});

const userId = localStorage.getItem('loggedInUserId');
console.log("User id"+userId)

document.getElementById('symptomAnalysisCard').addEventListener('click', function() {
    window.location.href = 'https://rex1671.github.io/SmartMed/Symptom/index.html';
});

document.getElementById('treatmentPlanCard').addEventListener('click', function() {
    window.location.href = 'https://rex1671.github.io/SmartMed/PatientHistory/PH.html';
});

document.getElementById('syntheticDataCard').addEventListener('click', function() {
    window.location.href = 'https://rex1671.github.io/SmartMed/SMD/index.html';
});
