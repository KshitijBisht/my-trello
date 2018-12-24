import * as actions from "./actions";
export default (state = {},action) => {
    switch(action.type){
        case actions.LOAD:
        return {
            columns:[
              {
                name: 'Backlog',
                cards:[
                  {name: 'Card A'}
                ]
              },
              {
                name: 'Doing',
                cards:[
                  {name: 'Card B'}
                ]
              },
              {
                name: 'Done',
                cards:[
                  {name: 'Card C'}
                ]
              }
            ]
          }
          case actions.MOVE:{
               const {columnIndex,cardIndex,direction} = action

               const columns = [...state.columns]
               
               columns[columnIndex] = {
                 ...columns[columnIndex],
                 cards:[...columns[columnIndex].cards]
               }

               columns[columnIndex+direction] = {
                 ...columns[columnIndex+direction],
                 cards:[...columns[columnIndex + direction].cards]
               }
               const [card] = columns[columnIndex].cards.splice(cardIndex,1)
               columns[columnIndex+direction].cards.push(card)
               return {...state,columns} 
          }
          
          case actions.ADD:{
          const {card, columnIndex} = action
          const columns = [...state.columns]
          columns[columnIndex]= {
            ...columns[columnIndex],
            cards: [
                ...columns[columnIndex].cards,
                card
            ]
          }
          return {...state,columns}  
          }
          default:
          
        }
          
    
    return state
}