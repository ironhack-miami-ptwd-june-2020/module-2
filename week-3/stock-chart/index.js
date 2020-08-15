// axios
//     .get(apiUrl)
//     .then((responseFromAPI) =>
//         console.log("The response from API: ", responseFromAPI)
//     )
//     .catch((err) => console.log("Error while getting the data: ", err));

window.onload = function () {
    console.log("Window Loaded");

    getStockData();
};

const getStockData = () => {
    const key = "demo";
    const functionName = "TIME_SERIES_DAILY";
    const symbolName = "MSFT";
    const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;

    axios
        .get(apiUrl)
        .then((responseFromAPI) => {
            printTheChart(responseFromAPI.data); // <== call the function here where you used to console.log() the response
        })
        .catch((err) => console.log("Error while getting the data: ", err));
};

function printTheChart(stockData) {
    const dailyData = stockData["Time Series (Daily)"];

    const stockDates = Object.keys(dailyData);
    const stockPrices = stockDates.map((date) => dailyData[date]["4. close"]);

    const ctx = document.getElementById("my-chart").getContext("2d");
    const chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: stockDates,
            datasets: [
                {
                    label: "Stock Chart",
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                    data: stockPrices,
                },
            ],
        },
    }); // closes chart = new Chart()
} // closes printTheChart()
