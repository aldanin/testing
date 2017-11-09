import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TaskBasics from '../../types/TaskBasics'

import AgentDashboardControlStrip from './index';
import { AgentDashboardControlStripProps } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const props: AgentDashboardControlStripProps = {
    onDisplaySelected: (timeSlot: TaskBasics.TimeSlotType, currentDisplayDatesSpanFactorInHours: number) => null,
    onServiceSelected: (service: TaskBasics.ServiceType) => null,
  }

  ReactDOM.render(<AgentDashboardControlStrip {...props}/>, div);
});
