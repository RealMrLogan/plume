import React from 'react'
import PropTypes from 'prop-types'
import './button.css'
import {css} from 'emotion'

const buttonCss = css`
  box-sizing: box-sizing;
  padding: 20px;
  border: 4px solid var(--base-color);
  transition: var(--tranistion-speed);

  &:hover {
    background-color: var(--base-color);
  }
`

export const Button = ({children, priority}) => {
  let baseColor
  switch (priority) {
    case "high":
    baseColor = css`--base-color: var(--purple1);`
    break;
  default:
    baseColor = css`--base-color: var(--purple2);`
  }

  return (
    <button css={[baseColor, buttonCss]}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  priority: PropTypes.string,
}
