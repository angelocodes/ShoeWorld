const Button = ({ label, iconURL, backgroundColor,
  textColor, borderColor }) => {
  return (
    <button className={`flex justify-center
      items-center gap-2 px-7
      py-4 font-montserrat text-lg leading-none
     ${
      backgroundColor
     ? `${backgroundColor} ${textColor}
      ${borderColor}`
     : `bg-sky-600  text-white
        border-sky-600'} rounded-full`
}
rounded-full`}>
          {label}
         {iconURL &&  <img src={iconURL} alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 "/>}
      </button>
  )
}

export default Button;