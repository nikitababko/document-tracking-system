import React from 'react';
import moment from 'moment';
import { Card, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import documentImage from 'images/data-base/document-image.jpg';

const DocumentCard = ({ filterFaculty }) => {
  return (
    <div className="document-card">
      {filterFaculty.map((item) => (
        <Card
          key={item._id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="Document image" src={documentImage} />}
        >
          <div className="description">
            <h3>Название:</h3> {item.name}
            <br />
            <br />
            <p>
              <strong>Загружен:</strong>
              <br />
              {moment(item.createdAt).format('DD.MM.YYYY, hh:mm:ss')}
            </p>
            <p>
              <strong>Последнее изменение:</strong>
              <br />
              {moment(item.lastModified).format('DD.MM.YYYY, hh:mm:ss')}
            </p>
            <p>
              <strong>Формат:</strong> <br /> .{item.type}
            </p>
            <p>
              <strong>Размер:</strong> <br />{' '}
              {Math.ceil((item.size / 1024) * 100) / 100} Кб
            </p>
          </div>

          <Button type="primary" icon={<DownloadOutlined />}>
            Загрузить
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default DocumentCard;
