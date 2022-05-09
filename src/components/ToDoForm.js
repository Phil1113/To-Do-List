
import React from "react"
export default class ToDoForm extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div class="form"> To Do List
                <form onSubmit={this.props.handleSubmit} >
                    <input class='input'
                        type="text"
                        placeholder="Enter a Task..."
                        value={this.props.input}
                        onChange={this.props.changeInput}
                    />
                    <input class="time" 
                        type="time"
                        placeholder="TIME"
                        // value={this.props.time}
                        onChange={this.props.handleChangeTime}
                        />
                    <select
                    // value={this.props.day} 
                    onChange={this.props.handleChangeDay}
                    >
                        <option>Pick Day</option>
                        <option value="Monday">Monday</option>
                        <option value='Tuesday'>Tuesday</option>
                        <option value='Wednsday'>Wednsday</option>
                        <option value='Thursday'>Thursday</option>
                        <option value='Friday'>Friday</option>
                        <option value='Saturday'>Saturday</option>
                        <option value='Sunday'>Sunday</option>
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}


