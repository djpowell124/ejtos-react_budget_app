import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { totalExpenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The budget value cannot exceed 20,000.");
            setNewBudget(20000);
            return;
        }
        if (event.target.value < 1000) {
            alert("The budget value cannot be less than current spending.");
            setNewBudget(totalExpenses);
            return;
        }   
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input></span>
</div>
    );
};
export default Budget;
