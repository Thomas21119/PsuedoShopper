const buy = async () => {
  const id = document.querySelector("#product_id").value.trim();
  const cost = document.querySelector("#cost").value.trim();

  //   const chargeUser = await fetch(`/api/user/walletChange/${cost}`, {
  //     method: "PUT",
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (chargeUser.ok) {
  const response = await fetch(`/api/products/buy/${id}`, {
    method: "PUT",
    header: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/");
    // }
  } else {
    alert(response.statusText);
    // alert(chargeUser.statusText);
  }
};

document.querySelector("#buyBtn").addEventListener("click", buy);
