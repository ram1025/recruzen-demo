// agent-map.js

const { useState, useCallback } = React;
const { ReactFlow, Background, Controls, MiniMap } = ReactFlow;

const initialNodes = [
  // CENTER BRAIN
  { id: 'brain', type: 'default', data: { label: '🧠 Recruzen AI Brain' }, position: { x: 400, y: 300 }, style: { background: '#F97316', color: 'white', padding: 15, borderRadius: 10, fontWeight: 'bold' } },
  
  // 7 DEPARTMENTS
  { id: 'sourcing', data: { label: '1. SOURCING' }, position: { x: 100, y: 100 }, style: { border: '2px solid #3b82f6', padding: 10 } },
  { id: 'screening', data: { label: '2. SCREENING' }, position: { x: 700, y: 100 }, style: { border: '2px solid #10b981', padding: 10 } },
  { id: 'intelligence', data: { label: '3. INTELLIGENCE' }, position: { x: 100, y: 500 }, style: { border: '2px solid #8b5cf6', padding: 10 } },
  { id: 'deals', data: { label: '4. DEALS' }, position: { x: 700, y: 500 }, style: { border: '2px solid #f59e0b', padding: 10 } },
  { id: 'ops', data: { label: '5. OPS' }, position: { x: 400, y: 100 }, style: { border: '2px solid #ec4899', padding: 10 } },
  { id: 'client', data: { label: '6. CLIENT' }, position: { x: 400, y: 500 }, style: { border: '2px solid #22c55e', padding: 10 } },
  { id: 'backoffice', data: { label: '7. BACKOFFICE' }, position: { x: 1000, y: 300 }, style: { border: '2px solid #64748b', padding: 10 } },

  // EXAMPLE AGENTS under SOURCING
  { id: 'agent1', data: { label: 'TalentIQ Matcher' }, position: { x: 50, y: 180 } },
  { id: 'agent2', data: { label: 'Job Board Scraper' }, position: { x: 200, y: 180 } },
];

const initialEdges = [
  { id: 'e1', source: 'brain', target: 'sourcing' },
  { id: 'e2', source: 'brain', target: 'screening' },
  { id: 'e3', source: 'sourcing', target: 'agent1' },
  { id: 'e4', source: 'sourcing', target: 'agent2' },
];

function AgentMap() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return React.createElement(ReactFlow, {
    nodes,
    edges,
    fitView: true,
    style: { background: '#0a0a0a' }
  },
    React.createElement(Background),
    React.createElement(Controls),
    React.createElement(MiniMap)
  );
}

const root = ReactDOM.createRoot(document.getElementById('agent-map'));
root.render(React.createElement(AgentMap));
