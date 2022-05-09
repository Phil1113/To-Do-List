
import React from 'react'
import ToDoForm from './components/ToDoForm'
// import ListMapper from './components/ListMapper'
import WeekMap from './components/WeekMap'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoInput: '',
            toDoList: [],
            time: '',
            day: ''

        }
    }



    handleChangeInput = (event) => {
        // console.log(event.target.value)
        this.setState({
            
            toDoInput: event.target.value
        });
    };
    handleChangeTime = (event) => {
        this.setState({
            time: event.target.value
        });
    };
    handleChangeDay = (event) => {
        this.setState({
            day: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault()
        let newTask = {
            id: this.state.toDoList.length + 1,
            task: this.state.toDoInput,
            time: this.state.time,
            day: this.state.day
        }
        this.setState({
            toDoList: [...this.state.toDoList, newTask],
            toDoInput: ""
          
        })
        event.target.reset()
    }
    handleDelete = (e)=>{
        let id = +e.target.id
        let done = this.state.toDoList.filter(v => v.id !== id)

        this.setState({
            ...this.state,
            toDoList:done
        })        
    }






    render() {
        return (
            <div className="front">
                <ToDoForm
                    input={this.state.toDoInput}
                    handleSubmit={this.handleSubmit}
                    changeInput={this.handleChangeInput}
                    handleChangeTime={this.handleChangeTime}
                    handleChangeDay={this.handleChangeDay}
                />
            
                <WeekMap
                list = {this.state.toDoList}
                handleDelete = {this.handleDelete}
                />
          
            </div>
        )
    }


}
export default App;
