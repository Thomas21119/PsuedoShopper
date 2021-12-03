let arr = [];
let xLabels = [];
const ctx = document.getElementById("myChart").getContext("2d");
const id = document.querySelector("#product_id").value.trim();

const chartGenerator = async () => {
  try {
    const history = await fetch(`/api/history/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    allHist = await history.json();

    let j = 1;
    for (let i = 0; i < allHist.length; i++) {
      arr.push(allHist[i].salePrice);

      xLabels.push(j);
      j++;
    }

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: xLabels,
        datasets: [
          {
            label: "Sale History",
            data: arr,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return myChart;
  } catch (err) {}
};

chartGenerator();
