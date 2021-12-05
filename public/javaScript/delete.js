const removeBtn = document.querySelector('#removeBtn');

const deleteItem = async () => {

    const cardId = removeBtn.parentElement.getAttribute('data-id');

    if (cardId) {

        const confirmBox = prompt("Confirm delete item? (Yes/No)");
        const textConfirm = "Yes"
        if (confirmBox == null || confirmBox == "") {
            //do nothing
        }else if(confirmBox == "Yes" || confirmBox == "yes" || confirmBox == "YES" || confirmBox == "y" || confirmBox == "Y"){
            const response = await fetch(`/api/products/remove/${cardId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            console.log(response);
            if (response.ok) {
                alert(`Item has been removed.`);
                location.reload();
            }else {
                console.log(response);
            }
        }else {
            //do nothing
        }
    }

};

removeBtn.addEventListener('click', deleteItem);