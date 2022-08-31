import { Component } from "react";
import { teams } from './data'
import {styles} from './styles'

class ScoreBoard extends Component{
    constructor() {
        super()
        this.state = {teams}
    }
    addOneVote = (index) => {
        const copyState = [...this.state.teams]
        copyState[index].votes = copyState[index].votes + 1
        this.setState({teams:copyState})
    }
    render() {
        const {teams} =this.state
        return (
            <div style={styles.container}>
                {
                    teams.map((team, index) => {
                        return (
                            <div style={styles.box} key={team.id}>
                                <img
                                    src={team.img}
                                    alt={team.nameClub}
                                    style={styles.img}
                                />
                                <h3>{team.nameClub}</h3>

                                <button
                                    onClick={() => this.addOneVote(index)}>
                                    VOTE
                                </button>

                                <h5>{team.votes}</h5>
                                
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}
export default ScoreBoard
