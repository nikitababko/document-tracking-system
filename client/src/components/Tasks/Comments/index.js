import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';

const Comments = ({ filteredDocuments }) => {
  const { token, documents, auth } = useSelector((state) => state);

  console.log(documents);

  return (
    <div className="comments">
      <table>
        <tr>
          <td>Трек-номер</td>
          <td>Название документа</td>
          <td>От кого</td>
        </tr>

        {filteredDocuments(documents).map((element) => (
          <tr key={element._id}>
            <td>{element._id}</td>
            <td>{element.name}</td>
            <td>{element.secondCommentSendler}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Comments;
