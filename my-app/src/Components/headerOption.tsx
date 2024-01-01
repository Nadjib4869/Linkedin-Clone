import { Avatar } from '@mui/material'

const headerOption = ({avatar, Icon, title}) => {
  return (
    <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black">
        {Icon && <Icon className="h-6 bcon" />} 
        {avatar && <Avatar src={avatar} className="h-6 bcon"/>}
        <h3 className="text-xs">{title}</h3>
    </div>
  )
}

export default headerOption