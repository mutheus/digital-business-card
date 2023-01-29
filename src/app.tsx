import {
  CodepenIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from './assets/icons'
import Avatar from './assets/avatar.jpg'

import './app.css'

export function App () {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card__header'>
          <img src={Avatar} alt='Matheus Almeida avatar' />
        </div>

        <div className='card__body'>
          <section className='info'>
            <h1 className='info__name'>Matheus Almeida</h1>

            <h2 className='info__role'>Frontend Developer</h2>

            <small className='info__website'>
              <a href='https://mutheus.github.io'>mutheus.github.io</a>
            </small>

            <div className='info__social'>
              <a
                href='mailto:matheusalmeida016@gmail.com'
                className='info__btn info__btn--primary'
                target='_blank' rel='noreferrer'
              >
                <MailIcon width={16} height={16} />

                <span>Email</span>
              </a>

              <a
                href='https://www.linkedin.com/in/mutheusalmeida/'
                className='info__btn info__btn--secondary'
                target='_blank' rel='noreferrer'
              >
                <LinkedinIcon width={16} height={16} />

                <span>LinkedIn</span>
              </a>
            </div>
          </section>

          <section className='about'>
            <h3 className='about__title'>About</h3>

            <p className='about__para'>I am a frontend developer with an eye for design who loves to keep it simple. I try to bring the best practices to the table, always making sure I am doing the best to deliver a top quality product.</p>
          </section>

          <section className='interests'>
            <h3 className='interests__title'>Interests</h3>

            <p className='interests__para'>Combat sports commentator. Instagram boxer. Music practitioner. Reader. Internet addicted. Movie lover. Coffee addicted too.</p>
          </section>
        </div>

        <div className='card__footer'>
          <a href='https://twitter.com/mutheusalmeida' target='__blank' className='card__social'>
            <TwitterIcon width={24} height={24} />
          </a>

          <a href='https://codepen.io/matheusalmeida' target='__blank' className='card__social'>
            <CodepenIcon width={24} height={24} />
          </a>

          <a href='https://instagram.com/mutheusalmeida' target='__blank' className='card__social'>
            <InstagramIcon width={24} height={24} />
          </a>

          <a href='https://github.com/mutheus' target='__blank' className='card__social'>
            <GitHubIcon width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
