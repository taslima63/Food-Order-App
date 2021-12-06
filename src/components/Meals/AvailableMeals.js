import React from 'react';

import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: 2390,
  },
  {
    id: "m2",
    name: "Tenpura",
    description: "Finest Srimp and Colorful Veggies",
    price: 1500,
  },
  {
    id: "m3",
    name: "Ramen",
    description: "Delicious juicy Meat and Fish",
    price: 1600,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
