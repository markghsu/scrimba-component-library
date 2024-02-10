import React from 'react'
import PropTypes from 'prop-types';
import './Badge.css'

function Badge({shape='square', color='gray', children}) {
    const classes = ['badge']
    classes.push(shape === 'pill'?'pill':'square')
    classes.push('color-' + color)
    return (
        <div className={classes.join(' ')}>{children}</div>
    )
}

export default Badge

Badge.propTypes = {
    /**
    * What background/text color should the badge be?
    */
    color: PropTypes.oneOf(['gray','red','yellow','green','blue','indigo','purple','pink']),
    /**
    * Should the badge be a rounded rectangle or a pill?
    */
    shape: PropTypes.oneOf(['square', 'pill']),
    /**
    * Badge contents
    */
    children: PropTypes.node,
};

Badge.defaultProps = {
    color: 'gray',
    shape: 'square',
};