import { Link } from 'react-router-dom'
import heroImg from '../../assets/images/hero.JPG'
import './HomePage.scss'

export default function HomePage() {
  return (
    <main className='home-page' >
      <section className='home-page__hero'>
        <hgroup className='home-page__hero-headings'>
          <h2 className='home-page__heading'>Welcome to <span className='home-page__title'>Easy Instrumentals!</span></h2>
          <h3 className='home-page__sub-heading'>a single-page web application for music production prototyping</h3>

          <p>Easy Instrumentals allows producers, musicians, singers, and anyone interested in music to quickly and easily create a basic instrumental that can be used as a starting point for a more complete song.</p>
          <Link to='/create' className='home-page__hero-cta-link'>
            <button className='home-page__hero-cta'>LETS GET STARTED</button>
          </Link>
        </hgroup>
        <img className='home-page__hero-img' src={heroImg} alt="easy instrumentals" />
      </section>
      <section className='home-page__about'>
        <section className='home-page__about-section'>
          <h2 className='home-page__heading'>The Problem:</h2>
          <p>Many people are interested in the idea of producing their own music, but the barrier to entry is quite high. Not only does one need to commit to purchasing a potentially expensive Digital Audio Workstation, but the learning curve of such sophisticated software is quite steep. Additionally, without a sound understanding of music theory, it can be difficult to create melodies and chord progressions from scratch, so those who just want to make music to sing or play along to end up giving up the idea of making something themselves. </p>
        </section>
        <section className='home-page__about-section'>
          <h2 className='home-page__heading'>The Solution:</h2>
          <p>Easy Instrumentals aims to solve this problem by providing an accessible, simplified workstation with limited features to lower the learning curve, and the ability to drag and drop in pre-made tracks that can be mixed, matched and modified, relieving the stress of making an entire song from scratch.</p>
          <p>Easy Instrumentals is designed for music producers, musicians, singers, and anyone interested in creating music themselves. It is simple enough that little knowledge of music theory or the function of other DAWs is required; but flexible enough that those with more experience can achieve the effects they want within the designed limitations. Easy Instrumentals provides an easily accessible and simplified outlet for prototyping new music.</p>
        </section>
        <hr className='home-page__about-divider' />
        <p>Built in 2 weeks as a capstone Project for <a href='https://brainstation.io/' target='_blank' rel="noreferrer noopener">BrainStation</a> Web Development BootCamp, Easy Instrumentals has been an amazing outlet for practicing my skills, learning new ones, and having fun building something cool!</p>
      </section>
    </main>
  )
}