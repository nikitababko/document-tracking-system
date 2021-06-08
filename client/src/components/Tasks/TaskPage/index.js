import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, Switch, Divider } from 'antd';
import {
  MailOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
  EditOutlined,
} from '@ant-design/icons';

import './index.scss';
import { NotFound, TaskCreate } from 'components';
import TaskRight from '../TasksRight';

const TaskPage = () => {
  /**
   * ! Удалить отсюда filesArray state и сделать его в редаксе
   * ! Временное решение
   * */
  const [filesArray, setFilesArray] = useState([]);
  const [filesArrayTimeout, setFilesArrayTimeout] = useState([]);

  useEffect(() => {
    setFilesArrayTimeout(filesArray.length - filesArray.length + 1);

    setTimeout(() => {
      setFilesArrayTimeout([]);
    }, 3000);
  }, [filesArray]);

  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;

  return (
    <div className="tasks" style={{ display: 'flex' }}>
      <Router>
        <div className="tasks__left">
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <Menu.Item disabled>
              <h2>Мои задачи</h2>
            </Menu.Item>

            <Menu.Item key="1" icon={<MailOutlined />}>
              <Link to="/tasks/new">
                <span className="text">Новые</span>
                <div className="count-wrapper">
                  <span className="count">
                    {filesArrayTimeout === 1 ? 1 : 0}
                  </span>
                </div>
              </Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<QuestionCircleOutlined />}>
              <Link to="/tasks/progress">
                <span className="text">Выполняются</span>
                <div className="count-wrapper">
                  <span className="count">
                    {filesArray.length ? filesArray.length : 0}
                  </span>
                </div>
              </Link>
            </Menu.Item>

            <Menu.Item key="3" icon={<CheckCircleOutlined />}>
              <Link to="/tasks/finished">
                <span className="text">Завершенные</span>
                <div className="count-wrapper">
                  <span className="count">0</span>
                </div>
              </Link>
            </Menu.Item>

            <Menu.Item key="4" icon={<EditOutlined />}>
              <Link to="/tasks/create">
                <span className="text">Создать</span>
              </Link>
            </Menu.Item>
          </Menu>
        </div>

        <div className="tasks__rigth">
          <Route
            exact
            path="/tasks/create"
            // component={isLogged ? TaskCreate : NotFound}
          >
            {isLogged ? (
              <TaskCreate
                filesArray={filesArray}
                setFilesArray={setFilesArray}
              />
            ) : (
              NotFound
            )}
          </Route>
        </div>
      </Router>
    </div>
  );
};

export default TaskPage;
