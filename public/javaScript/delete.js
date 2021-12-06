const removeBtn = document.querySelectorAll(".removeBtn");
const unSellBtn = document.querySelector("#unsellBtn");
const theCard = document.querySelector(".newCard");

const eventHandler = async (event) => {
  const cardId = event.target.parentElement.getAttribute("data-id");
  if (cardId) {
    const confirmBox = prompt("Confirm delete item? (Yes/No)");

    if (confirmBox == null || confirmBox == "") {
      alert("Invalid input.");
      return;
      //do nothing
    } else if (
      confirmBox == "Yes" ||
      confirmBox == "yes" ||
      confirmBox == "YES" ||
      confirmBox == "y" ||
      confirmBox == "Y"
    ) {
      const response = await fetch(`/api/products/remove/${cardId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      if (response.ok) {
        alert(`Item has been removed.`);
        location.reload();
      } else {
        console.log(response);
      }
    }
  }
};

for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener("click", eventHandler);
}
