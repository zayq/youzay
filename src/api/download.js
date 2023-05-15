export async function Download() {
    const urlInput = document.getElementById('urlinput');
    const url = urlInput.value;
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    };
    
    fetch('http://localhost:1234/download', options)

    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'youzay.mp4';
      link.click();
    })
    .catch(error => console.error(error));
  }