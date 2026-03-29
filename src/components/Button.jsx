function Button({ className, handleClick, children }) {
  return (
    <button type="button" onClick={handleClick} className={`rounded-[5px] px-1 py-2 text-[15px] font-medium leading-[200%] cursor-pointer transition-colors hover:bg-transparent hover:outline-2 ${className}`}>
      {children}
    </button>
  )
}

export default Button;