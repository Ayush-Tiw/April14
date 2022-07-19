import React from "react";

export default function Cards(props){
    return<div>Cards
        src={props.image}
        cardtitle={props.cardtitle}
        {props.condition==="green"?"go somewhere":"go othrtwhere"}
    </div>
}