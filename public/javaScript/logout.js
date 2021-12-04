const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    location.reload();
    window.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logoutBtn").addEventListener("click", logout);
