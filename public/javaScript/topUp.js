const amountTxt = document.querySelector("#topUpAmount");
const cardNoTxt = document.querySelector("#cardNumber");
const topUpFrm = document.querySelector("#topUpSubmit");

const topUp = async (event) => {
  event.preventDefault();
  try {
    
    const amount = amountTxt.value;
    const cardNo = cardNoTxt.value;

console.log(cardNo);

    if (!amount) {
      alert("Enter a top-up amount");
      amountTxt.focus();
      return;
    }
    if (!cardNo) {
      alert("Enter a value card number");
      cardNoTxt.focus();
      return;
    }
    
    if (cardNo) {
      if (cardNo.length < 16) {
        alert("Enter a value card number");
        cardNoTxt.focus();
        return;
      }else if (cardNo.length > 16) {
        alert("Enter a value card number");
        cardNoTxt.focus();
        return;
      }else {
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
            alert(`Your top-up was successful. Added $ ${amount} to your account.`)
            location.reload();
            window.location.replace("/wallet");
            amountTxt.focus();
          }
        }
      }
  } catch (err) {
    alert(err);
  }
};

amountTxt.focus();

topUpFrm.addEventListener("submit", topUp);
