import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs } from 'antd';

import { InTheProcess, NotFound, TaskCreate } from 'components';
import { fetchAllDocuments } from 'redux/actions/documentAction';

import './index.scss';

const TaskPage = () => {
  /**
   * ! Удалить отсюда filesArray state и сделать его в редаксе
   * ! Временное решение
   * */
  const [filesArray, setFilesArray] = useState([]);

  const { token } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDocuments(token));
  }, []);

  // Tabs
  const { TabPane } = Tabs;

  return (
    <div className="tasks">
      <Tabs defaultActiveKey="1" centered type="line" tabPosition="left">
        <TabPane tab="Выполняются" key="1">
          <InTheProcess />
        </TabPane>
        <TabPane tab="Завершенные" key="2">
          asdasd
        </TabPane>
        <TabPane tab="Создать" key="3">
          <TaskCreate
            filesArray={filesArray}
            setFilesArray={setFilesArray}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TaskPage;
