import { Controller, useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from "axios"
import Modal from "../components/Modal";
import { useState } from "react";
import Autocomplete from "react-google-autocomplete";

export default function Quote() {
  const [showModal, setShowModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {

    setIsSubmitting(true)

    const quote = {
      name: `${data.firstName} ${data.lastName}`,
      location: data.location,
      phone: data.phone,
      email: data.email,
      serviceItem: data.service,
      yardSquare: data.yardSquare,
      garbageVolumn: data.garbageVolumn
    }
    const res = await axios.post(process.env.NEXT_PUBLIC_QUOTE_API, quote).catch(err => console.log(err))
    if (res.status === 200) {
      console.log('Thanks for filling up our quote form. We will be in touch with you shortly.', res);
      setShowModal(true)
    } else {
      alert('something wrong!!')
      console.log('failed!', res.errors);
      setIsSubmitting(false)
    }
  };

  // console.log(watch());
  const selectedServices = watch().service
  const serviceList = ['Lawn mowing', 'Gardening', 'Garbage collection']


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

      <Modal showModal={showModal} setShowModal={setShowModal} />

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Query a Quote</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">We will get contact with you within 3 days after submit</p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">

                    <label className="leading-loose">
                      First Name
                      {errors?.firstName?.type === "required" && <span className="items-center font-small tracking-wide text-red-500 text-xs mt-1 ml-1">is required!</span>}
                      {errors?.firstName?.type === "pattern" && <span className="items-center font-small tracking-wide text-red-500 text-xs mt-1 ml-1">only alphabet 😥</span>}
                    </label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i })}
                        type="text" className={`px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600`} placeholder="first" />
                    </div>

                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">
                      Last Name
                      {errors?.lastName?.type === "required" && <span className="items-center font-small tracking-wide text-red-500 text-xs mt-1 ml-1">is required!</span>}
                      {errors?.lastName?.type === "pattern" && <span className="items-center font-small tracking-wide text-red-500 text-xs mt-1 ml-1">only alphabet 😵</span>}
                    </label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
                        type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="last" />
                    </div>
                  </div>

                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">
                    Your Location
                    {errors?.location?.type === "required" && <span className="items-center font-small tracking-wide text-red-500 text-xs mt-1 ml-1">is required!we need calculate our fuel cost!</span>}
                  </label>     
                  <Controller 
                    control={control}
                    name="location"
                    defaultValue=""
                    rules={{required:true}}
                    render={({field})=>(
                      <Autocomplete
                        {...field}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API}
                        onPlaceSelected={(place)=> setValue('location',place.formatted_address)}
                        options={{
                          fields:["formatted_address"],
                          types: ["address"],
                          componentRestrictions: { country: "nz" },
                        }}
                      />
                    )}
                  />             
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">E-Mail
                    {errors?.email?.type === "required" && <span className="items-center font-small tracking-wide text-red-500 text-xs mt-1 ml-1">You have to leave you email!</span>}
                    {errors?.email?.type === "pattern" && <span className="items-center font-small tracking-wide text-red-500 text-xs mt-1 ml-1">Your email format not correct!</span>}

                  </label>
                  <input {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="123@123.com" />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">Phone</label>
                  <Controller name="phone" control={control} defaultValue=""
                    render={({ field }) => <PhoneInput
                      {...field}
                      defaultCountry="NZ"
                      placeholder="Enter phone number"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">Service</label>

                  {serviceList.map(service => (
                    <label key={service} className="inline-flex items-center">
                      <input {...register("service")}
                        value={service}
                        type="checkbox" />
                      <span className="ml-2">{service}</span>
                    </label>
                  ))}

                  {(selectedServices?.includes('Lawn mowing') || selectedServices?.includes('Gardening')) && 
                  <input {...register("yardSquare")} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Input your yard squre?(squre meter)" />}
                  {selectedServices?.includes('Garbage collection') && 
                  <input {...register("garbageVolumn")} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Input your gabage volumn?(Liter)" />}
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose">Other Comment</label>
                  <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" />
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                {isSubmitting ? <button type="submit" className="bg-red-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Submitting...</button>
                  : <button type="submit" className="bg-green-500 hover:bg-green-400 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Query</button>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}