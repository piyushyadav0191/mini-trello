import { type FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {

  const navigate = useNavigate()

  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")


  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("https://medium-fzcl.onrender.com/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const data = await response.json()
      alert("Login Successful")

      localStorage.setItem("accesstoken", data.accessToken)
      navigate("/")
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="bg-customGradient min-h-screen flex w-full items-center justify-center">
      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl text-black  font-bold">Welcome to <span className="text-3xl font-bold text-[#4534AC]">Workflo!</span> </h1>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder={"Your Email"}
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-600 focus:placeholder-gray-500"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder={"Password"}
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-600 focus:placeholder-gray-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            id="purple-gradient"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link to={"/signup"} className="font-medium text-blue-500">
            Create account
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Login