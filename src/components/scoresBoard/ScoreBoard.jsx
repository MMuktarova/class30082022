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
        const copyState2 = [...this.state.teams]
        copyState[index].votes = copyState[index].votes + 1
        
        
        const winner = copyState2.reduce((prev, cur) => {
            if (prev.votes > cur.votes) {
                return prev
            }
            return cur
        })
        console.log(winner)
        this.setState({teams:copyState,winner})
    }
    render() {
        const { teams } = this.state
        const {winner} = this.state
        return (
            <div style={styles.container}>
                {
                    teams.map((team, index) => {
                        return (
                            <div key={team.id} style={styles.box}>
                                <img
                                    src={team.img}
                                    alt={team.nameClub}
                                    style={styles.img}
                                />
                                <h3>{team.nameClub}</h3>

                                <button
                                    onClick={() => this.addOneVote(index)}
                                    style={(team === winner) ? styles.button : styles.box}>
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
