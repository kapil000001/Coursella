import Logo from "./logo";
import { Typography, Menu, MenuItem, Button, Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminBar() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [addCourseClicked, setAddCourseClicked] = useState(false);
    const [myCoursesClicked, setMyCoursesClicked] = useState(false);

    useEffect(() => {
   
        console.log('SessionStorage contents:');
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            const value = sessionStorage.getItem(key);
            console.log(`${key}: ${value}`);
        }
    }, []);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAddCourseClick = () => {
        setAddCourseClicked(true);
        navigate("/admin/addcourse");

        setTimeout(() => {
            setAddCourseClicked(false);
        }, 300); 
    };

    const username = sessionStorage.getItem('username') || '';
    console.log('Username:', username);

    function stringAvatar(name) {
        const nameParts = name.split(' ');
        let initials = '';

        if (nameParts.length > 1) {
            initials = `${nameParts[0][0]}${nameParts[1][0]}`;
        } else {
            initials = nameParts[0][0];
        }

        return {
            children: initials.toUpperCase(),
        };
    }

    const handleMyCoursesClick = () => {
        setMyCoursesClicked(true);
        navigate("/admin/courses");

        setTimeout(() => {
            setMyCoursesClicked(false);
        }, 300); 
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '80px',
            background: '#000',
            color: '#fff',
            padding: '0 20px',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Logo />
                <Typography variant="h5" style={{color: '#fff', marginLeft: '10px'}}>EduFlex</Typography>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                    padding: '1px',
                    margin: '0 10px',
                }}>
                    <Button
                        onClick={handleAddCourseClick}
                        variant="outlined"
                        style={{
                            color: '#fff',
                            borderColor: '#fff',
                            backgroundColor: addCourseClicked ? '#f0f0f0' : 'transparent',
                            transition: 'background-color 0.3s ease-in-out', 
                        }}
                    >
                        Add course
                    </Button>
                </div>

                <div style={{
                    padding: '1px',
                    margin: '0 10px',
                }}>
                    <Button
                        onClick={handleMyCoursesClick}
                        variant="outlined"
                        style={{
                            color: '#fff',
                            borderColor: '#fff',
                            backgroundColor: myCoursesClicked ? '#f0f0f0' : 'transparent',
                            transition: 'background-color 0.3s ease-in-out', 
                        }}
                    >
                        My Courses
                    </Button>
                </div>

                <Avatar {...stringAvatar(username)} onClick={handleMenuClick} style={{ cursor: "pointer", marginLeft: '10px', backgroundColor: '#11998e' }}></Avatar>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => navigate("/admin/editprofile")}>Edit Profile</MenuItem>
                    <MenuItem onClick={() => {
                        localStorage.setItem("token", null);
                        window.location = "/";
                    }}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    );
}
