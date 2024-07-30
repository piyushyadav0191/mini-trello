import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


const OTP = () => {
    const navigate = useNavigate()
  const [otp, setOtp] = useState("")
    
    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
       try {
        const activationtoken =  localStorage.getItem("activationtoken")

        const response = await fetch("https://medium-fzcl.onrender.com/api/v1/activate-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                activation_token: activationtoken, activation_code: otp
            })
        })

        const data = await response.json()
        alert(data.message)
        navigate("/login")
        console.log(data)
       } catch (error) {
        alert("Invalid OTP")
       }

    }

  return (

    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            
          </div>
    
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div className="h-16 ">
                    <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" value={otp} onChange={(e) => setOtp(e.target.value)}  />
                  </div>
                 
                </div>
    
                <div className="flex flex-col space-y-5">
                  <div>
                    <button type="submit" className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                      Verify Account
                    </button>
                  </div>
    
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OTP