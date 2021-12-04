const txtUserName = document.querySelector("#loginUserName");
const txtPassword = document.querySelector("#loginPassword");
const loginFrm = document.querySelector("#loginForm");

const login = async (event) => {
  event.preventDefault();

  const username = txtUserName.value.trim();
  const password = txtPassword.value.trim();

  if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      }else{
        alert(`Incorrect username or password, please try again.`);
        txtUserName.value = '';
        txtPassword.value = '';
        txtUserName.focus();
      }
  }
};

txtUserName.focus();

loginFrm.addEventListener("submit", login);
