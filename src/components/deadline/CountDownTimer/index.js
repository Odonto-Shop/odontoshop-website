import React from 'react'

import NormalClock from '../NormalClock/NormalClock'
import { CountDownSection, ClockWrapper } from './countDown.style'

const deadline = new Date(Date.parse(new Date()) + 35 * 24 * 60 * 60 * 1000)

const CountDownTimer = () => {
  return (
    <CountDownSection>
      <ClockWrapper>
        <NormalClock countdown={deadline} />
      </ClockWrapper>
    </CountDownSection>
  )
}

export default CountDownTimer
