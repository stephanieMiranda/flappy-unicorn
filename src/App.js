import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

{/* This will create the grid that our unicorn can fly through. */}
function GridCell(props){
     var style = {
          width:20,
          height:20,
          border:'10px solid magenta',
          backgroundColor:props.cell
     }
     return (
          <div style = {style}>
               {/* This is where we need the background Image.*/}
          </div>
     )
}

{/* This returns rows of the GridCell*/}
function GridRow(props) {
     var style = {
          display: "flex"
     }
     return (
          <div style = {style}>
          {/*This is the brute force way to make the "table"*/}
          {/*
               <GridCell/>
               <GridCell/>
               <GridCell/>
          */}

          {
               props.row.map((cell)=>{
                    return <GridCell cell= {cell}/>
               })
          }
          </div>
     )
}

{/*This extends the GridRow*/}
function Grid(props) {

     return (
          <div>
               {/*
               <GridRow/>
               <GridRow/>
               <GridRow/>
               */}

               {/*This uses the map function, uses the array of arrays.*/}
               {
                    props.grid.map((row)=> {
                         return <GridRow row = {row}/>
                    })
               }
          </div>
     )
}

{/*This is how we keep track of the grid we created before. */}
class Game extends React.Component {
     constructor(props){
          super(props)

          {/* We need hundreds of grids to fill the entire viewport.
          To do this, we'll fill an array with the simple 9x9 Grid*/}

          var grid = []
          for(let i = 0; i < 20; i++) {
               {/*Creates a 20 by 30 grid that covers the viewport.*/}
               grid.push(new Array(30).fill('purple'))
          }
          this.state = {grid:grid}

     }
     render(){
          {/* Pass the props, aka state, to the Grid*/}
          return (
               <Grid grid = {this.state.grid}/>
          )
     }

}

export default Game;
