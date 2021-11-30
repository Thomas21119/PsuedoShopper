const signup = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#nameSignup').value.trim();
  const password = document.querySelector('#passwordSignup').value.trim();
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log('response is ok test');
      document.location.replace('/');
    } else {
      console.log(response.status);
      console.log('failedtest');
    }
  }
};

document.querySelector('#signUpForm').addEventListener('submit', signup);
