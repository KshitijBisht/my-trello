import React from "react";

export default ({
    card,
    canMoveLeft,
    canMoveRight,
    onMoveLeft,
    onMoveRight,
    onDelete
})=>(
    <div className="card">
    {canMoveLeft  && < button onClick={onMoveLeft}>{'<'}</button>}
    <span className="title">{card.name}</span>
    {canMoveRight && <button onClick={onMoveRight}>{'>'}</button>}
    <button onClick={onDelete}>Delete</button>
    </div>
)