/* eslint-disable @next/next/no-img-element */
import { React } from 'react'
import NotificationData from "../../data/Notification.json";
import UserProfile from './UserProfile';
import { MainContext, useContext } from "../Context";
const Notifications = () => {
    const { screen, setScreen } = useContext(MainContext);
    const { profile, setProfile } = useContext(MainContext);

    return (
        <section className='w-full h-full px-5 flex items-center justify-start flex-col'>
            <h3 className='w-full font-Montserrat text-sm font-semibold mb-5'>Notifications</h3>
            {NotificationData &&
                NotificationData.map((value, index) => (
                    <div className='w-full h-16 bg-ThirdBrandColor drop-shadow-sm flex items-center justify-start px-3 mb-10 rounded-sm last:mb-0 cursor-pointer' key={value.id} onClick={() => setProfile(value) + setScreen(<UserProfile />)}>
                        <div><img src={value.photo} alt='User' className='rounded-full w-12 h-12' /></div>
                        <div className='w-auto h-full flex items-start justify-center flex-col ml-6'>
                            <p className='font-Montserrat font-semibold text-BrandColor text-sm'>{value.first_name}</p>
                            <p className='font-Montserrat font-semibold text-BrandColor text-sm'>{value.last_name}</p>
                        </div>
                        <p className='font-Montserrat font-semibold text-SecondBrandColor text-sm ml-6 text-left'>{value.Notification}</p>
                    </div>
                ))}
        </section>
    )
}

export default Notifications