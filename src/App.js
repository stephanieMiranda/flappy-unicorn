import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

{/* This will create the grid that our unicorn can fly through. */}
function GridCell(props){
     var style = {
          width:20,
          height:20,
          border:'1px solid magenta',
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
          for(let i = 0; i < 25; i++) {
               {/*Creates a 30 by 30 grid that covers the viewport.*/}
               grid.push(new Array(60).fill('purple'))
          }
          var unicorn = {
               height:10,
               position:2
          }
          var flowers = [
               {position:3, height: 5, upright:false},
               {position:5, height: 8, upright:true},
               {position:7, height: 6, upright:false},
          ]

          grid[unicorn.height][unicorn.position] = 'white'

          this.state = {grid:grid,unicorn:unicorn,flowers:flowers}

          this.timerID = setInterval(()=>{
               var gridCopy = []
               var flowersCopy = this.state.flowers.slice()
               for(let i = 0; i < 25; i++) {
                    {/*Creates a 30 by 30 grid that covers the viewport.*/}
                    gridCopy.push(new Array(60).fill('purple'))
               }

               for(let i = 0; i < flowersCopy.length; i++){
                    flowersCopy[i].position--
               }

               for(let i = 0; i < flowersCopy.length; i++){
                    for(let j = 0; j < flowersCopy[i].height; j++){
                         if(flowersCopy[i].upright)
                              gridCopy[24-j][flowersCopy[i].position] = 'green'
                         else
                              gridCopy[j][flowersCopy[i].position] = 'green'
                    }
               }
               var unicornCopy =  this.state.unicorn
               unicornCopy.height++
               if(unicornCopy.height > 24 || unicornCopy.height < 1){
                    unicornCopy.height = 10
               }
               gridCopy[unicornCopy.height][unicornCopy.position] = 'white'

               this.setState({gird:gridCopy,unicorn:unicornCopy})
          },200)
     }

     render(){
          {/* Pass the props, aka state, to the Grid*/}
          return (
               <div>
                    <Grid grid = {this.state.grid}/>
               </div>
          )
     }

}

export default Game;
