import {
  TEXT_COLORS,
  BACKGROUND_COLORS,
} from './constants'
import { roundedCardBase } from './RoundedCard'
import { genericTextColors } from './GenericTextColors'
import { selectorTabsTheme } from './AgentDashboardTabsGenericTheme'
import { graphicTimeline } from './GraphicTimeline'
import { taskStatusColors } from './TaskStatusColors';

export const agentDashboardSummaryView = {
  genericTextColors: genericTextColors,
  controlStrip: {
    BGColor: BACKGROUND_COLORS.B02,
    selectorTabs: selectorTabsTheme,
    captionColor: '#9FA1A2'
  },
  roundedCard: roundedCardBase,
  graphicTimeline: graphicTimeline,
  taskStatusColors: taskStatusColors,
  taskBarChart: {
    barColors: {
      aborted: '#6b7080',
      success: '#76ae37',
      partial: '#d9a20e',
      failed: '#cb3b39',
      pending: TEXT_COLORS.T17,
      scheduled: TEXT_COLORS.T17,
      canceled: 'gray',
    }
  }
}
