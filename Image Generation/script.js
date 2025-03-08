
document.getElementById('dicomForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('dicomFile');
    const file = fileInput.files[0];

    if (!file) {
        document.getElementById('result').textContent = "Please select a file.";
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      
        const response = await fetch('https://www.dicomlibrary.com/api/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('result').textContent = "File uploaded successfully! Reference ID: " + result.refId;

            displayDicomImage(result.refId);
        } else {
            document.getElementById('result').textContent = "File upload failed.";
        }
    } catch (error) {
        document.getElementById('result').textContent = "An error occurred: " + error.message;
    }
});

function displayDicomImage(refId) {
    const dicomImageUrl = `https://www.dicomlibrary.com/api/view/${refId}`;

    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

    const viewerContainer = document.createElement('div');
    viewerContainer.id = 'dicomViewer';
    document.getElementById('result').appendChild(viewerContainer);

    cornerstone.enable(viewerContainer);

    cornerstone.loadImage(dicomImageUrl).then(function(image) {
        cornerstone.displayImage(viewerContainer, image);
    }).catch(function(error) {
        console.error('Error loading DICOM image:', error);
        document.getElementById('result').textContent = "Failed to load DICOM image.";
    });
}
