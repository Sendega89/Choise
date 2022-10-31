import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    BarElement,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
);

export const options  = {
    plugins: {
        legend: {
            display: false
        }
    },
    elements: {
        bar: {
            borderRadius: 5
        }
    },
    scales: {
        x: {
            beginAtZero: true,
            grid: {
                display: false
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false
            }
        }
    },
}
const labels = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,31]
export const data = {
    labels,
    datasets: [{
        type: 'bar',
        label: 'Самый низкий показатель',
        data: [0, 200, 195, 0, 0, 0, 0, 0, 344, 0, 40, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,100],
        backgroundColor: ['#cfdec3'],
        borderBlockEnd:["1px solid black"],
        categoryPercentage: 1.5,
        grouped: false,
        order: 1
    }]
}
const QualificationChart = () => {
    return (
        <Line options={options} data={data} type={"line"}  />
    );
};

export default QualificationChart;