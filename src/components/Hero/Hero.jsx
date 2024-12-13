import React from 'react'
import s from './Hero.module.scss'

const Hero = () => {
  return (
    <>
    <section className={s.section}>
      <div className="container">
         <div>
            <img src="/IMAGE.png" alt="" />
         </div>

         <div className={s.title}>
            <p>CodeSandbox</p>
            <p>Where teams build </p>
            <p>faster, together.</p>
            <p>Create, share, and get feedback with collaborative sandboxes for rapid web development.</p>
            <button className={s.btn}> Start coding for free </button>
         </div>

      </div>
    </section>
    </>
  )
}

export default Hero