const sell = async () => {
  console.log("hello");
  try {
    const id = document.querySelector("#product_id").value.trim();
    const price = document.querySelector("#newItemPrice").value.trim();
    console.log("sending info", id, price);

    const userBuy = await fetch(`/api/products/forSale`, {
      method: "PUT",
      body: JSON.stringify({
        price,
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

document.querySelector("#sellItem").addEventListener("submit", sell);
