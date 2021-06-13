import React, { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(fetchAllDocuments(token));
  }, []);

  const handleRemove = async () => {
    try {
      const res = await axios.delete(`/api/remove_document/${id}`, {
        headers: { Authorization: token },
      });
    } catch (err) {
      console.log(err);
    }
  };

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
            <span style={{ fontWeight: 400 }}>{test[0].name}</span>
          </h3>
          <br />
          <br />
          <p>
            <strong>Номер: </strong>
            <span>{test[0]._id}</span>
            <br />
          </p>
          <p>
            <strong>Загружен: </strong>
            <span>{test[0].createdAt}</span>
            <br />
          </p>
          <p>
            <strong>Последнее изменение: </strong>
            <span>
              {moment(test[0].lastModifiedDate).format(
                'DD.MM.YYYY, hh:mm:ss'
              )}
            </span>
            <br />
          </p>
          <p>
            <strong>Формат: </strong>
            <span>.{test[0].type}</span> <br />.
          </p>
          <p>
            <strong>Размер: </strong>
            <span>
              {Math.ceil((test[0].size / 1024) * 100) / 100} Кбайт
            </span>
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
          danger
        >
          Удалить
        </Button>

        <br />
        <Button
          className="button-edit"
          type="primary"
          icon={<EditOutlined />}
          onClick={handleRemove}
          danger
        >
          Удалить
        </Button>

        {/* <br />
        <Button type="primary" icon={<DownloadOutlined />}>
          Загрузить
        </Button> */}
      </Card>
    </div>
  );
};

export default EditDocument;
