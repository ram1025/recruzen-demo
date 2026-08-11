const { useState, useCallback, useEffect } = React;
const ReactFlowLib = window.ReactFlow;
const { Background, Controls, MiniMap } = ReactFlowLib;

function AgentMap() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [brainCommand, setBrainCommand] = useState('');

  // Fake live data - every 3 sec update avthadi
  const [nodes, setNodes] = useState([
    // BRAIN
    {
      id: 'brain',
      data: { label: '🧠 Recruzen AI Brain', type: 'brain' },
      position: { x: 550, y: 250 },
      style: { background: 'linear-gradient(135deg, #F97316, #1E3A8A)', color: 'white', padding: 20, borderRadius: 12, fontWeight: 'bold', width: 200, textAlign: 'center' }
    },

    // 7 DEPARTMENTS
    { id: 'sourcing', data: { label: '1. SOURCING', type: 'dept' }, position: { x: 50, y: 100 }, style: { border: '2px solid #3b82f6', padding: 12, background: '#1e293b', color: 'white', width: 150, textAlign: 'center' } },
    { id: 'screening', data: { label: '2. SCREENING', type: 'dept' }, position: { x: 1050, y: 100 }, style: { border: '2px solid #10b981', padding: 12, background: '#1e293b', color: 'white', width: 150, textAlign: 'center' } },
    { id: 'intelligence', data: { label: '3. INTELLIGENCE', type: 'dept' }, position: { x: 50, y: 650 }, style: { border: '2px solid #8b5cf6', padding: 12, background: '#1e293b', color: 'white', width: 150, textAlign: 'center' } },
    { id: 'deals', data: { label: '4. DEALS', type: 'dept' }, position: { x: 1050, y: 650 }, style: { border: '2px solid #f59e0b', padding: 12, background: '#1e293b', color: 'white', width: 150, textAlign: 'center' } },
    { id: 'ops', data: { label: '5. OPS', type: 'dept' }, position: { x: 550, y: 100 }, style: { border: '2px solid #ec4899', padding: 12, background: '#1e293b', color: 'white', width: 120, textAlign: 'center' } },
    { id: 'client', data: { label: '6. CLIENT', type: 'dept' }, position: { x: 550, y: 650 }, style: { border: '2px solid #22c55e', padding: 12, background: '#1e293b', color: 'white', width: 120, textAlign: 'center' } },
    { id: 'backoffice', data: { label: '7. BACKOFFICE', type: 'dept' }, position: { x: 1200, y: 375 }, style: { border: '2px solid #64748b', padding: 12, background: '#1e293b', color: 'white', width: 150, textAlign: 'center' } },

    // AGENTS with live data
    { id: 'agent1', data: { label: 'TalentIQ Matcher', status: 'Active', count: '12 matches today', lastJob: 'React Developer' }, position: { x: 0, y: 200 }, style: { border: '2px solid #10b981', background: '#1e293b', color: 'white' } },
    { id: 'agent2', data: { label: 'Job Board Scraper', status: 'Active', count: '150 jobs found', lastJob: 'All boards' }, position: { x: 150, y: 200 }, style: { border: '2px solid #10b981', background: '#1e293b', color: 'white' } },
    { id: 'agent3', data: { label: 'LinkedIn Parser', status: 'Idle', count: '0 today', lastJob: '-' }, position: { x: 75, y: 260 }, style: { border: '2px solid #64748b', background: '#1e293b', color: 'white' } },

    { id: 'agent4', data: { label: 'Resume Analyzer', status: 'Active', count: '34 resumes', lastJob: 'Backend Dev' }, position: { x: 1000, y: 200 }, style: { border: '2px solid #10b981', background: '#1e293b', color: 'white' } },
    { id: 'agent5', data: { label: 'Skill Matcher', status: 'Active', count: '89% accuracy', lastJob: 'Fullstack' }, position: { x: 1150, y: 200 }, style: { border: '2px solid #10b981', background: '#1e293b', color: 'white' } },
    { id: 'agent6', data: { label: 'Experience Validator', status: 'Idle', count: '-', lastJob: '-' }, position: { x: 1075, y: 260 }, style: { border: '2px solid #64748b', background: '#1e293b', color: 'white' } },

  ]);

  const [edges] = useState([
    { id: 'e1', source: 'brain', target: 'sourcing', animated: true, style: { stroke: '#3b82f6' } },
    { id: 'e2', source: 'brain', target: 'screening', animated: true, style: { stroke: '#10b981' } },
    { id: 'e3', source: 'brain', target: 'intelligence', animated: true, style: { stroke: '#8b5cf6' } },
    { id: 'e4', source: 'brain', target: 'deals', animated: true, style: { stroke: '#f59e0b' } },
    { id: 'e5', source: 'brain', target: 'ops', animated: true, style: { stroke: '#ec4899' } },
    { id: 'e6', source: 'brain', target: 'client', animated: true, style: { stroke: '#22c55e' } },
    { id: 'e7', source: 'brain', target: 'backoffice', animated: true, style: { stroke: '#64748b' } },
    { id: 'e8', source: 'sourcing', target: 'agent1' },
    { id: 'e9', source: 'sourcing', target: 'agent2' },
    { id: 'e10', source: 'sourcing', target: 'agent3' },
    { id: 'e11', source: 'screening', target: 'agent4' },
    { id: 'e12', source: 'screening', target: 'agent5' },
    { id: 'e13', source: 'screening', target: 'agent6' },
  ]);

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, []);

  // Brain command submit
  const handleBrainCommand = () => {
    if(brainCommand.trim() === '') return;
    alert(`Brain received: "${brainCommand}"\n\nSOURCING agents are now working...`);
    setBrainCommand('');
    // Here you can make sourcing nodes green
  }

  return (
    React.createElement('div', {style: {height: '100%', position: 'relative'}},
      React.createElement(ReactFlowLib.ReactFlow, {
        nodes,
        edges,
        fitView: true,
        onNodeClick: onNodeClick,
        style: { background: '#0a0a0a' }
      },
        React.createElement(Background, { color: '#222', gap: 16 }),
        React.createElement(Controls),
        React.createElement(MiniMap, { nodeColor: '#F97316' })
      ),

      // BRAIN CHAT BOX
      React.createElement('div', {
        style: {
          position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
          background: '#1e293b', padding: 12, borderRadius: 12,
          border: '1px solid #333', width: '60%', display: 'flex', gap: 10
        }
      },
        React.createElement('input', {
          type: 'text',
          placeholder: 'Ask Brain: "Find 3 Python devs in Hyderabad"',
          value: brainCommand,
          onChange: (e) => setBrainCommand(e.target.value),
          onKeyPress: (e) => e.key === 'Enter' && handleBrainCommand(),
          style: {flex: 1, padding: 10, borderRadius: 8, border: 'none', background: '#0a0a0a', color: 'white'}
        }),
        React.createElement('button', {
          onClick: handleBrainCommand,
          style: {padding: '10px 20px', background: '#F97316', border: 'none', borderRadius: 8, color: 'white', fontWeight: 'bold'}
        }, 'Send')
      ),

      // POPUP
      selectedNode && React.createElement('div', {
        style: {
          position: 'absolute', top: 80, right: 20,
          background: '#1e293b', padding: 20, borderRadius: 12,
          border: '1px solid #333', width: 300, color: 'white', zIndex: 10
        }
      },
        React.createElement('h3', {style: {marginTop: 0, color: '#F97316'}}, selectedNode.data.label),
        selectedNode.data.status && React.createElement('p', null, '● Status: ',
          React.createElement('span', {style: {color: selectedNode.data.status === 'Active'? '#10b981' : '#64748b'}}, selectedNode.data.status)
        ),
        selectedNode.data.count && React.createElement('p', null, '📊 ', selectedNode.data.count),
        selectedNode.data.lastJob && React.createElement('p', null, '💼 Last Job: ', selectedNode.data.lastJob),
        React.createElement('button', {
          onClick: () => setSelectedNode(null),
          style: {marginTop: 10, padding: '8px 16px', background: '#4f46e5', border: 'none', borderRadius: 8, color: 'white'}
        }, 'Close')
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('agent-map'));
root.render(React.createElement(AgentMap));
