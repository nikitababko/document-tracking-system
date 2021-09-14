import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
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
import { showSuccessMsg } from 'utils/notifications';

import './index.scss';

const EditDocument = () => {
  const { id } = useParams();
  const history = useHistory();
  const { documents, token, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [secondComment, setSecondComment] = useState('');
  console.log(documents);

  useEffect(() => {
    dispatch(fetchAllDocuments(token));
  }, []);

  // Remove document
  const handleRemove = async () => {
    try {
      let answer = window.confirm(
        'Вы действительно хотите удалить данный файл?'
      );

      if (answer) {
        await axios.delete(`/api/remove_document/${id}`, {
          headers: { Authorization: token },
        });
        history.push('/tasks');
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Edit document
  const handleEdit = async () => {
    try {
      await axios.patch(
        `/api/edit_document/${id}`,
        {
          secondComment,
          secondCommentSendler: auth.user.position,
        },
        {
          headers: { Authorization: token },
        }
      );

      showSuccessMsg('Файл отправлен на доработку!');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSend = () => {
    showSuccessMsg('Документы отправлены к представителю библиотеки!');
  };

  const filterDocuments = (documents) => {
    return documents.allDocuments.filter((element) => element._id === id);
  };
  const filteredDocument = filterDocuments(documents);

  const sendDocument = () => {
    if (
      auth.user.position ===
      'Представитель учебно-методического совета факультета'
    ) {
      console.log('Документы отправлены к представителю библиотеки');
      showSuccessMsg('Документы отправлены к представителю библиотеки!');
    }

    if (auth.user.position === 'Представитель библиотеки') {
      console.log('Документы отправлены в редакционный совет факультета');
      showSuccessMsg('Документы отправлены в редакционный совет факультета!');
    }

    if (auth.user.position === 'Редакционный совет факультета') {
      console.log('Документы отправлены к представителю редакции');
      showSuccessMsg('Документы отправлены к представителю редакции!');
    }

    if (auth.user.position === 'Представитель редакции') {
      console.log('Документы отправлены к представителю типографии');
      showSuccessMsg('Документы отправлены к представителю типографии!');
    }
  };

  return (
    <div className="edit-document">
      <Card hoverable style={{ width: 240 }}>
        <div className="description">
          <div className="responce-data">
            <h2>Received data: </h2>
            <h3>
              Name:{' '}
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                defaultValue={filteredDocument[0].name}
              />
            </h3>

            <h3>
              Author: <span>{filteredDocument[0].user.name}</span>
            </h3>

            <h3>
              Faculty: <span>{filteredDocument[0].user.faculty}</span>
            </h3>

            <br />
            <p>
              <strong>Number: </strong>
              <input
                type="text"
                name="_id"
                id="_id"
                defaultValue={filteredDocument[0]._id}
                disabled
              />
              <br />
            </p>
            <p>
              <strong>Loaded: </strong>
              <input
                type="text"
                name="createdAt"
                id="createdAt"
                defaultValue={filteredDocument[0].createdAt}
                disabled
              />
              <br />
            </p>
            <p>
              <strong>Last modified: </strong>
              <input
                type="text"
                name="lastModifiedDate"
                id="lastModifiedDate"
                defaultValue={moment(
                  filteredDocument[0].lastModifiedDate
                ).format('DD.MM.YYYY, hh:mm:ss')}
                disabled
              />
              <br />
            </p>
            <p>
              <strong>Format: .</strong>
              <input
                type="text"
                name="type"
                id="type"
                defaultValue={filteredDocument[0].type}
                disabled
              />
            </p>
            <p>
              <strong>Size: </strong>
              <input
                type="text"
                name="size"
                id="size"
                defaultValue={`${
                  Math.ceil((filteredDocument[0].size / 1024) * 100) / 100
                } Кбайт`}
                disabled
              />
            </p>

            <div>
              <strong>Comment: </strong>
              <p>{filteredDocument[0].comment}</p>
            </div>

            <div className="buttons">
              <Link
                // to={`/documents/${filteredDocument[0].name}.${filteredDocument[0].type}`}
                to={`/documents/${filteredDocument[0].name}`}
                target="_blank"
                download
              >
                <Button type="primary" icon={<DownloadOutlined />}>
                  Download
                </Button>
              </Link>

              <Button
                className="button-delete"
                type="primary"
                icon={<DeleteOutlined />}
                onClick={handleRemove}
              >
                Delete
              </Button>

              {/* <Button
                className="button-edit"
                type="primary"
                icon={<EditOutlined />}
                onClick={handleEdit}
              >
                Изменить
              </Button> */}
            </div>
          </div>

          <div className="dispatch-data">
            <h2>Data for sending:</h2>

            <textarea
              name=""
              id=""
              cols="50"
              rows="2"
              placeholder="Enter your comment"
              value={secondComment}
              onChange={(e) => setSecondComment(e.target.value)}
            ></textarea>

            <br />
            <br />

            <div className="buttons">
              <Button type="primary" icon={<DownloadOutlined />}>
                Add document
              </Button>

              <Button
                type="primary button-edit"
                icon={<DownloadOutlined />}
                onClick={handleEdit}
              >
                Send to the author for revision
              </Button>

              <Button
                onClick={sendDocument}
                type="primary"
                icon={<DownloadOutlined />}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EditDocument;
