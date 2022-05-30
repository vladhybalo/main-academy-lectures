import React from "react";

import { playModes } from "../../Config";

import Cell from "../Cell/Cell";

export default class Board extends React.Component {
    state = {
        boardEntity: {
            id1: {id: 'id1', value: 1},
            id2: {id: 'id2', value: 2},
            id3: {id: 'id3', value: 3},
            id4: {id: 'id4', value: 4}
        },
        boardId: ['id1', 'id2', 'id3', 'id4'],
        reproducedBoardEntity: {
            id1: {id: 'id1'},
            id2: {id: 'id2'},
            id3: {id: 'id3'},
            id4: {id: 'id4'}
        },
        playMode: playModes.MEMORIZING
    }

    count = 0;
    elementsLength = 4;

    componentDidMount() {
        const boardId = [...this.state.boardId];
        const newBoardIds = [];

        for(let i = boardId.length; i !== 0; i--) {
            const index = Math.floor(Math.random() * i);

            const newElem = boardId.splice(index, 1);

            newBoardIds.push(newElem);
        }

        this.setState({
            boardId: newBoardIds
        })
        if(this.state.playMode === playModes.MEMORIZING) {
            setTimeout(() => {
                this.setState({
                    playMode: playModes.REPRODUCING
                })
            }, 3000);
        }

    }

    onCellClick = (id) => () => {
        const {reproducedBoardEntity} = this.state;

        if(!reproducedBoardEntity[id].value) {
            const count = this.count + 1;
            const elem ={};

            if(this.state.boardEntity[id].value === count) {
                elem.value = ++this.count;
            } else {
                elem.error = true;

                setTimeout(() => {
                    const newEntity = {
                        [id]: {
                            ...this.state.reproducedBoardEntity[id],
                            error: false
                        }
                    }

                    this.setState({
                        reproducedBoardEntity: {
                            ...this.state.reproducedBoardEntity,
                            ...newEntity
                        }
                    });
                }, 1000);
            }

            this.setState({
                reproducedBoardEntity: {
                    ...reproducedBoardEntity,
                    [id]: {
                        ...reproducedBoardEntity[id],
                        ...elem
                    }
                }
            })
        } 

        if(this.count === this.elementsLength) {
            console.log('Congrats!!')
        }
    }

    render() {
        const {boardEntity, playMode, reproducedBoardEntity, boardId} = this.state;

        const renderedEntity = playMode === playModes.MEMORIZING ? 
        boardEntity : 
        reproducedBoardEntity;
       
        return (
        <div>
            <h2>{playMode === playModes.MEMORIZING ? 'Please, remember' : 'Do it!'}</h2>
            <table border="1" cellSpacing="0">
                <tbody>
                <tr>
                    {boardId.map(id => {
                        return (
                            <Cell 
                                key={renderedEntity[id].id} 
                                playMode={playMode}
                                onCellClick={this.onCellClick(id)}
                                error={renderedEntity[id].error}
                            >
                                {renderedEntity[id].value}
                            </Cell>      
                        )
                    })}
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}