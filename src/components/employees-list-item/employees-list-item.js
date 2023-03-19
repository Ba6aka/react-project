import './employees-list-item.css';
import { Component } from 'react';


class EmployeesListItem extends Component  {
    constructor(props){
        super(props)
        this.state = {
            increase: false,
            rise:false,
        }
    }
    
    onIncrease = () =>{
        this.setState(({increase}) =>({
            increase: !increase})
        )
    }

    onRise = () =>{
        this.setState(({rise}) =>({
            rise: !rise})
        )
    }

    render(){
        const{name,surname,salary} = this.props
        const{increase,rise} = this.state

        let liClassName = "list-group-item d-flex justify-content-between"
        if(increase){
            liClassName += ' increase'
        }
        if(rise){
            liClassName += ' like'
        }
        return (
            <li className={liClassName}><span  onClick={this.onRise} className="list-group-item-label">{name} {surname}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={this.onIncrease}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>
    
                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div></li>   
        )
    }
   
}

export default EmployeesListItem;