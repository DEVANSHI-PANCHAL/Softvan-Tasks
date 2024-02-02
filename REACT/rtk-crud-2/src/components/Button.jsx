const Button = ({ onClick, children }) => {
    return (
      <button className="bg-purple-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700"
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
  
  export default Button