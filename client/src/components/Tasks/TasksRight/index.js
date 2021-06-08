import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NotFound, TaskCreate } from 'components';

const TaskRight = () => {
  const auth = useSelector((state) => state);
  const { isLogged } = auth;

  return (
    <div>
      asd
      {/* <Router>
        <Route
          exact
          path="/tasks/create"
          component={isLogged ? TaskCreate : NotFound}
        />
      </Router> */}
    </div>
  );
};

export default TaskRight;
