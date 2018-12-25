import React, { Component } from 'react';
import Column from "./Column"
import {connect} from "react-redux";
import {ADD,MOVE,LOAD, DELETE} from "./actions";
import './App.css';
const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
 
  componentDidMount = () => this.props.load()

  handleAdd = columnIndex => {
    const name = window.prompt('Name?')
    if(!name) return
    const card = {name}
    this.props.add(columnIndex,card);
    
  }

  handleDelete = (columIndex,cardIndex) => {
    const confirmation = window.confirm("Are you sure you want to delete this task?");
    if(!confirmation) return
    this.props.delete(columIndex,cardIndex)
  }

  render() {
    if(!this.props.columns) return null
    return (
      <div className="App">
        {this.props.columns.map((column,columnIndex)=>(
          <Column 
           column={column}
           columnIndex={columnIndex} 
           key={columnIndex}
           onMoveLeft={cardIndex => this.props.move(columnIndex,cardIndex,DIRECTION_LEFT)}
           onMoveRight={cardIndex=> this.props.move(columnIndex,cardIndex,DIRECTION_RIGHT)}
           onAddCard={()=>this.handleAdd(columnIndex)}
           onDelete={cardIndex => this.handleDelete(columnIndex,cardIndex)}           
           />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({columns}) => ({
  columns
})

const mapDispatchToProps = (dispatch) => ({
  add: (columnIndex,card) => dispatch({type:ADD,columnIndex,card}),
  move: (columnIndex,cardIndex,direction) => dispatch({type:MOVE,columnIndex,cardIndex,direction}),
  load: () => dispatch({type:LOAD}),
  delete: (columnIndex,cardIndex) => dispatch({type:DELETE,columnIndex,cardIndex})
})
export default connect(mapStateToProps,mapDispatchToProps) (App);

