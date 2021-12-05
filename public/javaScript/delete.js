const removeBtn = document.querySelector('#removeBtn');

const deleteItem = async (event) => {
event.preventDefault();

const cardId = removeBtn.parentElement.getAttribute('data-id');

console.log(cardId);
if (cardId) {
    const response = await fetch(`/api/products/remove/${cardId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    
      if (response.ok) {
          alert(`Item has been removed.`);
          location.reload();
          window.location.replace('/dashboard');
      }else {
          console.log(response);
      }
}

};

removeBtn.addEventListener('click', deleteItem);