import React from 'react'

const GroupButton = ({buttons, label, name}) => {
    let gridColumn = 12;
    let width = gridColumn/buttons.length;
  return (
    <>
        <label className='text-sm font-medium text-gray-500 group-hover:text-gray-900 mb-1 block'>{label}</label>
        <div className="inline-flex rounded-md items-center w-full tab-btns">
            {
                buttons && buttons.length > 0 && buttons?.map((button, index)=>(
                    <div key={index} className={`inline-flex w-1/${buttons.length}`}>
                        {
                            index === 0 ? (
                                <a key={index} href="#" aria-current="page" className={`relative w-full block`}>
                                    <input type="radio" name={name} id={button.name} className="absolute " />
                                    <label htmlFor={button.name} className='tab-label'>{button.name}</label>
                                </a>
                            )
                            :
                            index === buttons.length-1 ? (
                                <a key={index} href="#" className={`relative w-full block`}>
                                    <input type="radio" name={name} id={button.name} className="absolute " />
                                    <label htmlFor={button.name} className='tab-label'>{button.name}</label>
                                </a>
                            )
                            :
                            <a key={index} href="#" className={`relative w-full block`}>
                                <input type="radio" name={name} id={button.name} className="absolute " />
                                <label htmlFor={button.name} className='tab-label '>{button.name}</label>
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