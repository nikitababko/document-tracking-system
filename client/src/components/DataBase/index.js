import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs } from 'antd';

import { fetchAllDocuments } from 'redux/actions/documentAction';
import DocumentCard from './DocumentCard';

import './index.scss';

const DataBase = () => {
  const { token, documents } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDocuments(token));
  }, [documents.allDocuments]);

  const EMFFaculties = (arr) => {
    const newArr = arr.map((element) => {
      if (element.faculty.includes('EMF')) {
        return element;
      }
    });
    return newArr.filter((element) => element !== undefined);
  };

  const GTFFaculties = (arr) => {
    const newArr = arr.map((element) => {
      if (element.faculty.includes('GTF')) {
        return element;
      }
    });
    return newArr.filter((element) => element !== undefined);
  };

  const IMAFaculties = (arr) => {
    const newArr = arr.map((element) => {
      if (element.faculty.includes('IMA')) {
        return element;
      }
    });
    return newArr.filter((element) => element !== undefined);
  };

  const SMFFaculties = (arr) => {
    const newArr = arr.map((element) => {
      if (element.faculty.includes('SMF')) {
        return element;
      }
    });
    return newArr.filter((element) => element !== undefined);
  };

  const FUFTFaculties = (arr) => {
    const newArr = arr.map((element) => {
      if (element.faculty.includes('FUVT')) {
        return element;
      }
    });
    return newArr.filter((element) => element !== undefined);
  };

  // Tabs
  const { TabPane } = Tabs;

  return (
    <section className="data-base">
      <h2>Database of all documents</h2>

      <Tabs defaultActiveKey="1" centered type="line">
        <TabPane tab="EMF" key="1">
          <DocumentCard filterFaculty={EMFFaculties(documents.allDocuments)} />
        </TabPane>

        <TabPane tab="GTF" key="2">
          <DocumentCard filterFaculty={GTFFaculties(documents.allDocuments)} />
        </TabPane>

        <TabPane tab="IMA" key="3">
          <DocumentCard filterFaculty={IMAFaculties(documents.allDocuments)} />
        </TabPane>

        <TabPane tab="SMF" key="4">
          <DocumentCard filterFaculty={SMFFaculties(documents.allDocuments)} />
        </TabPane>

        <TabPane tab="FUVT" key="5">
          <DocumentCard filterFaculty={FUFTFaculties(documents.allDocuments)} />
        </TabPane>
      </Tabs>
    </section>
  );
};

export default DataBase;
