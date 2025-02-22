import { FaSortDown } from "react-icons/fa";
import { SiGooglegemini } from "react-icons/si";
import { CgMenuGridR } from "react-icons/cg";
const Navbar = () => {
  
  return (
    <div className="flex m-3 justify-between">
      <div className="flex gap-1 px-2 hover:bg-neutral-700 rounded-xl cursor-pointer">
        <div className="flex flex-col">
          <span className="text-xl">FinMate</span>
          <span className="text-gray-400">2.0 Flash</span>
        </div>
        <div className="mt-1 text-gray-400">
          <FaSortDown />
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center bg-gray-600 hover:bg-gray-500 transition-all duration-200 cursor-pointer px-3 py-2 h-fit rounded-xl">
          <span className="text-orange-500">
            <SiGooglegemini />
          </span>
          <span className="text-sm">Try Gemini Advanced</span>
        </div>
        <div className="text-3xl rounded-full hover:bg-neutral-700 transition-all duration-200 p-2 cursor-pointer">
          <CgMenuGridR />
        </div>
        <div className="rounded-full hover:bg-neutral-700 transition-all duration-200 p-2 cursor-pointer">
          <img
          className="w-10 rounded-full hover:bg-neutral-700 transition-all duration-200  cursor-pointer"
           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAdVBMVEX7ZR7////7Yxv+2sz8e0X9war7Zhf7aSX7YBD/+PX9s5f7Yhb7TwD7XAD+0L3//fz/7+n7VQD+yrb+4tf9t538hFT9qYn+8+7+1sf9vKP/7OL7dTr7cDT8l3D+5938lGn8ooH7f038nHr8i178cyz8kF78jmUy/BcMAAAEhUlEQVR4nO2c7XqiOhSFaUQJZBBURPHbttP7v8QD7TxtVkCBGTts5qz3N+TJYmUneydRzyOEEEIIIYQQQgghhBBCCCGEEEII+ddQDo9o5MFd7E6AeL/VE7eRgQjOWQSsTe82lJ/bLWTHwdRcNiFQ9PZGqQjbyL+lox0w18kTkF513yZ8bGJy7W/uY1BevkE1WdyzCZ0n9vub/Pfi7hEYf45iwkM/a7S/gve3/lDGlNaYS4pqpj96NRDn8PaQxpRfdj+HYfIUBn2sMTMcplu/b8w9lPjZsWa56PH2wjHm0jfkHouZLdGatMfHVXEI786D4SLmnfiM1iTTuPOwX0Q4lR2HNabq0RLH2emla5f0Hr/DvPtn+C6071rTcbCouEBj1oMbUw60Aq1ZvXSLGr0+wXtTAVpKa3bQqbA4dLFGeRmEf5+Z4/tQOnKs6ZQ86zUu/pkePGIq9B7HS5IF7f1SQQTG7EQYUxI71nRJfbWTcRcSIqbCvDqlQNSaYqkAI2a1F2JMac0Fl/JTa/JrMGKSXIoxZdcOjjV5y3dWHo7MyX7gRMbGPGP6u2uZnY0Pc0aYGxFT2Qfm4FRp0f1hozFdnsiJmAp9dKy5m9OYANbZ8CJKS9k9J9/M7tU1zlw+75Qy/EXcUuB0Z+ToAzybDp/6O6hgCjlwEt1O6BeYmg5ek9XRL5hvrm7mJ3oPT6ZHWRFToYICVs4kupE5qjiD55av4oyprMF883Rje9OpY9I3ecaUX3yG6VaYz5qsKR+zgyuZegKNKSe0K1YozVHjGHOSUCw3EeNuS9gUNU6BmWTD72I0ow/t1jjGiKnJ6sQXEBPWE3ulcUumJYcbEqXRmkntuzuVfypvvfwi/ulY46b2uMY8iUtkbJTZ3o0aJ2JWQ55gtKPfHGvgLLxcY9AYsdH/TplvOtbYQeHkb/ODaGPKwuaMdVduiVEeTGWbZ0nFchPqgKWAPaE5EbOUtIvRiDJn6HHydRqmDGRlu+cB75Z0xBymkG9OPpcSfbVlJvKN8aoJDVfOz7UEK/+d8KnsA+Nhlbb6lW5igSmzJqsTY5wnPz+swTP/3Zvkxd8ixipt8n7RQc3QGBnHMe3oALaSwvcj2wVk1Kk/EmOqywqw1mzLAkzFtsCk6HctZUiw50/pOS712UMvnY0i+j/AUiBZevoVJoWB75X0w3hwYHM6ozEnyTVZnfhsdz6MfLvOSYTt+rdhAjiwmRR2EAk7jmkHD2zC1JrewrZDQnEo98DGMkbacUw7+iVt1rI5jk5LrYD+ZDs+Y6q6ctekReaufxtqVjSJ6XodTRjuvaVfxoxp8f9C6SypGyN73+82+lqzZjfKiKlQBu+UVbcEx2pMdePRuSB0Wo/VmGpCw59xJNl4jalFzar372skgeNM6slyR5ygmTYepo8FipEKxUiFYqRCMVKhGKlQjFQoRioUIxWKkQrFSIVipEIxUqEYqVCMVChGKhQjFYqRCsVIhWKk8i+LWY5ajNlnc4tB/ybzzzGLHxZSfy5PCCGEEEIIIYQQQgghhBBCCCHk/8x/cxk7Zbj17MsAAAAASUVORK5CYII=" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
