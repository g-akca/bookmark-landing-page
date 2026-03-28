function Button({ className, children }) {
  return (
    <button type="button" className={`rounded-[5px] h-12 px-1 text-[15px] font-medium leading-[200%] cursor-pointer ${className}`}>
      {children}
    </button>
  )
}

export default Button;