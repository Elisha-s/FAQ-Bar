import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
    const[pressedState,setPressedState]= React.useState(false)
    function handleToggle()
    {
        setPressedState(prevState => !prevState)
    }
	// add a state variable here

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn" onClick={handleToggle}>{pressedState?"-":"+"}</button>
			</header>
			{pressedState && <p>{info}</p>}
		</article>
	)
}

export default Question
