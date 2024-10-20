import React from 'react'

function Services() {
    return (
        <div id='services' className='h-full flex flex-col items-center pt-10 pb-20 ' style={{ backgroundImage: "url(/images/black.png)" }}>
            <h1 className='text-6xl text-white pb-10'>Services</h1>
            <div className='w-[900px]  bg-white text-black grid grid-cols-2 p-10 px-20'>
                <div className='flex flex-row h-[180px] gap-5'>
                    <div>
                        <div className="w-[64px] h-[64px]">
                            <img src="/images/Image icon.png" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px]">
                        <h1 className='text-2xl font-bold'>Adult haircut</h1>
                        <p>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                        <h1 className='text-2xl font-bold'>$7 USD</h1>
                    </div>
                </div>
                <div className='flex flex-row h-[180px] gap-5'>
                    <div>
                        <div className="w-[64px] h-[64px]">
                            <img src="/images/Image icon (1).png" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px]">
                        <h1 className='text-2xl font-bold'>Kids haircut</h1>
                        <p>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                        <h1 className='text-2xl font-bold'>$5 USD</h1>
                    </div>
                </div>
                <div className='flex flex-row  h-[180px] gap-5'>
                    <div>
                        <div className="w-[64px] h-[64px]">
                            <img src="/images/Image icon (2).png" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px]">
                    <h1 className='text-2xl font-bold'>Beard Trim</h1>
                        <p>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                        <h1 className='text-2xl font-bold'>$3 USD</h1>
                    </div>
                </div>
                <div className='flex flex-row h-[180px] gap-5'>
                    <div>
                        <div className="w-[64px] h-[64px]">
                            <img src="/images/Image icon (3).png" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px]">
                        <h1 className='text-2xl font-bold'>Neck Shave</h1>
                        <p>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                        <h1 className='text-2xl font-bold'>$3 USD</h1>
                    </div> 
                </div>
                <div className='flex flex-row h-[180px] gap-5'>
                    <div>
                        <div className="w-[64px] h-[64px]">
                            <img src="/images/Image icon (4).png" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px]">
                        <h1 className='text-2xl font-bold'>Scalp Moisturizing</h1>
                        <p>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                        <h1 className='text-2xl font-bold'>$2 USD</h1>
                    </div>
                </div>
                <div className='flex flex-row h-[180px] gap-5 '>
                    <div>
                        <div className="w-[64px] h-[64px]">
                            <img src="/images/Image icon (5).png" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px]">
                        <h1 className='text-2xl font-bold'>Beard Grooming</h1>
                        <p>Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis</p>
                        <h1 className='text-2xl font-bold'>$5 USD</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services