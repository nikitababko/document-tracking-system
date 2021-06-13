import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAllDocuments } from 'redux/actions/documentAction';

import './index.scss';

const InTheProcess = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { token, documents } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDocuments(token));
  }, []);

  // Modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const columns = [
  //   { title: 'Name', dataIndex: 'name', key: 'name' },
  //   { title: 'Age', dataIndex: 'age', key: 'age' },
  //   { title: 'Address', dataIndex: 'address', key: 'address' },
  //   {
  //     title: 'Действие',
  //     dataIndex: '',
  //     key: 'x',
  //     render: () => <a>Удалить</a>,
  //   },
  // ];

  // const data = documents.allDocuments.map((item) => {
  //   return [
  //     { key: item._id },
  //     { name: item.name },
  //     { age: item.faculty },
  //     { address: item.createdAt },
  //     { description: item.position },
  //     {
  //       title: 'Действие',
  //       dataIndex: '',
  //       key: 'x',
  //       render: () => <a>Удалить</a>,
  //     },
  //   ];
  // });

  // console.log(data);

  return (
    // <Table
    //   columns={columns}
    //   expandable={{
    //     expandedRowRender: (record) => (
    //       <p style={{ margin: 0 }}>{record.description}</p>
    //     ),
    //   }}
    //   dataSource={data}
    // />

    <div className="in-the-process">
      <table>
        <tr>
          <td>Трек-номер</td>
          <td>Название документа</td>
          <td>ФИО автора</td>
          <td>Факультет</td>
        </tr>

        {documents.allDocuments.map((element) => (
          <tr key={element._id}>
            <td>
              <Link to={`/edit_document/${element._id}`}>
                {element._id}
              </Link>
            </td>
            <td>{element.name}</td>
            <td>{element.user.name}</td>
            <td>{element.user.faculty}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default InTheProcess;
