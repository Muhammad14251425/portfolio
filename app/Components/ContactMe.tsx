'use client'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid"
import { useForm , SubmitHandler } from "react-hook-form"
type Inputs = {
  name: string,
  email :string,
  subject :string,
  message :string,
}

function ContactMe() {
  const {register , handleSubmit } = useForm<Inputs>()
  const onSubmit:SubmitHandler <Inputs> = (formData) =>{
    window.location.href = `mailto:muhammadfawwad88@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`
  };
  
  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly text-center md:text-left md:flex-row px-10 max-w-7xl mx-auto'>
        <h3 className='uppercase tracking-[20px] absolute top-[67px] text-2xl text-gray-500'>contact me</h3>
        <div className='flex flex-col gap-y-10'>
        <h4 className='text-4xl text-center font-semibold'>
            I have got what you need.{" "}
            <span className='underline decoration-red-500/50'>Lets Talk.</span>
        </h4>
        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon  className="h-7 w-7 text-red-500 animate-pulse"/>
            <p className="text-2xl">03320342041</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon  className="h-7 w-7 text-red-500 animate-pulse"/>
            <p className="text-2xl">123 Developer Lane</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon  className="h-7 w-7 text-red-500 animate-pulse"/>
            <p className="text-2xl">muhammadfawwad88@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 w-fit mx-auto" >
          <div className="flex gap-x-2">
          <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
          <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
          <textarea {...register("message")} placeholder="Message" className="contactInput" />
          <button className="bg-red-500/50 rounded-md px-10 py-5 text-black font-bold text-lg" type="submit">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default ContactMe