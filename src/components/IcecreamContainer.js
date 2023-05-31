import React from "react";
import '../App.css';
import { buyIcecream } from "../redux";
import { connect } from "react-redux";

function IcecreamContainer(props) {
    return (
        <>
            <h1>Number of Icecream - {props.numOfIcecream} </h1>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIcecream: state.icecream.numOfIcecream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);