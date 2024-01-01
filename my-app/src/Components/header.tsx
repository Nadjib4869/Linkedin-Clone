import SearchIcon from '@mui/icons-material/Search';
import linkedinLogo from '../assets/linkedin.png'
import HeaderOption from './headerOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const header = () => {
  return (
    <div className="flex space-x-4 p-2.5 justify-evenly border-b-2 sticky top-0 w-full">
        <div className="flex space-x-2">
            <img src={linkedinLogo} alt="linkedin-logo" width={50} height={37} />
            <div className='flex items-center text-gray-600 bg-[#eef3f8] rounded-lg mt-1 h-11'>
                <SearchIcon className='ml-2' />
                <input type="text" className='bg-transparent p-1 outline-none' placeholder='search' />
            </div>
        </div>
        <div className='flex space-x-4'>
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messages" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar={true} title="Me" />

        </div>
    </div>
  )
}

export default header