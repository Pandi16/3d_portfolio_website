import React from 'react'
import { useState,useRef } from 'react';
import {motion} from 'framer-motion'
import { styles } from '../style'
import  emailjs  from '@emailjs/browser';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [isSent,setIsSent]=useState(false);
  const formRef=useRef();
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  })
  const [loading,setLoading]=useState(false);
  const handleChange=(e)=>{};
  const handleSubmit=(e)=>{};

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween',0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form action="" ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' placeholder="What's your name?" />

          </label>
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' placeholder="What's your email?" />
            
          </label>
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' placeholder="What do you want to say?" />
            
          </label>
          <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-empty shadow-primary  rounded-xl '>
            {loading? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('left','tween',0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");