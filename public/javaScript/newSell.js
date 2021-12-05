const newItemCancel = document.querySelector("#newItemCancel");
const newItemSave = document.querySelector("#newItemSubmit");
const itemNameTxt = document.querySelector("#newItemName");
const itemCostTxt = document.querySelector("#newItemPrice");
  
const cancelNewItem = (event) => {
  event.preventDefault();
  document.location.replace("/dashboard");
};

const newItemSubmit = async (event) => {
  event.preventDefault();

  const itemName = itemNameTxt.value.trim();
  const itemCost = itemCostTxt.value.trim();

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

itemNameTxt.focus();

newItemCancel.addEventListener("click", cancelNewItem);

newItemSave.addEventListener("click", newItemSubmit);
