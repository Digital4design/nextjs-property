"use client";
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import {usePathname } from 'next/navigation';
import { steps } from '@/app/constants';
import { useEffect, useState } from 'react';
import Link from 'next/link';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StepsBullets() {
  const pathname = usePathname();
  const [id, setId] = useState(1);

  const checkStatus = (pathname) => {
    steps.map(step=>{
      step.href === pathname ? setId(step.id) : setId(1);
    })
  }
  useEffect(()=>{
    checkStatus(pathname)
  },[]);
  
  useEffect(()=>{
    checkStatus(pathname)
  },[id]);

  const onChange = (stepId) => {
    setId(stepId);
  }
  return (
    <div className="px-4 py-4 lg:py-12 sm:px-6 lg:px-8 h-full border-b lg:border-r border-gray-300">
      <nav className="flex" aria-label="Progress">
        <ol role="list" className="lg:space-y-5 flex flex-wrap justify-between w-full lg:flex-col">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? '' : '', 'relative mb-4 w-1/2 sm:w-1/3 md:mb-0 md:w-1/4 lg:w-full lg:mb-0')}>
                <>
                {
                  id < step.id ?
                  <Link href={step.href} className="flex items-start xyz" aria-current="step" onClick={()=>onChange(step.id)}>
                    <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                      <span className="absolute h-4 w-4 rounded-full bg-white border-2 border-solid border-teal-500" />
                      <span className="relative block h-2 w-2 rounded-full bg-teal-500" />
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-500">{step.name}</span>
                  </Link>
                  :
                  <Link href={step.href} className="flex items-start abc" aria-current="step" onClick={()=>onChange(step.id)}>
                    <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                      <span className="absolute h-4 w-4 rounded-full bg-white border-2 border-solid border-teal-500" />
                      <span className="relative block h-2 w-2 rounded-full bg-teal-500" />
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-500">{step.name}</span>
                  </Link>
                  }
                </>                
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}