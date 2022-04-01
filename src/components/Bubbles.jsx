import React, { useState, useEffect } from 'react'

export const Bubbles = ({ source, alt }) => {
    const [isHovered, setIsHovered] = useState(false)
    const setImg = (params) => {
        params ? console.log(source[1]) : console.log(source[0])
    }
    return (
        <>
            <img
                src={isHovered ? source[1] : source[0]}
                alt={alt}
                className="cursor-pointer bubble"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </>
    )
}
