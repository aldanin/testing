import {
  TEXT_COLORS,
  BACKGROUND_COLORS,
} from './constants'
import { roundedCardBase } from './RoundedCard'
import { genericTextColors } from './GenericTextColors'
import { selectorTabsTheme } from './SelectorTabsTheme'
import { tabstrip } from './TabStrip'
import { graphicTimeline } from './GraphicTimeline'
import { taskStatusColors } from './TaskStatusColors'
import { statusCard } from './StatusCard'
import { agentDashboardSummaryView } from './AgentDashboardSummary'

export const dashboardPage = {
  headerBackground: 'url(\'/images/login_background.png\') 0/cover',
  layoutBGColor: BACKGROUND_COLORS.B01,
  commonBorderColor: TEXT_COLORS.T09,
  genericTextColors: genericTextColors,
  summaryView: agentDashboardSummaryView,
  controlStrip: {
    BGColor: BACKGROUND_COLORS.B02,
    selectorTabs: selectorTabsTheme,
    captionColor: '#9FA1A2'
  },
  mainTabstrip: tabstrip,
  roundedCard: roundedCardBase,
  statusCard: statusCard,
  graphicTimeline: graphicTimeline,
  taskStatusColors: taskStatusColors
}
