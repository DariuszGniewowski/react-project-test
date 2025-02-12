import { useState } from "react";

export const Notifications = () => {
    const [hasNotifications, setHasNotifications] = useState(false);

    const toggleHasNotifications = () =>
        setHasNotifications((prevHasNoti) => !prevHasNoti);

    const notiClass = `${hasNotifications ? "show" : ""}`;

    const userCardNotifications = [
        { name: 'Hendrix Stamp', notificationTime: '3 min', notificationMessage: 'There are many variations of pass..' },
        { name: 'Goria Coast', notificationTime: '2 min', notificationMessage: 'Mobile Apps UI Designer is require..' },
        { name: 'Surfiya Zakir', notificationTime: '1 min', notificationMessage: 'Mobile Apps UI Designer is require..' },
        { name: 'Victor Exrixon', notificationTime: '30 sec', notificationMessage: ' Mobile Apps UI Designer is require..' },

    ]

    return (
        <>
            <span
                className={`p-2 pointer text-center ms-auto menu-icon ${notiClass}`}
                id="dropdownMenu3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleHasNotifications}
            >
                <span className="dot-count bg-warning"></span>
                <i className="feather-bell font-xl text-current"></i>
            </span>
            {/* //a11ly = accessibility  */}
            <div
                className={`dropdown-menu p-7 right-0 rounded-xxl border-0 shadow-lg ${notiClass}`}
                aria-labelledby="dropdownMenu3"
            >
                <h4 className="fw-700 font-xss mb-4">Notification</h4>
                <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    {userCardNotifications.map((userCardNotification) => (
                        <div key={userCardNotification.name}>
                            <img
                                src="assets/images/user.png"
                                alt="user"
                                className="w40 position-absolute left-0"
                            />
                            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                                {userCardNotification.name} {" "}
                                <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                                    {" "}
                                    {userCardNotification.notificationTime}
                                </span>
                            </h5>
                            <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                                {userCardNotification.notificationMessage}
                            </h6>
                        </div>
                    ))}
                </div>
                {/* <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img
                        src="assets/images/user.png"
                        alt="user"
                        className="w40 position-absolute left-0"
                    />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                        Hendrix Stamp{" "}
                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                            {" "}
                            3 min
                        </span>
                    </h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                        There are many variations of pass..
                    </h6>
                </div>
                <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img
                        src="assets/images/user.png"
                        alt="user"
                        className="w40 position-absolute left-0"
                    />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                        Goria Coast{" "}
                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                            {" "}
                            2 min
                        </span>
                    </h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                        Mobile Apps UI Designer is require..
                    </h6>
                </div>

                <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img
                        src="assets/images/user.png"
                        alt="user"
                        className="w40 position-absolute left-0"
                    />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                        Surfiya Zakir{" "}
                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                            {" "}
                            1 min
                        </span>
                    </h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                        Mobile Apps UI Designer is require..
                    </h6>
                </div>
                <div className="card bg-transparent-card w-100 border-0 ps-5">
                    <img
                        src="assets/images/user.png"
                        alt="user"
                        className="w40 position-absolute left-0"
                    />
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                        Victor Exrixon{" "}
                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                            {" "}
                            30 sec
                        </span>
                    </h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                        Mobile Apps UI Designer is require..
                    </h6>
                </div> */}
            </div>
        </>
    );
};