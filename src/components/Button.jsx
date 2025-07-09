

const Button = ({name, isSelected, onClick}) => {
  return (
    <div>
      <button className={`py-1 px-5 font-bold m-2 ${isSelected ?"bg-gray-500" :"bg-gray-300"} rounded-xl cursor-pointer `} onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button
