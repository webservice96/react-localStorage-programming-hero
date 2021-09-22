import React from 'react';
import { addToDB, deleteItemFromDB } from '../../utilities/storage';

const Worker = (props) => {
    const { _id, name, company, salaryOfDay } = props.worker;
    const style = {
        border: '2px solid gold',
        marginBottom: '10px',
        backgroundColor: '#ccc',
        paddingBottom: '12px'
    };

    const handlePurchase = (id) => {
        addToDB(id);
    }

    const handleDeleteItem = (id) => {
        deleteItemFromDB(id);
    }

    return (
        <div className="col-md-4" style={style}>
            <h2>Name: {name}</h2>
            <h3>Company: {company}</h3>
            <h4>Salary: {salaryOfDay}</h4>
            <button onClick={() => handlePurchase(_id)}>Buy Now</button>
            <button onClick={() => handleDeleteItem(_id)}>Remove Item</button>
        </div>
    );
};

export default Worker;