import React, {useState} from "react";
import '../App.css';
import { buyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <>
            <h1>Number of cakes - {props.numOfCakes} </h1>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);