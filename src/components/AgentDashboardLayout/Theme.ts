import * as TabstripComponentTheme from '../../appWidgets/TabstripComponent/Theme'
import * as AgentDashboardSummaryViewTheme from '../AgentDashboardSummaryView/Theme'
import * as StatusCardTheme from '../../appWidgets/StatusCard/Theme'
import * as WidgetThemes from '../../appWidgets/GenericColorThemes/TaskStatusColors'
export const CARD_DEFAULT_BG_COLOR = 'white';

export interface TaskSummaryColors {
  color: string,
  borderTopColor?: string,
  backgroundColor?: string,
}

export interface ThemeProps {
  headerBackground: string,
  layoutBGColor: string,
  commonBorderColor: string,
  genericTextColors: {
    textColor: string,
    textColorLink: string,
    textColorPale: string,
    borderColor: string,
  },

  mainTabstrip: TabstripComponentTheme.TabsThemeProps,
  summaryView: AgentDashboardSummaryViewTheme.ThemeProps,
  statusCard: StatusCardTheme.StatusCardThemeProps,
  taskStatusColors: WidgetThemes.TaskStatusColorsTheme
  //   {
  //   aborted: SingleStatusColorTheme,
  //   completed: SingleStatusColorTheme,
  //   running: SingleStatusColorTheme,
  //   scheduled: SingleStatusColorTheme,
  //   pending: SingleStatusColorTheme,
  //   canceled: SingleStatusColorTheme,
  //   success: SingleStatusColorTheme,
  //   failed: SingleStatusColorTheme,
  //   partial: SingleStatusColorTheme,
  //   default: SingleStatusColorTheme,
  // },
}

export const DEFAULT_THEME: ThemeProps = {
  headerBackground: '#e8f0f5',
  layoutBGColor: 'white',
  commonBorderColor: 'silver',
  genericTextColors: {
    textColorLink: 'black',
    textColorPale: '#9fa1a2',
    textColor: '#263238',
    borderColor: '#E9EDF6',
  },
  mainTabstrip: TabstripComponentTheme.DEFAULT_THEME,
  summaryView: AgentDashboardSummaryViewTheme.DEFAULT_THEME,
  statusCard: StatusCardTheme.DEFAULT_THEME,
  taskStatusColors: WidgetThemes.TASK_STATUS_COLORS_DEFAULT_THEME
  //   {
  //   aborted: {
  //     color: '#757ab7',
  //     borderTopColor: '#757ab7',
  //     backgroundColor: CARD_DEFAULT_BG_COLOR
  //   },
  //   completed: {
  //     color: '76ae37',
  //     borderTopColor: '#86c043',
  //     backgroundColor: CARD_DEFAULT_BG_COLOR
  //   },
  //   running: {
  //     color: '#43a9d3',
  //     borderTopColor: '#3e99c8',
  //     backgroundColor: CARD_DEFAULT_BG_COLOR
  //   },
  //   scheduled: {
  //     color: '#3a4d95',
  //     borderTopColor: '#3a4d95',
  //     backgroundColor: CARD_DEFAULT_BG_COLOR
  //   },
  //   pending: {
  //     color: '#a1bcde',
  //     borderTopColor: '#a1bcde',
  //     backgroundColor: CARD_DEFAULT_BG_COLOR
  //   },
  //   canceled: {
  //     color: 'gray',
  //     borderTopColor: 'gray',
  //     backgroundColor: CARD_DEFAULT_BG_COLOR
  //   },
  //   success: {
  //     color: 'gray',
  //     borderTopColor: 'gray',
  //     backgroundColor: CARD_DEFAULT_BG_COLOR
  //   },
  //   failed: {
  //     color: '#cb3b39',
  //     borderTopColor: '#cb3b39',
  //     backgroundColor: CARD_DEFAULT_BG_COLOR
  //   },
  //   partial: {
  //     color: '#d9a20e',
  //     borderTopColor: '#d9a20c',
  //     backgroundColor: CARD_DEFAULT_BG_COLOR
  //   },
  //   default: {
  //     color: '#c5cce2',
  //     borderTopColor: '#8ba7e9',
  //     backgroundColor: '#dee2e5'
  //   },
  // },
};
