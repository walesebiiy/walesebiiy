import React from 'react'
import styled from 'styled-components'

const Meta = () => {
  return (
    <>
      <Section>
        <Title>meta</Title>
        <Parag>
          I've poured my heart and soul into making this little corner of the
          internet feel like me.
        </Parag>
        <Parag>
          I don't expect anyone else to care that much, but I figured I would
          write down some of the nooks and crannies of this place:
        </Parag>
        <Parag>
          <ul>
            <li>Dark (by default) and light mode.</li>
            <li>
              Sound design! Not much, a few whooshes and bleeps here and there.
            </li>
            <li>Fascinating hover interactions </li>
            <li>Custom cursor to make your experience even better</li>
          </ul>
        </Parag>
        <div className='divider' />
        <Parag>This site would not exist, as it does today, without:</Parag>
        <Parag>
          <ul>
            <li>React-Js</li>
            <li>Prop-Types</li>
            <li>Styled-Components</li>
            <li>Sentry</li>
            <li>Vercel Web Servers</li>
          </ul>
        </Parag>
      </Section>
    </>
  )
}

export default Meta

const Section = styled.section`
  ul {
    margin: 0px 20px;
  }

  .divider {
    height: 3px;
    width: 100px;
    margin: 48px auto;
    background: linear-gradient(-90deg, #ddd6f3, #faaca8);
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;

  /* gradient */
  background: -webkit-linear-gradient(right, #ddd6f3 80%, #faaca8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Parag = styled.p`
  line-height: 36px;
  margin: 16px 0px;
  font-size: 1.225rem;
  letter-spacing: 0.25px;
`