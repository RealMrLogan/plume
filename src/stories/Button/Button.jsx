/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'

const buttonCss = {
  '--purple-1': '#4319B9',
  '--purple-2': '#7662F1',
  '--transition-speed': '300ms',

  boxSizing: 'border-box',
  padding: 10,
  border: '4px solid var(--base-color)',
  transition: 'var(--transition-speed)',
  backgroundColor: 'white',
  fontSize: 24,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'var(--base-color)',
  },
}

export const Button = ({ children, priority }) => {
  let baseColor
  switch (priority) {
    case 'high':
      baseColor = {
        '--base-color': 'var(--purple-1)',
        '&:hover': {
          color: 'white',
        },
      }
      break
    default:
      baseColor = { '--base-color': 'var(--purple-2)' }
  }

  return (
    <button type="button" css={[baseColor, buttonCss]}>
      {children}
    </button>
  )
}
Button.propTypes = {
  children: PropTypes.node,
  priority: PropTypes.string,
}
Button.defaultProps = {
  children: null,
  priority: 'low',
}

export default null
