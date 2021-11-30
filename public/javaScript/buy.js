const buy = async () => {
  try {
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
      document.location.replace(`/purchase/${id}`);
      // }
    } else {
      alert(response.statusText);
      // alert(chargeUser.statusText);
    }
  } catch (err) {
    console.log(err);
  }
};

document.querySelector("#buyBtn").addEventListener("click", buy);
