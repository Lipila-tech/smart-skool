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

            const { token, userRole, school_name, school_id } = response.data;

            localStorage.setItem('userRole', userRole);
            localStorage.setItem('token', token);
            localStorage.setItem('school', school_name);
            localStorage.setItem('schoolId', school_id);

            if (userRole === 'teacher') {
                navigate('/teacher/dashboard');
            } else if (userRole === 'sponsor') {
                navigate('/sponsor/dashboard');
            } else {
                navigate('/student/dashboard');
            }

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
                    <h3>Member Login</h3>
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
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <div className="links">
                        <Link to="/root-login">Admin Login</Link>
                        <Link to="/register">Create a new SS account</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MemberUserLogin;