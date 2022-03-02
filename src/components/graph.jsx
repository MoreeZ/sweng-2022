import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import React, { Component } from "react";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.chartState = {
      data: {
        labels: [
          "NumberOfBedrooms",
          "NumberOfBathrooms",
          "TaxAmount",
          "Area",
          "YearBuilt",
        ],
        datasets: [
          {
            label: "User Input",
            data: [
              props.state.noOfBedrooms,
              props.state.noOfBathrooms,
              props.state.taxAmount,
              props.state.area,
              props.state.yearBuilt,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
          },
        ],
      },
    };
  }

  updateData = (props) => {
    this.chartState = {
      data: {
        labels: [
          "NumberOfBedrooms",
          "NumberOfBathrooms",
          "TaxAmount",
          "Area",
          "YearBuilt",
        ],
        datasets: [
          {
            label: "User Input",
            data: [
              props.state.noOfBedrooms,
              props.state.noOfBathrooms,
              props.state.taxAmount,
              props.state.area,
              props.state.yearBuilt,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
          },
        ],
      },
    };
  };

  render() {
    this.updateData(this.props);
    console.log(this.chartState);
    return (
      <div style={{ height: "80vh" }}>
        <Bar
          data={this.chartState.data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default BarChart;
