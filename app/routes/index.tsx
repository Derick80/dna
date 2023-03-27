import React from 'react'

export default function Index() {
  const [baseSeq, setBaseSeq] = React.useState('')


  const revComp = getRevComp({sequence:baseSeq})
  return (
    <div
    className='flex flex-col items-center justify-center min-h-screen py-2'

    >
      <label htmlFor="baseSeq">Enter a sequence</label>
<input type="text" value={baseSeq}
className='border-2 border-black'

onChange={(e) => setBaseSeq(e.target.value)}
/>
<div
className='flex flex-col items-center'
>
  <p className='text-2xl'>
      Your Reversed and complimented sequence is:
        </p>
        <p>
          { revComp }
        </p>
</div>
    </div>
  );
}

function getRevComp({sequence}:{sequence:string}){

    const revComp = sequence.split('').reverse().map((base) => {
      if (base === 'a' || base === 'A') {
        return 'T'
      } else if (base === 't' || base === 'T') {
        return 'A'
      } else if (base === 'c' || base === 'C') {
        return 'G'
      } else if (base === 'g' || base === 'G') {
        return 'C '
      }
    }
    ).join('')
    return revComp



}
