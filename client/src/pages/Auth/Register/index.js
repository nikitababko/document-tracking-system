import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { showErrMsg, showSuccessMsg } from 'utils/notifications';
import { isEmpty, isEmail, isLength, isMatch } from 'utils/validations';

import image from 'images/register/frame.svg';

const initialState = {
  name: '',
  email: '',
  password: '',
  cf_password: '',
  phone: '',
  faculty: '',
  position: '',
  err: '',
  success: '',
};

const Register = () => {
  const [user, setUser] = useState(initialState);

  const {
    name,
    email,
    password,
    cf_password,
    err,
    success,
    phone,
    faculty,
    position,
  } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: '', success: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(name) || isEmpty(password)) {
      return setUser({ ...user, err: 'Заполните все поля.', success: '' });
    }
    if (!isEmail(email)) {
      return setUser({
        ...user,
        err: 'Недействительный email.',
        success: '',
      });
    }

    if (isLength(password))
      return setUser({
        ...user,
        err: 'Пароль должен быть не менее 6 символов.',
        success: '',
      });

    if (!isMatch(password, cf_password)) {
      return setUser({
        ...user,
        err: 'Пароли не совпадают.',
        success: '',
      });
    }

    try {
      const res = await axios.post('/user/register', {
        name,
        email,
        password,
        phone,
        faculty,
        position,
      });

      setUser({ ...user, err: '', success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: '' });
    }
  };

  return (
    <div className="login-page">
      <div className="left-content">
        <h2>Registration</h2>
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Fullname</label>
            <input
              type="text"
              placeholder="Enter Fullname"
              id="name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              id="email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              value={password}
              name="password"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="cf_password">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm password"
              id="cf_password"
              value={cf_password}
              name="cf_password"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="cf_password">Your phone</label>
            <input
              type="phone"
              placeholder="8-913-567-45-42"
              id="phone"
              value={phone}
              name="phone"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="faculty">Faculty selection</label>

            <select
              id="faculty"
              name="faculty"
              onChange={handleChangeInput}
              value={faculty}
              required
            >
              <option value="" selected disabled hidden>
                Faculty selection
              </option>
              <option value="GTF">GTF</option>
              <option value="IMA">IMA</option>
              <option value="SMF">SMF</option>
              <option value="FUVT">FUVT</option>
              <option value="EMF">EMF</option>
            </select>
          </div>

          <div>
            <label htmlFor="position">Position</label>

            <select
              id="position"
              name="position"
              onChange={handleChangeInput}
              value={position}
              required
            >
              <option value="" selected disabled hidden>
                Position
              </option>
              <option value="Автор">Author</option>{' '}
              <option value="Representative of the educational and methodological council of the faculty">
                Representative of the educational and methodological council of
                the faculty
              </option>
              <option value="Library representative">
                Library representative
              </option>
              <option value="Representative of the editorial board of the faculty">
                Representative of the editorial board of the faculty
              </option>
              <option value="Editorial Representative">
                Editorial Representative
              </option>
              <option value="Typography representative">
                Typography representative
              </option>
            </select>
          </div>

          <div className="row">
            <button type="submit">Register now</button>
          </div>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="right-content">
        <img src={image} alt="Image" />
      </div>
    </div>
  );
};

export default Register;
