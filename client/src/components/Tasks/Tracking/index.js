import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Collapse,
  Steps,
  Input,
  Table,
  Modal,
  Button,
  Card,
  Avatar,
} from 'antd';
import moment from 'moment';

import { findDocument } from 'redux/actions/documentAction';

import './index.scss';

const ModalAuthor = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { Meta } = Card;

  return (
    <>
      <a type="primary" onClick={showModal}>
        {user.name}
      </a>
      <Modal
        title="User card"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card>
          <Meta
            avatar={<Avatar src={user.avatar} />}
            title={user.name}
            description={
              <>
                <p>
                  Email: <span>{user.email}</span>
                </p>
                <p>
                  Phone: <span>{user.phone}</span>
                </p>
                <p>
                  Faculty: <span>{user.faculty}</span>
                </p>
              </>
            }
          />
          <p className="position">{user.position}</p>
        </Card>
      </Modal>
    </>
  );
};

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
      title: 'Number',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Data',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Author',
      dataIndex: 'user',
      key: 'user',
      render: (text) => <ModalAuthor user={documents.foundDocument.user} />,
    },
    {
      title: 'Status',
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
      user: foundDocumentSize && documents.foundDocument.user.name,
      status: documents.foundDocument.step === 4 ? 'Completed' : 'Performed',
    },
  ];

  return (
    <div className="task__new">
      <div className="block-document">
        <div className="follow">
          <h2>Tracking</h2>

          <Search
            placeholder="Search document"
            onSearch={handleSearch}
            enterButton
          />

          {foundDocumentSize > 0 && (
            <>
              {/* <Button onClick={prevStep}>Prev</Button>
              <Button onClick={nextStep}>Next</Button> */}

              <Table columns={columns} dataSource={data} />
              <Collapse defaultActiveKey={[]}>
                <Panel header="Document path tracking" key="1">
                  <div className="author-name">
                    <span className="author-name__title">Author</span>
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
                      {documents.foundDocument.secondComment
                        ? moment(documents.foundDocument.updateAt).format(
                            'DD.MM.YYYY'
                          )
                        : 'N.N.N'}
                      <div>
                        {documents.foundDocument.secondComment
                          ? moment(documents.foundDocument.updateAt).format(
                              'hh:mm:ss'
                            )
                          : 'N.N'}
                      </div>
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
                    current={documents.foundDocument.secondComment ? 2 : 1}
                    direction="vertical"
                  >
                    <Step
                      className="step-invisible"
                      title={
                        documents.foundDocument.step === 0
                          ? 'Completed'
                          : 'Pending'
                      }
                      description="Author sent documents
                      to the educational and methodological council of the faculty."
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
                      title={
                        documents.foundDocument.secondComment
                          ? 'Completed'
                          : 'Pending'
                      }
                      // status={
                      //   documents.foundDocument.secondComment.length
                      //     ? 'Completed'
                      //     : 'Pending'
                      // }
                      description="Documents sent from
                      educational and methodological council of the faculty
                      to the library."
                    />
                    <Step
                      title="Pending"
                      description="Documents sent from
                      libraries to the editorial board
                      university."
                    />
                    <Step
                      title="Pending"
                      description="Documents sent from
                      university editorial board
                      to the head of the library."
                    />
                    <Step
                      title="Pending"
                      description="The documents were sent from the manager
                      library to the editor."
                    />
                    <Step
                      title="Pending"
                      description="Documents sent from the editorial office
                      to the printing house."
                    />
                    <Step
                      title="Pending"
                      description="Documents sent from the editorial office
                      to the printing house."
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
