import React, { useEffect, useState } from 'react';
import Worker from '../Worker/Worker';

const Workers = () => {
    const [workers, setWorkers] = useState([]);
    useEffect(() => {
        fetch('./workers.json')
            .then(res => res.json())
            .then(data => setWorkers(data))
    }, []);

    /* get total salary */
    const totalReducer = (revius, current) => revius + current.salaryOfDay;
    const salaryTotal = workers.reduce(totalReducer, 0);

    return (
        <div className="container">
            <div>
                <span><h1>Total Workers: 50</h1></span>
                <span><h1>Total Workers Salary: {salaryTotal} </h1></span>
                <div className="row">
                    {
                        workers.map(worker => <Worker key={worker._id} worker={worker}></Worker>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Workers;