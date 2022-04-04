import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div>
            <div>
                <LineChart width={700} height={500} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'sell'}></Line>
                    <Line dataKey={'revenues'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <YAxis></YAxis>
                    <linearGradient></linearGradient>
                </LineChart>
            </div>
            <div>
                <BarChart width={730} height={500} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenues" fill="#8884d8" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                    <Bar dataKey="sell" fill="#FFA500" />
                </BarChart>
            </div>

        </div>
    );
};

export default Dashboard;