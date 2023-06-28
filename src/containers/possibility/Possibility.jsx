import React from 'react'
import './possibility.css';
import possibility from '..//..//assets/possibility.png';

const Possibility= () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to Get Started</h4>
        <h1 className='gradient__text'>The Possibilities Are Beyond Your Imagination </h1>
        <p>GPT-3, with its remarkable 175 billion parameters, unlocks possibilities that surpass imagination. This powerful language model generates text that is coherent, contextually relevant, and supports various languages and formats. Its applications span content creation, chatbots, translation, and much more, offering endless potential for innovation and exploration.</p>
        <h4>Request for early access</h4>
      </div>
    </div>
  )
}

export default Possibility