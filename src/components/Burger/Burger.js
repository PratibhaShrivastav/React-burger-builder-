import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const Burger=(props)=> {
  const transformedingredients = Object.keys(props.ingredients).map(igkey =>{
     return [...Array(props.ingredients[igkey])].map((_,i)=>{
       return <BurgerIngredient key={igkey + i} type={igkey}/>;
     });
    });

    return (
      <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedingredients}
      <BurgerIngredient type="bread-bottom"/>
      </div>
    );
};

export default Burger;