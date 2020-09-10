/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'

const buttonCss = css`
  --purple-1: #4319B9;
  --purple-2: #7662F1;
  --transition-speed: 300ms;

  box-sizing: border-box;
  padding: 10px;
  border: 4px solid var(--base-color);
  transition: var(--transition-speed);
  background-color: white;
  font-size: 24px;

  &:hover {
    background-color: var(--base-color);
  }
`

export const Button = ({ children, priority }) => {
  let baseColor
  switch (priority) {
    case 'high':
      baseColor = css`--base-color: var(--purple-1);`
      break
    default:
      baseColor = css`--base-color: var(--purple-2);`
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
