import { useState } from "react";
import { NotificationsDropdown } from "./NotificationDropdown";

export const Notifications = () => {
    const [hasNotifications, setHasNotifications] = useState(false);

    const toggleHasNotifications = () =>
        setHasNotifications((prevHasNoti) => !prevHasNoti);

    const handleClose = (event) => {
        console.log(event);
        event.preventDefault();// usuwa domyślne działanie przeglądarki, i robi jak my każemy w kodzie, 4
        setHasNotifications(false);
    };

    const notiClass = `${hasNotifications ? "show" : ""}`;

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
            {/* //a11ly = accessibility */}

            {hasNotifications && <NotificationsDropdown onClose={handleClose} />}
            {/* {hasNotifications === true && <NotificationsDropdown>} */}

        </>
    );
};