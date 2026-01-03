import React from 'react'
import {MoveUpRight} from 'lucide-react'
const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
        <div className='p-6'>
            <h1 className='mb-5 text-5xl leading-[1.1] font-bold'>Prospective <br/> <span className='bg-gray-200 rounded-full px-3'>customer</span> <br/> Segmentation</h1>
            <p className='text-xl font-medium text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex non veritatis sapiente laudantium maiores delectus debitis accusamus reiciendis recusandae commodi?</p>
        </div>
        <div>
            <MoveUpRight size={55} />
        </div>
    </div>
  )
}

export default LeftContent