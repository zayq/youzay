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
    fetch('https://serveryouzay.zaylab.com/download', options)
    .then(response => {
      if (response.status == 500) {
        document.getElementById("error-message").innerText = "INVALID URL"
        return
      }
      return response.blob();
    })
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'youzay.mp4';
      link.click();
      document.getElementById("error-message").innerText = ""
    })
    .catch(error => {
      console.log("Something went wrong")
    });
  }