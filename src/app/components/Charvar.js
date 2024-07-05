"use client"
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const Charvar = () => {
    const [datasets, setDatasets] = useState([]);

    useEffect(() => {
        const urls = [
            'https://jsonplaceholder.typicode.com/posts',
            'https://jsonplaceholder.typicode.com/comments',
            'https://jsonplaceholder.typicode.com/albums',
            'https://jsonplaceholder.typicode.com/photos',
            'https://jsonplaceholder.typicode.com/todos',
        ];
        Promise.all(urls.map(url => fetchData(url))).then(dataSets => {
            // Assuming each dataset is an array of objects suitable for the chart
            setDatasets(dataSets); // Store each dataset separately
        });
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {datasets.map((dataset, index) => (
                <div key={index} className='w-full  h-[400px] min-h-[400px] mb-5 ' >
                    <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                        <BarChart data={dataset}>
                            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                            <XAxis dataKey="id" /> {/* Adjust dataKey as needed */}
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <Bar dataKey="userId" fill="#8884d8" /> {/* Adjust dataKey as needed */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            ))}
        </div>
    );
};

export default Charvar;