import React from 'react'

import { Button } from './Button'

export default {
  title: 'Plume/Button',
  component: Button,
}

export const Primary = () => <Button priority="high">Hello World</Button>
export const Secondary = () => <Button priority="low">Hello World</Button>
