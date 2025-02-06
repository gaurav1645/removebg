document.getElementById('removeBgBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('imageUpload');
    const outputImage = document.getElementById('outputImage');
    const downloadLink = document.getElementById('downloadLink');
  
    if (!fileInput.files[0]) {
      alert('Please upload an image first.');
      return;
    }
  
    const formData = new FormData();
    formData.append('image_file', fileInput.files[0]);
  
    try {
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'USScFEUXmArSkT6QsodzRyWu', // Replace with your API key
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to remove background.');
      }
  
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
  
      outputImage.src = imageUrl;
      downloadLink.href = imageUrl;
      downloadLink.style.display = 'block';
    } catch (error) {
      console.error(error);
      alert('An error occurred while removing the background.');
    }
  });