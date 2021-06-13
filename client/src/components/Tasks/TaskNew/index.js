import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

import documentSvg from 'images/document.svg';

const TaskNew = () => {
  const auth = useSelector((state) => state.auth);

  const callback = (key) => {
    console.log(key);
  };
  // Antd
  const { Panel } = Collapse;

  // Steps
  const { Step } = Steps;

  const [stepState, setStepState] = useState(0);
  const nextStep = () => {
    setStepState(stepState + 1);
  };
  const prevStep = () => {
    setStepState(stepState - 1);
  };

  console.log(stepState);

  // Search
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  // Table
  const columns = [
    {
      title: 'Номер',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Дата',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Автор',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Статус',
      key: 'tags',
      dataIndex: 'tags',
    },
  ];

  const data = [
    {
      key: '1',
      name: '8725096502756',
      age: '26.12.2021',
      address: 'Калякина Дарья Провна',
      tags: 'Завершен',
    },
  ];

  return (
    <div className="task__new">
      <div className="block-document">
        <div className="follow">
          <h2>Отслеживание</h2>

          <Search
            placeholder="Поиск документа"
            onSearch={onSearch}
            enterButton
          />

          <Button onClick={prevStep}>Prev</Button>
          <Button onClick={nextStep}>Next</Button>

          <Table columns={columns} dataSource={data} />
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="Путь документа" key="1">
              <div className="author-name">
                <span className="author-name__title">Автор</span>
                <div className="author-name__fio">{auth.user.name}</div>
              </div>
              <div className="document-date-wrapper">
                <div className="document-date">
                  30.03.2021 <div>19:38</div>
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
        </div>
      </div>
    </div>
  );
};

export default TaskNew;
