const topUp = async (event) => {
  event.preventDefault();
  try {
    const amount = document.querySelector("#topUpAmount").value;
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
      document.location.replace(`/`);
    }
  } catch (err) {}
};
console.log();
document.querySelector("#topUpSubmit").addEventListener("submit", topUp);
