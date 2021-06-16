import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs } from 'antd';

import { TaskCreate } from 'components';
import { fetchAllDocuments } from 'redux/actions/documentAction';

import './index.scss';
import TableTasks from '../TableTasks';
import Comments from '../Comments';

const TaskPage = () => {
  const [filesArray, setFilesArray] = useState([]);

  const { token, documents, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDocuments(token));
  }, []);

  const finishedDocuments = (documents) => {
    return documents.allDocuments.filter((element) => element.step === 4);
    // .filter((element) => element.faculty === auth.user.faculty);
  };

  const inTheProcessDocuments = (documents) => {
    return documents.allDocuments.filter((element) => element.step < 4);
    // .filter((element) => element.faculty === auth.user.faculty);
  };

  const documentsWithComments = (documents) => {
    return documents.allDocuments.filter(
      (element) => element.secondComment.length
    );
  };

  // Tabs
  const { TabPane } = Tabs;

  return (
    <div className="tasks">
      <Tabs defaultActiveKey="1" centered type="line" tabPosition="left">
        {auth.user.position === 'Автор' && (
          <TabPane tab="Комментарии" key="1">
            <Comments filteredDocuments={documentsWithComments} />
          </TabPane>
        )}

        <TabPane tab="Выполняются" key="2">
          <TableTasks filteredDocuments={inTheProcessDocuments} />
        </TabPane>

        <TabPane tab="Завершенные" key="3">
          <TableTasks filteredDocuments={finishedDocuments} />
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
