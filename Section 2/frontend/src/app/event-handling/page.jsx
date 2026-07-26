'use client';
import React from 'react'

const EventHandling = () => {
    return (
        <div className='min-h-screen'>
            <div className='container mx-auto my-10'>
                <h1 className='text-3xl font-bold text-center mb-5'>
                    Event Handling
                </h1>

                <button className='p-2 border'
                    onClick={() => { alert('button clicked') }}
                >click me</button>

                <input type="text" className='border p-2 block mt-4'
                    onChange={(e) => { console.log(e.target.value); }}
                />

                <input type="text" className='border p-2 block mt-4'
                    onKeyDown={(e) => { console.log(e.code); }}
                />

                <input type="color"
                    onChange={(e) => {
                        document.body.style.backgroundColor = e.target.value;
                        console.log(e.target.value);
                    }}
                />

                <input type="file"
                    onChange={(e) => { console.log(e.target.files); }}
                />

            </div>
        </div>
    )
}

export default EventHandling;