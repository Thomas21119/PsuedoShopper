const topUp = async (event) => {
  event.preventDefault();
  try {
    const amount = document.querySelector("#topUpAmount").value;
    if (!amount) {
      console.log("error");
      alert("error");
      return;
    }
    const topUp = await fetch("/api/wallet/walletTopUp", {
      method: "PUT",
      body: JSON.stringify({
        amount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (topUp.ok) {
      console.log("test");
      document.location.replace("/wallet");
    }
  } catch (err) {}
};

document.querySelector("#topUpSubmit").addEventListener("submit", topUp);
