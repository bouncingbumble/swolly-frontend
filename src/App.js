import React, { Component } from 'react'
import Timer from './Timer'

export default class App extends Component {
    getRandomEmoji = () => {
        const emojis = ['💪', '🙏', '🏋', '️‍🥊', '🥇', '🏃‍♂️', '💸', '💯', '🎉', '🚵‍♀️']
        const ranNum = Math.floor(Math.random() * 10)

        return emojis[ranNum]
    }

    render() {
        const date = new Date()
        var month = new Array();
        const workout = {
            sections: []
        }
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December"
        const heading = <h2>Workout for {workout.name}: {month[date.getMonth()] + ' ' + date.getDate()}</h2>
        const sections = workout.sections.map(s => {
            return (
                <div className="section">
                    <h3>{this.getRandomEmoji()} {s.title}</h3>
                    <div className="excercises" >
                        {s.excercises.map(e => {
                            return (
                                <div className="excercise" >
                                    <span className="reps" style={{ fontWeight: 'bold' }}>{e.reps}</span>
                                    <span className="name" >&#09;{e.name}</span>
                                </div>
                            )
                        })
                        }
                    </div>
                    <span className="sets" style={{ fontSize: "1.3rem" }}>{s.sets}x</span>
                </div>
            )
        })

        return (
            <>
                <div className="App" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '5%',
                    height: '100%',
                    marginBottom: 150
                }}>
                    <div style={{ flex: '1 0 auto' }}>
                        <div className="heading">
                            {heading}
                        </div>
                        <div className="introSection" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://i.imgur.com/1nzvAPP.jpg" alt="" srcset="" style={{ height: 66, width: '52px !important' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 0px 10px 10px' }}>
                                <div className="contact">
                                    Scott Jennings - <a href="https://www.instagram.com/sjfunctional_fit/">@sjfunctional_fit</a>
                                </div>
                                <div className="intro" style={{ paddingTop: 10 }}>
                                    {workout.intro}
                                </div>
                            </div>
                        </div>
                        <div className="workoutSection">
                            {sections}
                        </div>
                    </div>

                </div >
                <footer style={{
                    position: 'fixed',
                    width: '100%',
                    bottom: 0,
                    backgroundColor: 'black'
                }}>
                    <Timer options={{ delay: 10 }}></Timer>
                </footer>
            </>
        )
    }
}

