import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError('Username and password must be filled in');
      return;
    }
    
    console.log('Login attempt with:', formData);
    
    setError('');
  };

  return (
    <>
      <div className="relative w-full lg:w-1/2 hidden lg:block">
        <img
          src="img/auth-img.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-start space-y-6 py-20">
          <h2 className="text-white text-5xl font-bold text-center px-4">
            Tastico
          </h2>
            <p className="text-[28px] text-white px-5 text-center">Authentic taste. Fresh ingredients. Only at Tastico.</p>
        </div>
      </div>

      <div className="w-full h-full lg:w-1/2 bg-[#FDFDFD]">
        <div className="flex flex-col items-center justify-center py-2 lg:py-16 px-10 lg:px-22  min-h-screen">
          <div className="flex flex-col items-center justify-center text-[#6D4F25] gap-2 lg:gap-5 text-center">
            <h1 className="text-[#6D4F25] text-4xl font-bold">Login</h1>
            <p className="text-[#262523] text-lg lg:text-xl">
              Log in to enjoy your favorite meals and exclusive deals.
            </p>
          </div>
          <form className="w-full py-5 flex flex-col text-[#262523] text-lg space-y-5" onSubmit={handleSubmit}>
            {error && (
            <div className="w-full p-4 mb-4 text-sm lg:text-base text-red-700 bg-red-100 rounded-2xl" role="alert">
              {error}
            </div>
          )}
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="username"
              autoComplete="username"
              required
              value={formData.username}
              onChange={handleChange}
              className="text-base py-3 px-6 border border-[#262523] rounded-2xl"
              placeholder="Input Your Username"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="text-base py-3 px-6 border border-[#262523] rounded-2xl"
              placeholder="Create Your Password"
            />
            <button
              type="submit"
              className="w-full my-5 bg-[#6D4F25] font-bold py-4 text-white rounded-[30px] "
            >
              Login
            </button>
          </form>
          <p className="text-lg text-center">
            Don’t have Account? <a href="register" className="text-[#6D4F25] font-bold">Register</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;