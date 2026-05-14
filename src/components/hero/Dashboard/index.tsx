import { DashboardBar } from './DashboardBar'
import { LeaksPanel } from './LeaksPanel'
import { MonthSidebar } from './MonthSidebar'
import { AgentStrip } from './AgentStrip'

export function Dashboard() {
  return (
    <div
      className="mt-8 rounded-[4px] overflow-hidden bg-surface-1"
      style={{
        border: '0.5px solid var(--color-rule-primary)',
        animation: 'vh-rise 0.6s cubic-bezier(0.16,1,0.3,1) 1.15s both',
      }}
    >
      <DashboardBar />

      <div className="grid grid-cols-1 sm:grid-cols-[1.6fr_1fr]">
        <LeaksPanel />
        <MonthSidebar />
      </div>

      <AgentStrip />
    </div>
  )
}
