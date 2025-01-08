// Configure API base URL
const BASE_URL = window.location.origin;

async function testAPI() {
  const dateInput = document.getElementById('dateInput').value;
  const result = document.getElementById('result');
  
  try {
    const response = await fetch(`${BASE_URL}/api/timestamp/${dateInput}`);
    const data = await response.json();
    result.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    result.innerHTML = `Error: ${error.message}`;
  }
}

async function testCurrentTime() {
  const result = document.getElementById('result');
  
  try {
    const response = await fetch(`${BASE_URL}/api/timestamp`);
    const data = await response.json();
    result.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    result.innerHTML = `Error: ${error.message}`;
  }
}

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const result = document.getElementById('result');
  
  const formData = new FormData(e.target);
  
  try {
    const response = await fetch('/api/fileanalyse', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    result.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    result.innerHTML = `Error: ${error.message}`;
  }
});
