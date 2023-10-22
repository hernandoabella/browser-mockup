const imageInput = document.getElementById('imageInput');
const mockupImage = document.getElementById('mockupImage');
const downloadButton = document.getElementById('downloadButton');

imageInput.addEventListener('change', function () {
    const file = imageInput.files[0];

    if (file) {
        const imageUrl = URL.createObjectURL(file);
        mockupImage.src = imageUrl;
        downloadButton.style.display = 'block';
    } else {
        mockupImage.src = 'browser_mockup.png'; // Restaura la imagen predeterminada
        downloadButton.style.display = 'none';
    }
});

downloadButton.addEventListener('click', function () {
    const canvas = document.createElement('canvas');
    canvas.width = mockupImage.width;
    canvas.height = mockupImage.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(mockupImage, 0, 0, mockupImage.width, mockupImage.height);

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'mockup.png';
    link.click();
});
