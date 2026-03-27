function Button({ className, children }) {
  return (
    <button type="button" className={`rounded-[5px] py-2.25 px-1 text-[15px] font-medium leading-[200%] ${className}`}>
      {children}
    </button>
  )
}

export default Button;