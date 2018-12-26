import React from "react";
import Card from "./Card";
import './App.css';
import EditableLabel from 'react-editable-label'

export default ({
    column,
    columnIndex,
    onMoveLeft,
    onMoveRight,
    onAddCard,
    onDelete,
    onLabelChange,
    onDeleteColumn
}) => (
    <div className="column">
    <button onClick={onDeleteColumn} className="delete-column">X</button>
    <EditableLabel
        className = "column-label" 
        initialValue={column.name}
        save={value=>{onLabelChange(value)}}
    />
    
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
        />
        
    ))}
    <button onClick={onAddCard}>+</button>
    </div>
);