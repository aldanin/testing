import * as React from 'react'
import { connect } from 'react-redux';
import AgentDashboardLayout from '../components/AgentDashboardLayout'
import theme from '../theme/ScTheme'
import * as AgentSummary from '../types/AgentSummary'
import * as MockAgentSummary from '../mockData/AgentSummary'
import * as MockTasks from '../mockData/Tasks'

export interface AgentDashboardContentProps extends React.Props<AgentDashboardContent> {
  agentSummary?: AgentSummary.AgentSummary
}

class AgentDashboardContent extends React.Component<AgentDashboardContentProps, {}> {

  static defaultProps: Partial<AgentDashboardContentProps> = {}

  constructor(props: AgentDashboardContentProps) {

    super(props)

    this.state = {}
  }

  render() {
    return (
      <AgentDashboardLayout
        agentSummary={MockAgentSummary.getAgentSummary('3')}
        tasks={MockTasks.getTasksByAgentId('3').slice(0, 1000)}
        theme={theme.dashboardPage}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AgentDashboardContent)
