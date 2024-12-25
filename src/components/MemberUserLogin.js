import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./css/main.css";
import axiosInstance from '../../src/api/axios';
import Header from './common/Header';
import Footer from './common/Footer';


const MemberUserLogin = () => {
    const [schoolId, setSchoolId] = useState('');
    const [memberUsername, setmemberUsername] = useState('');
    const [memberPassword, setmemberPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleMemberLogin = async (e) => {
        e.preventDefault();

        if (!schoolId || !memberUsername || !memberPassword) {
            alert('Please fill in all fields for Member login');
            return;
        }

        try {
            const data = {
                school_id: schoolId,
                username: memberUsername,
                password: memberPassword,
            };

            const response = await axiosInstance.post(
                '/authentication/login/member/',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            localStorage.setItem('userType', 'sponsor');
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            localStorage.setItem('fullname', response.data.fullname);
            localStorage.setItem('school', response.data.school_name);
            localStorage.setItem('schoolId', response.data.school_id);
            navigate('/member/dashboard/');

        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'Invalid credentials');
                alert(`Login failed: ${error.response.data.message || 'Invalid credentials'}`);
            } else {
                setError('An unexpected error occurred');
                alert('An unexpected error occurred');
            }
        }
    };

    return (
        <div>
            <Header />
            <div className="login-container">
            <div className="login-form">
                <h3>Student or Teacher Login</h3>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleMemberLogin}>
                    <input
                        type="text"
                        placeholder="ID Ex. 123456"
                        value={schoolId}
                        onChange={(e) => setSchoolId(e.target.value)}
                        className="login-input"
                    />
                    <input
                        type="text"
                        placeholder="USERNAME"
                        value={memberUsername}
                        onChange={(e) => setmemberUsername(e.target.value)}
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={memberPassword}
                        onChange={(e) => setmemberPassword(e.target.value)}
                        className="login-input"
                    />
                    <button type="submit" className="lr-button">Login</button>
                </form>
                <div className="links">
                    <Link to="/root-login">Root User Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
            <Footer />
        </div>
    );
};

export default MemberUserLogin;