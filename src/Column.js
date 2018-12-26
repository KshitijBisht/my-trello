import React from "react";
import Card from "./Card";


export default ({
    column,
    columnIndex,
    onMoveLeft,
    onMoveRight,
    onAddCard,
    onDelete,
    onDeleteColumn
}) => (
    <div className="column">
    <h1> {column.name}</h1>
    <button onClick={onDeleteColumn}>X</button>
    {column.cards.map((card,cardIndex)=>(
        <Card
         key={cardIndex}
         card={card}
         cardIndex={cardIndex}
         canMoveLeft={columnIndex !== 0}
         canMoveRight={columnIndex !==2}
         onMoveLeft={() =>onMoveLeft(cardIndex)}
         onMoveRight={() =>onMoveRight(cardIndex)}
         onDelete={() => onDelete(cardIndex)}
         columnIndex={columnIndex}
        />
        
    ))}
    <button onClick={onAddCard}>+</button>
    </div>
);