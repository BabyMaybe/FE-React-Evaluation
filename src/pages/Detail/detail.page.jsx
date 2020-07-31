import React from 'react';

import './detail.styles.scss';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDetail } from '../../redux/store';

const DetailPage = () => {
  const { id } = useParams();

  const location = useLocation().pathname;
  const [, datatype] = location.split('/');

  const data = useSelector(state => selectDetail(state, datatype, parseInt(id)));

  return (
    <div className="detail-page">

      <div className="page-container">
        <h1 className="detail-header">
          {data.name}
        </h1>
        <div className="detail-tag">
          <span className={`detail-name ${data.style}`}>
            {data.type}
          </span>
        </div>
        <p className="detail-description">
          {data.detail}
        </p>
      </div>

    </div>
  );
};

export default DetailPage;
