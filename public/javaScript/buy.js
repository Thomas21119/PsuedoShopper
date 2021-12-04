const buy = async () => {
  try {
    const id = document.querySelector("#product_id").value.trim();
    const cost = document.querySelector("#cost").value.trim();
    const currentOwner = Number(
      document.querySelector("#productOwner").value.trim()
    );
    const credits = Number(
      document.querySelector("#user_credits").value.trim()
    );

    if (credits < cost) {
      //redirect maybe?
      console.log(credits);
      console.log(cost);
      alert("Not enough money");
      return;
    }
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
          const updateHist = await fetch("/api/history/", {
            method: "POST",
            body: JSON.stringify({
              product_id: id,
              salePrice: cost,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (updateHist.ok) {
            document.location.replace(`/purchase/${id}`);
          }
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
