import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';

const Comments = ({ filteredDocuments }) => {
  const { token, documents, auth } = useSelector((state) => state);

  return (
    <div className="comments">
      <table>
        <tr>
          <td>Track number</td>
          <td>Document name</td>
          <td>From whom</td>
          <td>Comments</td>
        </tr>

        {filteredDocuments(documents).map((element) => (
          <tr key={element._id}>
            <td>{element._id}</td>
            <td>{element.name}</td>
            <td>{element.secondCommentSendler}</td>
            <td>{element.secondComment}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Comments;
