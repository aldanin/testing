import * as React from 'react'
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';

const RowView = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  text-indent: 2rem;
  
  &:hover {
    background-color: ${prop => prop.theme.rowHoverColor};
  }
`;

const EditSpan = styled.span`
  position: absolute;
  right: 2rem;
  cursor: pointer;
  color: ${prop => prop.theme.iconColor};
  line-height: 4rem;
  font-size: 2rem;
`;

export interface AgentControlRowLayoutProps {
  component?: JSX.Element;
  onEdit?: () => void;
  hasEditOption?: boolean;
  theme?: Theme.ThemeProps
}

export interface AgentControlRowLayoutState {
  isStatusCollapse: boolean;
  isHover: boolean;
}

class AgentControlRowLayout extends React.Component<AgentControlRowLayoutProps, AgentControlRowLayoutState> {
  static defaultProps: Partial<AgentControlRowLayoutProps> = {
    theme: Theme.defaultTheme,
    component: <div>Row</div>,
    hasEditOption: false,
    onEdit: () => null,
  }

  constructor (props: AgentControlRowLayoutProps) {
    super(props);

    this.state = {
      isStatusCollapse: true,
      isHover: false,
    }
  }

  renderEditOption() {
    return (
      <EditSpan className="material-icons">edit</EditSpan>
    )
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <RowView
          onMouseEnter={() => this.setState({isHover: true})}
          onMouseLeave={() => this.setState({isHover: false})}
        >{this.props.component}
          {this.props.hasEditOption && this.state.isHover ? this.renderEditOption() : null}
        </RowView>
      </ThemeProvider>
    )}
}

export default AgentControlRowLayout;
