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
            label: "Item Price History",
            data: arr,
            backgroundColor: "rgba(0, 0, 0, 1)",
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 2,

            color: "rgba(0, 0, 0, 1)",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + value;
              },
              color: "rgba(0, 0, 0, 1)",
            },
          },
        },
      },
    });
    return myChart;
  } catch (err) {}
};

chartGenerator();
