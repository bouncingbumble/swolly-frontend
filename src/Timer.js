import React, { Component } from 'react'
import SecondsTohhmmss from './SecondsTohhmmss'

let offset = null, interval = null

export default class Timer extends Component {

    state = {
        clock: 0,
        time: '00:00:00.00',
        showStart: true,
        showStop: false,
        showReset: false
    }

    componentWillUnmount() {
        this.pause()
    }

    pause() {
        if (interval) {
            clearInterval(interval)
            interval = null
            this.setState({ showStart: true, showStop: false, showReset: true })
        }
    }

    play() {
        if (!interval) {
            offset = Date.now()
            interval = setInterval(this.update.bind(this), this.props.options.delay)
            this.setState({ showStart: false, showStop: true, showReset: false })
        }
    }

    reset() {
        let clockReset = 0
        this.setState({ clock: clockReset })
        let time = SecondsTohhmmss(clockReset / 1000)
        this.setState({ time: time, showReset: false })
    }

    update() {
        let clock = this.state.clock
        clock += this.calculateOffset()
        this.setState({ clock: clock })
        let time = SecondsTohhmmss(clock / 1000)
        this.setState({ time: time })
    }

    calculateOffset() {
        let now = Date.now()
        let newOffset = now - offset
        offset = now
        return newOffset
    }

    render() {
        const timerStyle = {
            margin: "0px",
            padding: "1.2em",
            color: "white",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        };

        const buttonStyle = {
            background: "#fff",
            color: "#666",
            border: "1px solid #ddd",
            marginRight: "5px",
            padding: "10px",
            borderRadius: '50%',
            height: 55,
            width: 55
        };

        const secondsStyles = {
            fontSize: "200%",
            lineHeight: "1.5",
            margin: "0",
        };

        return (
            <div style={timerStyle} className="react-timer">
                <h3 style={secondsStyles} className="seconds"> {this.state.time} {this.props.prefix}</h3>
                {this.state.showReset && <button onClick={this.reset.bind(this)} style={buttonStyle} >Reset</button>}
                {this.state.showStop && <button onClick={this.pause.bind(this)} style={buttonStyle} >Stop</button>}
                {this.state.showStart && <button onClick={this.play.bind(this)} style={buttonStyle} >Start</button>}
            </div>
        )
    }
}
