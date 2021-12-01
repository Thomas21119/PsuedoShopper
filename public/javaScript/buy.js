const buy = async () => {
  try {
    const id = document.querySelector("#product_id").value.trim();
    const cost = document.querySelector("#cost").value.trim();
    const currentOwner = document.querySelector("#productOwner").value.trim();

    const userBuy = await fetch(`/api/wallet/walletBuy`, {
      method: "PUT",
      body: JSON.stringify({
        cost,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (userBuy.ok) {
      const userSell = await fetch(`/api/wallet/walletSell`, {
        method: "PUT",
        body: JSON.stringify({
          cost,
          currentOwner,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (userSell.ok) {
        const response = await fetch(`/api/products/buy/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          document.location.replace(`/purchase/${id}`);
        }
      }
    } else {
      alert(response.statusText);
    }
  } catch (err) {
    console.log(err);
  }
};

document.querySelector("#buyBtn").addEventListener("click", buy);
