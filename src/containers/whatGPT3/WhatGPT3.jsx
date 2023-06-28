import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3= () => {
  const text = 'GPT-3 is a powerful language model developed by OpenAI, with 175 billion parameters. It generates coherent and contextually relevant text based on prompts, understanding multiple languages and formats. It finds applications in content creation, chatbots, translation, and more.'
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title = 'What is GPT-3' text = {text}/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default WhatGPT3