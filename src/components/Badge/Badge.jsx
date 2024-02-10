import React from 'react'
import PropTypes from 'prop-types';
import './Badge.css'

function Badge({shape='square', color='gray', label='badge'}) {
    const classes = ['badge']
    classes.push(shape === 'pill'?'pill':'square')
    classes.push('color-' + color)
    return (
        <div className={classes.join(' ')}>{label}</div>
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
    * Badge label
    */
    label: PropTypes.string,
};

Badge.defaultProps = {
    color: 'gray',
    shape: 'square',
    label: 'badge'
};