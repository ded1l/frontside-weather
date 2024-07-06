"use client"
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data.slice(0, 20); // Limit to first 20 items for each API
    } catch (error) {
        console.error("Fetch error: ", error);
        return [];
    }
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white p-2 shadow-lg rounded">
                <p className="label">{`ID: ${label}`}</p>
                {payload.map((entry, index) => (
                    <p key={index} style={{ color: entry.color }}>
                        {`${entry.name}: ${entry.value}`}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const History = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        posts: true,
        comments: true,
        todos: true,
        albums: true
    });

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const urls = [
                    'https://jsonplaceholder.typicode.com/posts',
                    'https://jsonplaceholder.typicode.com/comments',
                    'https://jsonplaceholder.typicode.com/todos',
                    'https://jsonplaceholder.typicode.com/albums'
                ];
                const results = await Promise.all(urls.map(url => fetchData(url)));
                
                const combinedData = results[0].map((item, index) => ({
                    id: item.id,
                    posts: item.id,
                    comments: results[1][index]?.id || null,
                    todos: results[2][index]?.id || null,
                    albums: results[3][index]?.id || null
                }));

                console.log("Combined data:", combinedData.slice(0, 5));
                setData(combinedData);
            } catch (err) {
                console.error("Error in fetchAllData:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllData();
    }, []);

    const handleFilterChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.checked
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (data.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div className='w-full p-4'>
            <div className='mb-4'>
                {Object.keys(filters).map((key) => (
                    <label key={key} className='mr-4'>
                        <input
                            type="checkbox"
                            name={key}
                            checked={filters[key]}
                            onChange={handleFilterChange}
                        />
                        {` ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                    </label>
                ))}
            </div>
            <div className='h-[500px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="id" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        {filters.posts && <Line type="monotone" dataKey="posts" stroke="#8884d8" activeDot={{ r: 8 }} />}
                        {filters.comments && <Line type="monotone" dataKey="comments" stroke="#82ca9d" activeDot={{ r: 8 }} />}
                        {filters.todos && <Line type="monotone" dataKey="todos" stroke="#ffc658" activeDot={{ r: 8 }} />}
                        {filters.albums && <Line type="monotone" dataKey="albums" stroke="#ff7300" activeDot={{ r: 8 }} />}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default History;