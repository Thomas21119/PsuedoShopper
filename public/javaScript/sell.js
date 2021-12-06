const sell = async () => {
  try {
    const id = document.querySelector("#product_id").value.trim();
    const price = document.querySelector("#newItemPrice").value.trim();
    console.log("sending info", id, price);

    const userSell = await fetch(`/api/products/forSale`, {
      method: "PUT",
      body: JSON.stringify({
        price,
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!userSell.ok) {
      return;
    }
    location.reload();
    window.location.replace("/dashboard");
  } catch (err) {
    console.log(err);
  }
};

document.querySelector("#sellItem").addEventListener("submit", sell);
