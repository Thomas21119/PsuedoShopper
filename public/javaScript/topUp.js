const topUp = async (event) => {
  event.preventDefault();
  try {
    const amount = document.querySelector("#topUpAmount").value;
    console.log(amount);
    const topUp1 = await fetch("/api/users/walletTopUp", {
      method: "PUT",
      body: JSON.stringify({
        amount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
};
console.log();
document.querySelector("#topUpSubmit").addEventListener("submit", topUp);
