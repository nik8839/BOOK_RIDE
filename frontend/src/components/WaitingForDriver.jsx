import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div className="p-5 max-w-4xl mx-auto"> {/* Added padding and centered content */}
      <h5 className='p-1 text-center w-full absolute top-0' onClick={() => {
        props.waitingForDriver(false)
      }}>
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <div className='flex items-center justify-between'>
        <img className='h-16 md:h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className='text-right'>
          <h2 className='text-xl font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
          <h4 className='text-2xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          <h1 className='text-2xl font-semibold'>  {props.ride?.otp} </h1>
        </div>
      </div>

      <div className='flex gap-4 justify-between flex-col items-center mt-6'>
        <div className='w-full'>
          <div className='flex items-center gap-5 p-4 border-b-2'>
            <i className="ri-map-pin-user-fill text-xl"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-4 border-b-2'>
            <i className="text-xl ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-4'>
            <i className="ri-currency-line text-xl"></i>
            <div>
              <h3 className='text-lg font-medium'>₹{props.ride?.fare} </h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver
