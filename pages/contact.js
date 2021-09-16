import axios from "axios"
import { useState } from "react"

const formApi = 'https://kv3kfkgvmj.execute-api.us-east-2.amazonaws.com/post-contact'

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [resMessage, setResMessage] = useState('')

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setResMessage('Pending... please wait...')
    const formData = { name, email, message }
    const res = await axios.post(formApi, formData)

    if (res.status === 200) {
      setName('')
      setEmail('')
      setMessage('')
      
      setResMessage('Message send!!')
      setTimeout(() => {
        setResMessage('')
      }, 3000);
    } else {
      setResMessage(res.data)
    }

  }

  return (
    <div className="container mx-auto mt-16 mb-16">
      <div className="w-full mx-auto lg:w-1/2">
        <form className="w-full max-w-lg">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                type="text"
                onChange={({ target }) => setName(target.value)}
                value={name} />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                type="email" />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Message
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                onChange={({ target }) => setMessage(target.value)}
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-yellow-600 h-48 resize-none"
                value={message} />


            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                onClick={handleSubmit}
                className="shadow bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Submit
              </button>
              {resMessage}
            </div>
          </div>
        </form>
      </div>



    </div>
  )
}