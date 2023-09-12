"use client";
import React from 'react'

const Fields = ({name, type, label, placeholder, id, value, icon, iconAsText, iconPlacement, required, onChange}) => {
    return (
        <div>
            <label className='text-sm font-medium text-gray-500 group-hover:text-gray-900 mb-1 block'>{label}</label>
                <div className='relative'>
                {
                    icon === 'percentage' && 
                    <div className={`absolute inset-y-0 ${iconPlacement === 'right' ? 'right-0 pr-3.5':'left-0 pl-3.5'} flex items-center pointer-events-none`}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="208.000000pt" height="242.000000pt" viewBox="0 0 208.000000 242.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,242.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M380 2406 c-162 -36 -299 -168 -353 -341 -18 -59 -22 -93 -22 -220 0 -162 11 -226 52 -310 64 -129 165 -217 295 -256 89 -27 223 -23 308 10 122 46 235 172 281 314 21 64 24 90 24 232 0 177 -11 232 -67 338 -38 71 -137 166 -210 200 -95 45 -203 56 -308 33z m210 -259 c56 -30 105 -100 120 -174 19 -90 9 -266 -20 -331 -23 -54 -73 -106 -119 -124 -50 -19 -145 -13 -193 13 -55 31 -103 102 -119 176 -14 68 -7 250 12 306 16 48 71 112 118 137 53 28 145 27 201 -3z"/>
                                <path d="M925 1263 c-312 -498 -565 -906 -563 -908 29 -24 200 -136 204 -133 2 3 258 410 568 905 l563 900 -103 70 -103 71 -566 -905z"/>
                                <path d="M1460 1145 c-163 -46 -296 -197 -335 -380 -19 -90 -19 -270 0 -359 38 -180 157 -323 313 -377 118 -41 267 -32 372 21 62 32 164 133 198 197 55 104 67 162 67 328 0 170 -10 225 -62 329 -47 94 -122 167 -219 213 -70 33 -85 37 -178 40 -69 2 -118 -2 -156 -12z m206 -240 c106 -31 154 -112 162 -276 9 -194 -31 -305 -128 -357 -38 -20 -56 -23 -117 -20 -94 4 -144 37 -188 123 -29 57 -30 62 -30 204 0 115 4 156 18 192 24 62 84 119 144 135 63 17 80 17 139 -1z"/>
                            </g>
                        </svg>
                    </div>
                }
                {iconAsText !== "" && <div className={`absolute inset-y-0 ${iconPlacement === 'right' ? 'right-0 pr-3.5': 'left-0 pl-3.5'} flex items-center pointer-events-none font-semibold text-gray-500`}>{iconAsText}</div>}
                <input
                    type={type}
                    name={name}
                    value={value}
                    required={required}
                    onChange={onChange}
                    id={id}
                    placeholder={placeholder}
                    className={`${iconPlacement=='right' && 'pl-4 pr-8'} ${iconPlacement =='left' ? 'pr-4 pl-8' : 'px-4'} ${iconPlacement == 'right' && iconAsText=="months" && 'pl-4 pr-20'} block w-full pt-3 pb-3 rounded-lg border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 h-12`}
                />
            </div>
        </div>
    )
}

export default Fields