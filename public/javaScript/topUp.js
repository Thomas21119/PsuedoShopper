const topUp = async () => {
  try {
      const topUp = await fetch('/api/users/walletTopUp', {
        
      })
  } catch (err) {}
};

document.querySelector("#topUpSubmit").addEventListener("click", topUp);
