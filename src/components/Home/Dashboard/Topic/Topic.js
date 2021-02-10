import React from 'react';
import { useParams } from 'react-router-dom';
import Service from '../Service/Service';

const Topic = () => {
  let { topicId } = useParams();

  return (
    <div>
      {
        topicId == "service" ? <Service /> : topicId == "patients" ? <h1>i am patients</h1> : <h1>i am doctor</h1>
      }

    </div>
  );
};

export default Topic;