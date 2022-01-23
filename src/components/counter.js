import {connect} from "react-redux";
import './style.css'
import plus from './img/plus.svg';
import minus from './img/minus.svg';
import * as actions from '../actions';

const Counter = ({counter, inc, dec}) => {
    return (
        <div className="container">
            <div className="counter">
                <div className="counter__control">
                    <button className="counter__button" onClick={inc}>
                        <img src={plus} alt="plus"/>
                    </button>
                    <div className="counter__result">{counter}</div>
                    <button className="counter__button" onClick={dec}>
                        <img src={minus} alt="minus"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);
