import React from 'react'
import ContactImage from "../img/banner.png"
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__left'>
        <img src={ContactImage} alt="contact"/>
      </div>
      <div className='contact__right'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input placeholder='ad soyad giriniz...'/>
          <label>Email</label>
          <input placeholder='email giriniz...'/>
          <label>Mesajınız</label>
          <textarea placeholder='mesaj giriniz...'/>
          
        </form>
        <button>Gönder</button>
        
      </div>
    </div>
  )
}

export default Contact