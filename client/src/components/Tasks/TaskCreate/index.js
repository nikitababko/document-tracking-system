import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ru';

import './index.scss';

const TaskCreate = ({ filesArray, setFilesArray }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  // const [filesArray, setFilesArray] = useState([]);

  const addToFilesArray = () => {
    setFilesArray([...filesArray, selectedFile]);
    console.log(selectedFile.type);
  };

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // console.log(filesArray);
  // console.log(selectedFile);

  // const testArr = (filesArray) => {
  //   return filesArray.map((element) => (
  //     <tr>
  //       <td>{element.name}</td>
  //       <td>
  //         {moment(element.lastModifiedDate).format('DD/MM/YYYY hh:mm:ss')}
  //       </td>
  //       <td>{element.size} Кбайт</td>
  //       <td>{element.type}</td>
  //     </tr>
  //   ));
  // };

  const onFileUpload = () => {
    addToFilesArray();
    // testArr(filesArray);
    const formData = new FormData();

    formData.append('myFile', selectedFile, selectedFile.name);

    axios.post('/user/upload_document', formData);
  };

  // const transformType = (selectedFile) => {
  //   return selectedFile.type.split('/')[1].toUpperCase();
  // };

  const transformType = (selectedFile) => {
    if (selectedFile.name.split('.')[1] === 'pdf') {
      return 'pdf';
    }
    if (selectedFile.name.split('.')[1] === 'docx') {
      return 'docx';
    }
    if (selectedFile.name.split('.')[1] === 'doc') {
      return 'doc';
    }
  };

  console.log(selectedFile);

  return (
    <div className="tasks__create">
      <h2 className="title">Загрузите документы для отправки отправки</h2>
      <div>
        <div className="btns-wrapper">
          <input type="file" onChange={onFileChange} />
          <button className="btn">Отмена</button>
          <button className="btn" onClick={onFileUpload}>
            Отправить
          </button>
        </div>

        <table>
          <tr>
            <td>Название</td>
            <td>Последнее изменение</td>
            <td>Размер</td>
            <td>Тип</td>
          </tr>

          {filesArray.length
            ? filesArray.map((element) => (
                <tr key={element.name}>
                  <td>{element.name}</td>
                  <td>
                    {moment(element.lastModifiedDate).format(
                      'DD/MM/YYYY hh:mm:ss'
                    )}
                  </td>

                  <td>
                    {Math.ceil((element.size / 1024) * 100) / 100} Кбайт
                  </td>
                  <td>
                    документ {selectedFile ? transformType(element) : null}
                  </td>
                </tr>
              ))
            : null}
        </table>
      </div>
    </div>
  );
};

export default TaskCreate;
