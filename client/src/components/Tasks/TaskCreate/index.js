import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ru';
import { Radio } from 'antd';

import './index.scss';

const TaskCreate = ({ filesArray, setFilesArray }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [comment, setComment] = useState('');
  const [check, setCheck] = useState(0);

  const { auth } = useSelector((state) => state);

  const addToFilesArray = () => {
    setFilesArray([...filesArray, selectedFile]);
  };

  // useEffect(() => {
  //   addToFilesArray();
  //   return () => {
  //     addToFilesArray([]);
  //   };
  // }, [selectedFile]);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    try {
      addToFilesArray();
      const formData = new FormData();

      const fileData = {
        name: selectedFile.name,
        lastModified: selectedFile.lastModified,
        size: selectedFile.size,
        type: transformType(selectedFile),
        position: auth.user.position,
        faculty: auth.user.faculty,
        comment,
        userId: auth.user._id,
      };

      formData.append('file', selectedFile);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      await axios.post('/user/upload_document', fileData);
    } catch (error) {
      console.log(error);
    }
  };

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

  // Checkbox
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setCheck(e.target.value);
  };

  return (
    <div className="tasks__create">
      <h2 className="title">Upload documents to send sending</h2>
      <div>
        <div className="tasks__create-inner">
          <div className="input-wrapper">
            <input type="file" onChange={onFileChange} />
            {!selectedFile && <span className="text">No file selected</span>}
          </div>

          <label>
            Enter your comment
            <textarea onChange={(e) => setComment(e.target.value)} />
          </label>

          <div className="checkboxes">
            Maket:{' '}
            <Radio.Group onChange={onChange} value={check}>
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </div>

          <div className="buttons">
            <button className="btn">Cancel</button>
            <button className="btn" onClick={onFileUpload}>
              Send
            </button>
          </div>
        </div>

        <table>
          <tr>
            <td>Name</td>
            <td>Last modified</td>
            <td>Size</td>
            <td>Type</td>
          </tr>

          {filesArray.length
            ? filesArray.map((element) => (
                <tr key={element.name}>
                  <td>{element.name}</td>
                  <td>
                    {moment(element.lastModifiedDate).format(
                      'DD.MM.YYYY, hh:mm:ss'
                    )}
                  </td>

                  <td>{Math.ceil((element.size / 1024) * 100) / 100} Kbyte</td>
                  <td>
                    document {selectedFile ? transformType(element) : null}
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
