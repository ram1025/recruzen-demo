const { useState, useCallback } = React;
const ReactFlowLib = window.ReactFlow;
const { Background, Controls, MiniMap } = ReactFlowLib;

function AgentMap() {
  const [nodes] = useState([
    // CENTER BRAIN
    {
      id: 'brain',
      data: { label: '🧠 Recruzen AI Brain' },
      position: { x: 550, y: 250 },
      style: {
        background: 'linear-gradient(135deg, #F97316, #1E3A8A)',
        color: 'white',
        padding: 20,
        borderRadius: 12,
        fontWeight: 'bold',
        fontSize: 16,
        width: 200,
        textAlign: 'center'
      }
    },

    // 7 DEPARTMENTS
    { id: 'sourcing', data: { label: '1. SOURCING' }, position: { x: 50, y: 100 }, style: { border: '2px solid #3b82f6', padding: 12, background: '#1e293b', color: 'white', width: 150, textAlign: 'center' } },
    { id: 'screening', data: { label: '2. SCREENING' }, position: { x: 1050, y: 100 }, style: { border: '2px solid #10b981', padding: 12, background: '#1e293b', color: 'white', width: 150, textAlign: 'center' } },
    { id: 'intelligence', data: { label: '3. INTELLIGENCE' }, position: { x: 50, y: 650 }, style: { border: '2px solid #8b5cf6', padding: 12, background: '#1e293b', color: 'white', width: 150, textAlign: 'center' } },
    { id: 'deals', data: { label: '4. DEALS' }, position: { x: 1050, y: 650 }, style: { border: '2px solid #f59e0b', padding: 12, background: '#1e293b', color: 'white', width: 150, textAlign: 'center' } },
    { id: 'ops', data: { label: '5. OPS' }, position: { x: 550, y: 100 }, style: { border: '2px solid #ec4899', padding: 12, background: '#1e293b', color: 'white', width: 120, textAlign: 'center' } },
    { id: 'client', data: { label: '6. CLIENT' }, position: { x: 550, y: 650 }, style: { border: '2px solid #22c55e', padding: 12, background: '#1e293b', color: 'white', width: 120, textAlign: 'center' } },
    { id: 'backoffice', data: { label: '7. BACKOFFICE' }, position: { x: 1200, y: 375 }, style: { border: '2px solid #64748b', padding: 12, background: '#1e293b', color: 'white', width: 150, textAlign: 'center' } },

    // SOURCING AGENTS - 3 examples
    { id: 'agent1', data: { label: 'TalentIQ Matcher' }, position: { x: 0, y: 200 } },
    { id: 'agent2', data: { label: 'Job Board Scraper' }, position: { x: 150, y: 200 } },
    { id: 'agent3', data: { label: 'LinkedIn Parser' }, position: { x: 75, y: 260 } },

    // SCREENING AGENTS - 3 examples
    { id: 'agent4', data: { label: 'Resume Analyzer' }, position: { x: 1000, y: 200 } },
    { id: 'agent5', data: { label: 'Skill Matcher' }, position: { x: 1150, y: 200 } },
    { id: 'agent6', data: { label: 'Experience Validator' }, position: { x: 1075, y: 260 } },

    // INTELLIGENCE AGENTS - 3 examples
    { id: 'agent7', data: { label: 'Market Trend AI' }, position: { x: 0, y: 750 } },
    { id: 'agent8', data: { label: 'Salary Benchmark' }, position: { x: 150, y: 750 } },
    { id: 'agent9', data: { label: 'Competitor Tracker' }, position: { x: 75, y: 810 } },

    // DEALS AGENTS - 3 examples
    { id: 'agent10', data: { label: 'Offer Negotiator' }, position: { x: 1000, y: 750 } },
    { id: 'agent11', data: { label: 'Contract Generator' }, position: { x: 1150, y: 750 } },
    { id: 'agent12', data: { label: 'Revenue Predictor' }, position: { x: 1075, y: 810 } },

    // OPS AGENTS - 2 examples
    { id: 'agent13', data: { label: 'Workflow Automator' }, position: { x: 500, y: 200 } },
    { id: 'agent14', data: { label: 'Task Scheduler' }, position: { x: 650, y: 200 } },

    // CLIENT AGENTS - 2 examples
    { id: 'agent15', data: { label: 'Client Success AI' }, position: { x: 500, y: 750 } },
    { id: 'agent16', data: { label: 'Feedback Analyzer' }, position: { x: 650, y: 750 } },

    // BACKOFFICE AGENTS - 2 examples
    { id: 'agent17', data: { label: 'Invoice Processor' }, position: { x: 1150, y: 475 } },
    { id: 'agent18', data: { label: 'HR Compliance Bot' }, position: { x: 1300, y: 475 } },

  ]);

  const [edges] = useState([
    // Brain to Departments
    { id: 'e1', source: 'brain', target: 'sourcing', animated: true, style: { stroke: '#3b82f6' } },
    { id: 'e2', source: 'brain', target: 'screening', animated: true, style: { stroke: '#10b981' } },
    { id: 'e3', source: 'brain', target: 'intelligence', animated: true, style: { stroke: '#8b5cf6' } },
    { id: 'e4', source: 'brain', target: 'deals', animated: true, style: { stroke: '#f59e0b' } },
    { id: 'e5', source: 'brain', target: 'ops', animated: true, style: { stroke: '#ec4899' } },
    { id: 'e6', source: 'brain', target: 'client', animated: true, style: { stroke: '#22c55e' } },
    { id: 'e7', source: 'brain', target: 'backoffice', animated: true, style: { stroke: '#64748b' } },

    // Dept to Agents
    { id: 'e8', source: 'sourcing', target: 'agent1' },
    { id: 'e9', source: 'sourcing', target: 'agent2' },
    { id: 'e10', source: 'sourcing', target: 'agent3' },
    { id: 'e11', source: 'screening', target: 'agent4' },
    { id: 'e12', source: 'screening', target: 'agent5' },
    { id: 'e13', source: 'screening', target: 'agent6' },
    { id: 'e14', source: 'intelligence', target: 'agent7' },
    { id: 'e15', source: 'intelligence', target: 'agent8' },
    { id: 'e16', source: 'intelligence', target: 'agent9' },
    { id: 'e17', source: 'deals', target: 'agent10' },
    { id: 'e18', source: 'deals', target: 'agent11' },
    { id: 'e19', source: 'deals', target: 'agent12' },
    { id: 'e20', source: 'ops', target: 'agent13' },
    { id: 'e21', source: 'ops', target: 'agent14' },
    { id: 'e22', source: 'client', target: 'agent15' },
    { id: 'e23', source: 'client', target: 'agent16' },
    { id: 'e24', source: 'backoffice', target: 'agent17' },
    { id: 'e25', source: 'backoffice', target: 'agent18' },
  ]);

  return React.createElement(ReactFlowLib.ReactFlow, {
    nodes,
    edges,
    fitView: true,
    style: { background: '#0a0a0a' }
  },
    React.createElement(Background, { color: '#222', gap: 16 }),
    React.createElement(Controls),
    React.createElement(MiniMap, { nodeColor: '#F97316' })
  );
}

const root = ReactDOM.createRoot(document.getElementById('agent-map'));
root.render(React.createElement(AgentMap));
