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
                borderRadius: 10
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
const labels =["Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь"];
export const data = {
    labels,
    datasets: [{
        type: 'bar',
        label: 'total',
        data: [4000, 4000, 4000, 4000, 4000, 4000],
        backgroundColor: ['#eaede9'],
        borderColor: ['#eaede9'],
        borderWidth: 0,
        tension: 0.4,
        grouped: false,
        order: 1
    },
        {
            type: 'bar',
            label: 'Командный обьем',
            data: [1400, 1700, 2000, 2500, 1400, 3400],
            backgroundColor: ['#e3e1c6', '#98b089'],
            borderColor: ['#e3e1c6', '#98b089'],
            borderWidth: 0,
            tension: 0.4,
        },
    ]
}
const QualificationChartTeamValue = () => {
    return (
        <Line options={options} data={data} type={"line"}  />
    );
};

export default QualificationChartTeamValue;