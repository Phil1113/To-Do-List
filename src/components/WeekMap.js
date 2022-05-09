import React, { Component } from "react"
import ListMapper from "./ListMapper"
let week = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday','Saturday','Sunday']
export default class WeekMap extends React.Component {
    render(){
        return week.map(weekDay => {
            return (
                <div className="week-container">
                    <h2 className="week">{weekDay}</h2>
                    <ul>
                        <ListMapper
                            weekDay={weekDay}
                            list={this.props.list}
                            handleDelete={this.props.handleDelete} />
                    </ul>
                </div>
            )
        }
        )
    }
}