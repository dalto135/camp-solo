import React
// , { useContext, useEffect, useState } 
from "react";
import "./userPage.css";
// import { UserContext } from '../../utils/user-context';
// import { PostContext } from '../../utils/post-context';
// import API from '../../utils/API';
// import { Link } from "react-router-dom";
// import PostCard from "../../components/PostCard/PostCard";
// import UserReservation from '../../components/UserReservation/UserReservation';


function UserPage() {

    // const userData = useContext(UserContext);
    // console.log('userData');
    // console.log(userData);

    // const [postData, setPostData] = useState([]);

    // useEffect(() => {
    //     API.findByUserID(userData.data)
    //     .then(data => {
    //     console.log('post data');
    //     console.log(data);
    //     setPostData(data.data);
    //     })
    //     .catch(err => console.log(err.message))
    // }, [userData.data])

    // function deleteReservation(_id) {
    //     API.removeReservation(_id)
    //     .then(reservationData => {
    //     console.log('submitted reservation data');
    //     console.log(reservationData);
    //     document.location.reload();
    //     })
    //     .catch(err => console.log(err.message));
    // }

    // const [reservations, setReservations] = useState([]);

    // useEffect(() => {
    //     API.getUserReservations(userData.data)
    //     .then(data => {
    //     console.log('user reservations');
    //     console.log(data);
    //     // document.location.replace('/');
    //     setReservations(data);
    //     })
    //     .catch(err => console.log(err.message));
    // }, [userData.data])

    return (
        <div className="pink">
            <h1 id="my-account-header">Welcome User
            {/* {userData.data?.firstName} {userData.data?.lastName} */}
            !</h1>

            <div id="user-info">
                <h1 id="your-info">My info</h1>

                <p>First Name: Camp
                    {/* {userData.data?.email} */}
                </p>

                <p>Last Name: Solo
                    {/* {userData.data?.email} */}
                </p>

                <p>Username: campsolo123
                    {/* {userData.data?.username} */}
                </p>

                <p>Email: campsolo@gmail.com
                    {/* {userData.data?.email} */}
                </p>

                <button>Update my Info</button>
            </div>
        </div>
    );
}

export default UserPage;