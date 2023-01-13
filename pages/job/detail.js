import { ArrowLeftIcon, BriefcaseIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetOneJobRequest } from '../redux-saga/Action/JobAction'
import { render } from 'react-dom'
import Image from 'next/image'
import ImageFallback from '../component/layout/ImageFallback'

export default function JobDetail(props) {
  const dispatch = useDispatch()
  const { job } = useSelector(state => state.jobStated)
  useEffect(() => {
    dispatch(GetOneJobRequest(props.id))
  }, [])

  const onReplace = (description) => {
    const Str = () => (
      <div dangerouslySetInnerHTML={{ __html: description}} />
    )
    render(<Str />, document.getElementById('description'))
  }

  return (
    <div>
      <div className='mt-2 mb-4 font-bold text-blue-600'>
        <div className='cursor-pointer inline-flex' onClick={() => props.setDisplay(false)}>
          <ArrowLeftIcon className='w-5 h-5 mt-1' /> &nbsp;
          <span className='text-lg'>Back</span>
        </div>
      </div>

      <div className='lg:grid lg:grid-cols-4 gap-8'>
        <div className='lg:col-span-3 shadow border rounded-xl px-6 py-5'>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="mb-1 text-2xl font-bold leading-7 text-indigo-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {job.title}
              </h2>
              <div className="mt-1 mb-4 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  {job.type}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <LocationMarkerIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  {job.location}
                </div>
              </div>

              <div className='mt-6'>
                <div className='text-gray-600'><div dangerouslySetInnerHTML={{ __html: job.description}} /></div>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:col-span-1'>
          <div className='fixed mr-8'>
            <div className='shadow border rounded-lg mb-4 pb-2'>
              <h3 className='font-bold text-gray-700 text-lg mb-2 px-4 pt-3'>{job.company}</h3>
              {/* <img src={job.company_logo ?? '/codeid.png'} alt='logo' className='w-200 h-auto px-4 pb-3' /> */}
              <ImageFallback
                width={250}
                height={200}
                src={job.company_logo}
                fallbackSrc='/codeid.png'
                className='px-4 pb-3'
              />
              <hr className='mb-1'></hr>
              <a href={job.company_url} className='px-4 text-blue-600 text-sm'>{job.company_url}</a>
            </div>

            <div className='shadow border rounded-lg mb-4'>
              <h3 className='font-bold text-gray-800 mb-2 px-4 pt-3'>How to apply</h3>
              <hr className='mb-1'></hr>
              <div className='px-4 py-2 text-gray-600 text-sm'><div dangerouslySetInnerHTML={{ __html: job.how_to_apply}} /></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
