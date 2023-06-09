import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';
import styles from '@/styles/LikeChart.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

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
                    data: [140, 345, 500, 600, 725, 580, 300],
                    borderColor: '#325eff',
                    fill: false,
                },
            ],
        });
        setChartOptions({
            scales: {
                y: {
                    min: 0,
                    max: 800,
                    ticks: {
                        stepSize: 200,
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
