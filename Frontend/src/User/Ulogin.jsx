import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import { FaSignOutAlt } from 'react-icons/fa';
import Nav from '../Components/Nav';


const Ulogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    axios
      .post("http://localhost:7000/ulogin", payload)
      .then((res) => {
        console.log("login: " + res.data.Status);
        if (res.data.Status === "Success") {
          console.log(res.data.user);
          localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/uhome')
           alert("login successful")
        } else {
          alert("wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/usignup");
  };

  return (
    <div>
<Nav/>
    <div className="flex items-center justify-center mt-28 bg-white"> 
   
     
      <div className="relative  bg-green-400 p-8 rounded-md shadow-md overflow-hidden" style={{display:"flex",height:"420px",width:"620px"}}>
      
        <div className="relative z-10" style={{width:"270px"}}>  
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4"  >
              Login to user account
            </h2>
            
          </div>
          
      
          <form className="space-y-6" onSubmit={handleSubmit}>
       
          {/* <form className="space-y-6" onSubmit={handleSubmit}> */}
            {/* Email Input */}
            <div>
                
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
              >
                Log in
              </button>
              <br />
              <p className="mt-2 text-sm text-gray-900">
                Don't have an account? Create
                <button
                  onClick={formHandle1}
                  className="ml-2 text-red-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                >
                  Signup
                </button>
              </p>
            </div>
          </form>
          {/* </form> */}
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ap4TeSE_0CSO85y6WeSpilz7d3K4mtLzGQIyoiRZeQ&s'  style={{marginLeft:"40px",height:"360px",width:"270px"}} />
      </div>
        {/* Backside tilted background */}
        
      </div>
      </div>
    </div>
   
  );
};

export default Ulogin;
