const txtUserNameSU = document.querySelector("#nameSignup");
const txtPasswordSU = document.querySelector("#passwordSignup");
const signUpFrm = document.querySelector("#signUpForm");

const signup = async (event) => {
  event.preventDefault();

  const username = txtUserNameSU.value.trim();
  const password = txtPasswordSU.value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data) {
      const walletResponse = await fetch("/api/wallet/createWallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (walletResponse.ok) {
        location.reload();
        window.location.replace("/dashboard");
      } else {
        alert(`Username already exist. Please try again.`);
        txtUserNameSU.value = "";
        txtPasswordSU.value = "";
        txtUserNameSU.focus();
        return;
      }
    } else {
      alert(`Username already exist. Please try again.`);
      console.log(response.status);
    }
  }
};

txtUserNameSU.focus();

signUpFrm.addEventListener("submit", signup);
