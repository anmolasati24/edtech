import React from 'react'

const HighlighteText = ({text}) => {
  return (
    // <span className='font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#29e3e6] text-transparent bg-clip-text'>
    <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
        {" "}
        {text}
    </span>
  )
}

export default HighlighteText

