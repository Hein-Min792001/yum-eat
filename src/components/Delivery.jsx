import React from 'react'

export const Delivery = () => {
  return (
    <div className='max-w-[1520] bg-white py-16 px-4'>
        <h3 className="text-orange-500 font-bold text-2xl text-center">Quick Delivery App</h3>
        <div className="w-full mx-auto grid md:grid-cols-2">
        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt=""
            className='w-[550px] mx-auto my-4'/>
            <div className="flex flex-col justify-center">
                <div className="text-[#00df9a] font-bold">Get The App</div>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                    Limitness Convenience on-demand
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Unde sit deleniti neque! Fuga a quam, facere quia qui ut nostrum optio voluptatum blanditiis facilis dolor neque consequuntur, reprehenderit ipsam repellendus.
                Adipisci facilis architecto recusandae obcaecati! Aut saepe, vitae aliquam tempora totam dignissimos ratione natus impedit commodi perferendis libero distinctio quo deserunt, laboriosam error tenetur blanditiis dolor corporis. Quis, assumenda molestiae.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] 
                rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Start</button>
            </div>
        </div>
    </div>
  )
}
