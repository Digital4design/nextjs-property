import React from 'react'

const GroupButton = ({buttons, label}) => {
    let gridColumn = 12;
    let width = gridColumn/buttons.length;
  return (
    <>
        <label className='text-sm font-medium text-gray-500 group-hover:text-gray-900 mb-1 block'>{label}</label>
        <div className="inline-flex rounded-md items-center w-full">
            {
                buttons && buttons.length > 0 && buttons?.map((button, index)=>(
                    <div key={index} className={`inline-flex w-1/${buttons.length}`}>
                        {
                            index === 0 ? (
                                <a key={index} href="#" aria-current="page" className={`w-full px-14 py-3 text-sm font-medium text-black leading-6 bg-gray-300 border border-gray-300 rounded-l-lg hover:bg-gray-300 focus:text-black h-12`}>
                                    {button.name}
                                </a>
                            )
                            :
                            index === buttons.length-1 ? (
                                <a key={index} href="#" className={`w-full px-14 py-3 text-sm font-medium text-gray-500 leading-6 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-300 hover:text-black focus:text-black h-12`}>
                                    {button.name}
                                </a>
                            )
                            :
                            <a key={index} href="#" className={`w-full px-14 py-3 text-sm font-medium text-gray-500 leading-6 bg-white border-t border-b border-gray-300 hover:bg-gray-300 hover:text-black focus:text-black h-12`}>
                                {button.name}
                            </a>
                        }
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default GroupButton