import React from 'react'
import AnimTitle from './AnimTitle'

export default function MainTitle({heading, headingText, children}) {
  return (
    <div className="title">
      <AnimTitle>
        {Array.isArray(headingText) ?
            <>
            {headingText.map(text => 
                <h1 className={heading}>{text}</h1>
            )}
            </>
        :
            <h1 className={heading}>{headingText}</h1>
        }
      </AnimTitle>
      {children}
    </div>
  )
}
