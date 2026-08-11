const { useState } = React;
const ReactFlowLib = window.ReactFlow;

function AgentMap() {
  const [nodes] = useState([
    { id: 'brain', data: { label: '🧠 Recruzen AI Brain' }, position: { x: 500, y: 200 }, style: { background: '#F97316', color: 'white', padding: 20, borderRadius: 12, fontWeight: 'bold' } },
    { id: 'sourcing', data: { label: '1. SOURCING' }, position: { x: 100, y: 400 }, style: { border: '2px solid #3b82f6', padding: 12, background: '#1e293b', color: 'white' } },
    { id: 'screening', data: { label: '2. SCREENING' }, position: { x: 900, y: 400 }, style: { border: '2px solid #10b981', padding: 12, background: '#1e293b', color: 'white' } },
    { id: 'agent1', data: { label: 'TalentIQ Matcher' }, position: { x: 50, y: 500 } },
    { id: 'agent2', data: { label: 'Job Board Scraper' }, position: { x: 200, y: 500 } },
  ]);

  const [edges] = useState([
    { id: 'e1', source: 'brain', target: 'sourcing', animated: true },
    { id: 'e2', source: 'brain', target: 'screening', animated: true },
    { id: 'e3', source: 'sourcing', target: 'agent1' },
    { id: 'e4', source: 'sourcing', target: 'agent2' },
  ]);

  return React.createElement(ReactFlowLib.ReactFlow, {
    nodes,
    edges,
    fitView: true,
    style: { background: '#0a0a0a' }
  },
    React.createElement(ReactFlowLib.Background, { color: '#333' }),
    React.createElement(ReactFlowLib.Controls),
    React.createElement(ReactFlowLib.MiniMap)
  );
}

const root = ReactDOM.createRoot(document.getElementById('agent-map'));
root.render(React.createElement(AgentMap));
