import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const auth = getAuth();
const userId = localStorage.getItem('loggedInUserId');

if (!userId) {
    window.location.href = 'HomePage/webs.html';
} else {
    fetchProfileData(userId);
}

function fetchProfileData(uid) {
    const db = getDatabase();
    const userRef = ref(db, 'patients/' + uid + '/userdata');

    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.val();

            document.getElementById('profileData').innerHTML = `
                <p><strong>Full Name:</strong> ${userData.fullName}</p>
                <p><strong>Date of Birth:</strong> ${userData.dob}</p>
                <p><strong>Emergency Contact:</strong> ${userData.emergencyContact}</p>
                <p><strong>Gender:</strong> ${userData.gender}</p>
                <p><strong>Height:</strong> ${userData.height} cm</p>
                <p><strong>Phone Number:</strong> ${userData.phone}</p>
                <p><strong>Weight:</strong> ${userData.weight} kg</p>
            `;

            document.getElementById('updateName').value = userData.fullName;
            document.getElementById('updateDob').value = userData.dob;
            document.getElementById('updateEmergencyContact').value = userData.emergencyContact;
            document.getElementById('updateHeight').value = userData.height;
            document.getElementById('updatePhone').value = userData.phone;
            document.getElementById('updateWeight').value = userData.weight;
            document.querySelector(`input[name="gender"][value="${userData.gender}"]`).checked = true;
        } else {
            console.error('No user data found');
        }
    }).catch((error) => {
        console.error('Error fetching user data:', error);
    });
}

document.getElementById('editProfileBtn').addEventListener('click', () => {
    document.getElementById('profileData').style.display = 'none';
    document.getElementById('editProfileBtn').style.display = 'none';
    document.getElementById('updateProfileForm').style.display = 'block';
});

document.getElementById('updateProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const db = getDatabase();
    const userRef = ref(db, 'patients/' + userId + '/userdata');

    const updatedData = {
        fullName: document.getElementById('updateName').value,
        dob: document.getElementById('updateDob').value,
        emergencyContact: document.getElementById('updateEmergencyContact').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        height: document.getElementById('updateHeight').value,
        phone: document.getElementById('updatePhone').value,
        weight: document.getElementById('updateWeight').value
    };

    set(userRef, updatedData).then(() => {
        document.getElementById('messageDiv').innerText = 'Profile updated successfully!';
        document.getElementById('messageDiv').style.display = 'block';

       
        document.getElementById('updateProfileForm').style.display = 'none';
        document.getElementById('profileData').style.display = 'block';
        document.getElementById('editProfileBtn').style.display = 'block';
        
        fetchProfileData(userId); 
    }).catch((error) => {
        console.error('Error updating profile:', error);
        document.getElementById('messageDiv').innerText = 'Error updating profile';
        document.getElementById('messageDiv').style.display = 'block';
    });
});
