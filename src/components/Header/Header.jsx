import React from 'react'
import s from './Header.module.scss'


const Header = () => {
  return (
   <>
   <section className={s.section}>
      <div className="container">
         <div className={s.wrap}>

            <img src="/Frame (5).png" alt="" />
            <div className={s.nav}>
               <a href=''>Product</a>
               <a href=''>Explore</a>
               <a href=''>Resources</a>
               <a href=''>Support</a>
               <a href=''>Pricing</a>
               <a href=''>Jobs</a>
               <a href=''>Sign In</a>
               <a href="">Create Sandbox</a>
            </div>

         </div>
      </div>
   </section>
   </>
  )
}

export default Header