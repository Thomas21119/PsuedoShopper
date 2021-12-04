const signup = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#nameSignup").value.trim();
  const password = document.querySelector("#passwordSignup").value.trim();
  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const walletResponse = await fetch("/api/wallet/createWallet", {
        method: "POST",
        body: JSON.stringify({ username }),
        headers: { "Content-Type": "application/json" },
      });
      if (walletResponse.ok) {
        document.location.replace("/");
      }
    } else {
      console.log(response.status);
    }
  }
};

document.querySelector("#signUpForm").addEventListener("submit", signup);
