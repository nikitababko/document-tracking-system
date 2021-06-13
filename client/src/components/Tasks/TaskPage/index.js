import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';

import './index.scss';
import { NotFound, TaskCreate } from 'components';
import TaskNew from '../TaskNew';

const TaskPage = () => {
  /**
   * ! Удалить отсюда filesArray state и сделать его в редаксе
   * ! Временное решение
   * */
  const [filesArray, setFilesArray] = useState([]);

  // Tabs
  const { TabPane } = Tabs;

  return (
    <div className="tasks">
      <Tabs defaultActiveKey="1" centered type="line" tabPosition="left">
        <TabPane tab="Новые" key="1">
          <TaskNew />
        </TabPane>
        <TabPane tab="Выполняются" key="2">
          asdasd
        </TabPane>
        <TabPane tab="Завершенные" key="3">
          asdasd
        </TabPane>
        <TabPane tab="Создать" key="4">
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
