import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.scss';

const TableTasks = ({ filteredDocuments }) => {
  const { documents } = useSelector((state) => state);

  return (
    <div className="table-tasks">
      <table>
        <tr>
          <td>Трек-номер</td>
          <td>Название документа</td>
          <td>ФИО автора</td>
          <td>Факультет</td>
        </tr>

        {filteredDocuments(documents).map((element) => (
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

export default TableTasks;
