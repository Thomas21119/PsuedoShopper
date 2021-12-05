const cancelNewItem = (event) => {
  event.preventDefault();
  document.location.replace("/dashboard");
};

const newItemSubmit = async (event) => {
  event.preventDefault();
  const itemName = document.querySelector("#newItemName").value;
  const itemCost = document.querySelector("#newItemPrice").value;

  if (itemName && itemCost) {
    const category = await fetch("/api/categories/create", {
      method: "POST",
      body: JSON.stringify({ itemName }),
      headers: { "Content-Type": "application/json" },
    });
    const categoryId = await category.json();
    if (categoryId) {
    }
    if (!category.ok) {
      return response
        .status(500)
        .json({ message: "failed to create the new product" });
    }
    const newCategoriesId = categoryId.id;
    const response = await fetch("/api/products/newSale", {
      method: "POST",
      body: JSON.stringify({ newCategoriesId, itemCost }),
      headers: { "Content-Type": "application/json" },
    });
    const userId = await response.json();
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      document.location.replace("/error");
    }
  }
};

document
  .querySelector("#newItemCancel")
  .addEventListener("click", cancelNewItem);

document
  .querySelector("#newItemSubmit")
  .addEventListener("click", newItemSubmit);
