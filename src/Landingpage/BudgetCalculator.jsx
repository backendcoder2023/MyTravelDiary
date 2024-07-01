import React, { useState } from 'react';
import './BudgetCalculator.css'; 

const BudgetCalculator = () => {
  const [budget, setBudget] =  useState({
    transport: 0,
    accommodation: 0,
    food: 0,
    activities: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget({ ...budget, [name]: parseFloat(value) });
  };

  const totalBudget = Object.values(budget).reduce((acc, item) => acc + item, 0);

  return (
    <div className="budget-container">
      <h2 className="budget-title">Travel Budget Calculator</h2>
      <div className="input-container">
        <label className="budget-label">
          Transport:
          <input
            type="number"
            className="budget-input"
            name="transport"
            value={budget.transport}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label className="budget-label">
          Accommodation:
          <input
            type="number"
            className="budget-input"
            name="accommodation"
            value={budget.accommodation}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label className="budget-label">
          Food:
          <input
            type="number"
            className="budget-input"
            name="food"
            value={budget.food}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label className="budget-label">
          Activities:
          <input
            type="number"
            className="budget-input"
            name="activities"
            value={budget.activities}
            onChange={handleChange}
          />
        </label>
      </div>
      <h3 className="total-budget">Total Budget: ${totalBudget}</h3>
    </div>
  );
};

export default BudgetCalculator;
