import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'antd';
import {
  DownloadOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import axios from 'axios';

import { fetchAllDocuments } from 'redux/actions/documentAction';
import documentImage from 'images/data-base/document-image.jpg';

import './index.scss';

const EditDocument = () => {
  const { id } = useParams();
  const history = useHistory();
  const { documents, token } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(fetchAllDocuments(token));
  }, []);

  // Remove document
  const handleRemove = async () => {
    try {
      const res = await axios.delete(`/api/remove_document/${id}`, {
        headers: { Authorization: token },
      });
      history.push('/tasks');
    } catch (err) {
      console.log(err);
    }
  };

  // Edit document
  const handleEdit = async () => {
    try {
      const res = await axios.patch(
        `/api/edit_document/${id}`,
        { name },
        {
          headers: { Authorization: token },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  console.log(name);

  const filterDocuments = (documents) => {
    return documents.allDocuments.filter((element) => element._id === id);
  };
  const test = filterDocuments(documents);

  return (
    <div className="edit-document">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="Document image" src={documentImage} />}
      >
        <div className="description">
          <h3>
            Название:{' '}
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              defaultValue={test[0].name}
            />
          </h3>

          <br />
          <br />
          <p>
            <strong>Номер: </strong>
            <input
              type="text"
              name="_id"
              id="_id"
              defaultValue={test[0]._id}
              disabled
            />
            <br />
          </p>
          <p>
            <strong>Загружен: </strong>
            <input
              type="text"
              name="createdAt"
              id="createdAt"
              defaultValue={test[0].createdAt}
              disabled
            />
            <br />
          </p>
          <p>
            <strong>Последнее изменение: </strong>
            <input
              type="text"
              name="lastModifiedDate"
              id="lastModifiedDate"
              defaultValue={moment(test[0].lastModifiedDate).format(
                'DD.MM.YYYY, hh:mm:ss'
              )}
              disabled
            />
            <br />
          </p>
          <p>
            <strong>Формат: .</strong>
            <input
              type="text"
              name="type"
              id="type"
              defaultValue={test[0].type}
              disabled
            />
          </p>
          <p>
            <strong>Размер: </strong>
            <input
              type="text"
              name="size"
              id="size"
              defaultValue={`${
                Math.ceil((test[0].size / 1024) * 100) / 100
              } Кбайт`}
              disabled
            />
            <br />
          </p>
        </div>

        <Button type="primary" icon={<DownloadOutlined />}>
          Загрузить
        </Button>

        <br />
        <Button
          className="button-delete"
          type="primary"
          icon={<DeleteOutlined />}
          onClick={handleRemove}
        >
          Удалить
        </Button>

        <br />
        <Button
          className="button-edit"
          type="primary"
          icon={<EditOutlined />}
          onClick={handleEdit}
        >
          Изменить
        </Button>
      </Card>
    </div>
  );
};

export default EditDocument;
