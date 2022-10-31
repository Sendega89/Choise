
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
const labels = ["Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь"];
const data = {
    labels,
    datasets: [{
        type: 'bar',
        label: 'total',
        data: [70, 70, 70, 70, 70, 70],
        backgroundColor: ['#eaede9'],
        borderColor: ['#eaede9'],
        borderWidth: 0,
        tension: 0.4,
        grouped: false,
        order: 3
    }, {
        type: 'bar',
        label: 'Удалено',
        data: [30, 30, 25, 10, 40, 15],
        backgroundColor: ['#738772'],
        borderColor: ['#738772'],
        borderWidth: 0,
        tension: 0.4,
    }, {
        type: 'bar',
        label: 'Зарегистрировано',
        data: [21, 15, 55, 40, 5, 60],
        backgroundColor: ['#adc896'],
        borderColor: ['#adc896'],
        borderWidth: 0,
        tension: 0.4,
    }]
}
const QualificationChartTeamBeginer = () => {
    return (
        <Line options={options} data={data} type={"line"} />
    );
};

export default QualificationChartTeamBeginer;