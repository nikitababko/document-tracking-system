import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  Collapse,
  Steps,
  Divider,
  Input,
  Upload,
  Modal,
  message,
  Table,
  Tag,
  Space,
  Button,
} from 'antd';
import moment from 'moment';

import { findDocument } from 'redux/actions/documentAction';

const TaskNew = () => {
  const [stepState, setStepState] = useState(0);

  const { auth, token, documents } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSearch = (documentId) => {
    dispatch(findDocument({ documentId, token }));
  };

  Object.size = function (obj) {
    let size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  let foundDocumentSize = Object.size(documents.foundDocument);

  // Steps
  const { Step } = Steps;

  const nextStep = () => {
    setStepState(stepState + 1);
  };
  const prevStep = () => {
    setStepState(stepState - 1);
  };

  console.log(stepState);

  // Search
  const { Search } = Input;

  // Collapse
  const { Panel } = Collapse;

  // Table
  const columns = [
    {
      title: 'Номер',
      dataIndex: '_id',
      key: '_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Дата',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Автор',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Статус',
      key: 'status',
      dataIndex: 'status',
    },
  ];

  const data = [
    {
      key: '1',
      _id: documents.foundDocument._id,
      createdAt: moment(documents.foundDocument.createdAt).format(
        'DD.MM.YYYY, hh:mm:ss'
      ),
      author: foundDocumentSize && documents.foundDocument.user.name,
      status: 'Завершен',
    },
  ];

  return (
    <div className="task__new">
      <div className="block-document">
        <div className="follow">
          <h2>Отслеживание</h2>
          {/* {foundDocumentSize && showSuccessMsg('asasd')} */}

          <Search
            placeholder="Поиск документа"
            onSearch={handleSearch}
            enterButton
          />

          {foundDocumentSize > 0 && (
            <>
              <Button onClick={prevStep}>Prev</Button>
              <Button onClick={nextStep}>Next</Button>

              <Table columns={columns} dataSource={data} />
              <Collapse defaultActiveKey={[]}>
                <Panel header="Путь документа" key="1">
                  <div className="author-name">
                    <span className="author-name__title">Автор</span>
                    <div className="author-name__fio">
                      {documents.foundDocument.user.name}
                    </div>
                  </div>
                  <div className="document-date-wrapper">
                    <div className="document-date">
                      {moment(documents.foundDocument.createdAt).format(
                        'DD.MM.YYYY'
                      )}
                      <div>
                        {moment(documents.foundDocument.createdAt).format(
                          'hh:mm:ss'
                        )}
                      </div>
                    </div>
                    <div className="document-date">
                      12.05.2021 <div>18:38</div>
                    </div>
                    <div className="document-date">
                      N.N.N <div>N:N</div>
                    </div>
                    <div className="document-date">
                      N.N.N <div>N:N</div>
                    </div>
                    <div className="document-date">
                      N.N.N <div>N:N</div>
                    </div>
                    <div className="document-date">
                      N.N.N <div>N:N</div>
                    </div>
                  </div>
                  <Steps
                    // progressDot
                    current={stepState}
                    direction="vertical"
                  >
                    <Step
                      className="step-invisible"
                      title={
                        stepState === 0
                          ? 'Ожидание'
                          : stepState > 0
                          ? 'Завершено'
                          : 'В процессе'
                      }
                      description="Автор отправил документы 
        в учебно-методический совет факультета."
                      // icon={<img src={documentSvg} />}
                      // status={
                      //   stepState === 0
                      //     ? 'current'
                      //     : stepState > 0
                      //     ? 'wait'
                      //     : 'process'
                      // }
                    />
                    <Step
                      title="Ожидание"
                      description="Документы оправлены из
        учебно-методического совета факультета
        в библиотеку."
                    />
                    <Step
                      title="Ожидание"
                      description="Документы оправлены из
        библиотеки в редакционный совет
        университета."
                    />
                    <Step
                      title="Ожидание"
                      description="Документы оправлены из
                  редакционного совета университета 
                  к заведующему библиотекой."
                    />
                    <Step
                      title="Ожидание"
                      description="Документы оправлены  от заведующего
                  библиотекой в редакцию."
                    />
                    <Step
                      title="Ожидание"
                      description="Документы оправлены  из редакции
                  в типографию."
                    />
                    <Step
                      title="Ожидание"
                      description="Документы оправлены  из редакции
                  в типографию."
                    />
                  </Steps>
                </Panel>
              </Collapse>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskNew;
