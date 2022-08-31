import { Component } from "react";
import { teams } from './data'

class ScoreBoard extends Component{
    constructor() {
        super()
        this.state = {teams}
    }
    render() {
        const {teams} =this.state
        return (
            <div>
                {
                    teams.map((team) => {
                        return (
                            <div>
                                {team.nameClub}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}
export default ScoreBoard
