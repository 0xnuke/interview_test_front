import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';
import styles from "@/styles/LikeChart.module.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);

const LikeChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['10', '11', '12', '13', '14', '15', '16'],
            datasets: [
                {
                    data: [40, 35, 50, 60, 55, 58, 50],
                    borderColor: '#325eff',
                    fill: false,
                },
            ],
        });
        setChartOptions({
            scales: {
                y: {
                    min: 0,
                    max: 80,
                    ticks: {
                        stepSize: 20,
                    },
                },
            },
            responsive: true,
        });
    }, []);

    return (
        <div className={styles.chartContainer}>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default LikeChart;
