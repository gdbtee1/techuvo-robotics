import { useEffect, useMemo, useState } from 'react';
import {
  Bot, Play, Pause, RotateCcw, Send, Radio, MapPin,
  Battery, Wifi, Gauge, AlertTriangle
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const robotsBase = [
  {id:'Robot 01',status:'Available',battery:87,location:'Receiving',x:13,y:20},
  {id:'Robot 02',status:'Executing',battery:68,location:'Storage',x:47,y:42},
  {id:'Robot 03',status:'Charging',battery:24,location:'Charging',x:82,y:75}
];

const templates = [
  'Deliver inventory to Packing',
  'Inspect Station 04',
  'Return low-battery robot to Charging'
];

const failures = [
  'Low battery','Blocked route','Lost connection',
  'Restricted-zone conflict','Mission reassignment','Emergency pause'
];

const stateSeq = ['Requested','Validating','Queued','Assigned','Executing','Completed'];

function chip(status) {
  if (['Available','Completed'].includes(status)) return 's-green';
  if (['Executing','Assigned','Requested','Validating','Queued'].includes(status)) return 's-blue';
  if (status === 'Charging') return 's-orange';
  if (status === 'Paused') return 's-yellow';
  if (['Failed','Cancelled'].includes(status)) return 's-red';
  return 's-blue';
}

export default function RobotDemo({ compact=false }) {
  const reduce = useReducedMotion();
  const [environment,setEnvironment] = useState('Warehouse');
  const [mission,setMission] = useState(templates[0]);
  const [missionState,setMissionState] = useState('Requested');
  const [progress,setProgress] = useState(0);
  const [running,setRunning] = useState(false);
  const [selectedId,setSelectedId] = useState(robotsBase[0].id);
  const [robots,setRobots] = useState(robotsBase);
  const [logs,setLogs] = useState(['Simulation environment ready.']);
  const [command,setCommand] = useState('Send the nearest available robot to inspect Station 4.');
  const [structured,setStructured] = useState(null);

  const selectedRobot = robots.find(r => r.id === selectedId) || robots[0];

  const addLog = text => setLogs(items => [
    `${new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})} · ${text}`,
    ...items
  ].slice(0,12));

  const launch = (custom=mission) => {
    setMission(custom);
    setStructured({
      task: custom.toLowerCase().includes('inspect') ? 'inspect' : 'transport',
      destination: custom.toLowerCase().includes('station') ? 'station_04' :
        custom.toLowerCase().includes('charging') ? 'charging' : 'packing',
      priority: 'normal',
      approval_required: false
    });
    setRunning(true);
    setProgress(0);
    setMissionState('Requested');
    addLog(`Mission requested: ${custom}`);
  };

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => setProgress(p => Math.min(p + 10, 100)), 420);
    return () => clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (!running) return;
    const idx = Math.min(Math.floor(progress / 20), stateSeq.length - 1);
    const next = stateSeq[idx];
    setMissionState(next);
    if (next === 'Assigned') setSelectedId(robotsBase[0].id);
    if (next === 'Completed') {
      setRunning(false);
      addLog('Mission completed successfully.');
    }
  }, [progress, running]);

  const triggerFailure = failure => {
    if (failure === 'Blocked route') {
      setMissionState('Paused');
      addLog('Blocked route detected. Robot paused.');
      setTimeout(() => {
        addLog('Alternative route calculated. Mission resumed.');
        setMissionState('Executing');
      }, 1000);
    } else if (failure === 'Low battery') {
      setRobots(rs => rs.map((r,i) => i===0 ? {...r,battery:12,status:'Charging'} : r));
      addLog('Low battery threshold reached. Charging task created.');
    } else if (failure === 'Lost connection') {
      setMissionState('Paused');
      addLog('Robot connection lost. Mission paused pending telemetry recovery.');
    } else if (failure === 'Restricted-zone conflict') {
      setMissionState('Paused');
      addLog('Mission blocked by restricted-zone validation.');
    } else if (failure === 'Mission reassignment') {
      setSelectedId(robotsBase[1].id);
      addLog('Mission reassigned to Robot 02.');
    } else {
      setMissionState('Paused');
      setRunning(false);
      addLog('Emergency pause activated by operator.');
    }
  };

  const destination = useMemo(() =>
    mission.toLowerCase().includes('charging') ? {x:82,y:75} :
    mission.toLowerCase().includes('inspect') ? {x:70,y:25} :
    {x:78,y:45}
  ,[mission]);

  const reset = () => {
    setRunning(false);
    setProgress(0);
    setMissionState('Requested');
    setRobots(robotsBase);
    setSelectedId(robotsBase[0].id);
    addLog('Simulation reset.');
  };

  return (
    <div className={`demoShell ${compact ? 'demoCompact' : ''}`} aria-label="Interactive robot fleet simulation">
      <aside className="sidebar demoLeft">
        <div className="sideTitle">Environment</div>
        <div className="seg environmentSeg">
          {['Warehouse','Manufacturing Cell','Inspection Route'].map(x =>
            <button key={x} className={environment===x?'active':''} onClick={()=>setEnvironment(x)}>
              <span>{x}</span>{x!=='Warehouse' && <small>PREVIEW</small>}
            </button>
          )}
        </div>

        <div className="sideTitle sideSpace">Mission templates</div>
        <div className="seg">
          {templates.map((x,i) =>
            <button key={x} className={mission===x?'active':''} onClick={()=>setMission(x)}>
              <span className="templateNum">0{i+1}</span>{x}
            </button>
          )}
        </div>

        {!compact && <>
          <div className="sideTitle sideSpace">Failure scenarios</div>
          <div className="failureGrid">
            {failures.map(f =>
              <button key={f} onClick={()=>triggerFailure(f)}>
                <AlertTriangle size={13}/>{f}
              </button>
            )}
          </div>
        </>}
      </aside>

      <div className="mapArea" aria-live="polite">
        <div className="mapTopStatus">
          <div><span className="pulse"/> {environment.toUpperCase()} ENVIRONMENT</div>
          <span>Simulation only</span>
        </div>

        <div className="zone receiving" style={{left:'7%',top:'12%'}}>Receiving</div>
        <div className="zone storage" style={{left:'38%',top:'30%'}}>Storage</div>
        <div className="zone inspection" style={{left:'65%',top:'12%'}}>Inspection</div>
        <div className="zone packing" style={{left:'74%',top:'40%'}}>Packing</div>
        <div className="zone charging" style={{left:'77%',top:'72%'}}>Charging</div>
        <div className="zone restricted" style={{left:'42%',top:'67%',width:'120px',height:'75px'}}>Restricted zone</div>

        {running && <motion.div
          className="route"
          initial={{scaleX:0}}
          animate={{scaleX:1}}
          transition={{duration:reduce?0:.7}}
          style={{left:'16%',top:'23%',width:'58%',transform:'rotate(18deg)'}}
        />}

        {robots.map((r,i) =>
          <motion.button
            key={r.id}
            className={`robot ${selectedId===r.id?'selectedRobot':''}`}
            aria-label={`${r.id}, ${r.status}, ${r.battery}% battery`}
            onClick={()=>setSelectedId(r.id)}
            animate={running && i===0 ? {left:`${destination.x}%`,top:`${destination.y}%`} : {left:`${r.x}%`,top:`${r.y}%`}}
            transition={{duration:reduce?0:4.2,ease:'easeInOut'}}
          >
            <Bot size={19}/><small>0{i+1}</small>
          </motion.button>
        )}

        <div className="missionFloat">
          <div className="missionFloatTop">
            <span>MISSION STATE</span>
            <span className={`statusChip ${chip(missionState)}`}>{missionState}</span>
          </div>
          <div className="progressTrack"><i style={{width:`${progress}%`}}/></div>
          <div className="missionFloatBottom"><b>{progress}%</b><span>{mission}</span></div>
        </div>
      </div>

      <aside className="sidebar right demoRight">
        <div className="selectedRobotHeader">
          <div>
            <small>SELECTED ROBOT</small>
            <h3>{selectedRobot.id}</h3>
          </div>
          <span className={`statusChip ${chip(selectedRobot.status)}`}>{selectedRobot.status}</span>
        </div>

        <div className="robotTelemetryGrid">
          <div><Battery size={16}/><span>Battery</span><b>{selectedRobot.battery}%</b></div>
          <div><Gauge size={16}/><span>Speed</span><b>{missionState==='Executing'?'1.4 m/s':'0.0 m/s'}</b></div>
          <div><Wifi size={16}/><span>Connectivity</span><b>Online</b></div>
          <div><MapPin size={16}/><span>Location</span><b>{selectedRobot.location}</b></div>
        </div>

        <div className="assignmentBox">
          <span>CURRENT ASSIGNMENT</span>
          <b>{running ? mission : 'No active mission'}</b>
        </div>

        <div className="sideTitle sideSpace">Simulation controls</div>
        <div className="demoControls">
          <button className="btn btn-primary" onClick={()=>launch()}><Play size={15}/> Launch</button>
          <button className="btn btn-secondary iconOnly" aria-label="Pause mission" onClick={()=>{setRunning(false);setMissionState('Paused');addLog('Mission paused by operator.')}}><Pause size={15}/></button>
          <button className="btn btn-secondary iconOnly" aria-label="Reset simulation" onClick={reset}><RotateCcw size={15}/></button>
        </div>

        <div className="sideTitle sideSpace eventTitle"><span>Event history</span><Radio size={14}/></div>
        <div className="eventlog">
          {logs.map((x,i) => <div className="event" key={`${x}-${i}`}><i/><span>{x}</span></div>)}
        </div>
      </aside>

      {!compact && <div className="commandBar">
        <div className="commandPrompt"><span>MISSION COMMAND</span><input aria-label="Natural-language mission input" value={command} onChange={e=>setCommand(e.target.value)} placeholder="Send the nearest available robot to inspect Station 4."/></div>
        <button className="btn btn-primary" onClick={()=>launch(command)}><Send size={16}/> Create Mission</button>
      </div>}

      {!compact && structured && <div className="structuredOutput">
        <div>
          <div className="eyebrow">Structured mission output</div>
          <pre>{JSON.stringify(structured,null,2)}</pre>
        </div>
        <div className="architectureChain">
          {['Human Request','Structured Mission','Validation','Scheduling','Robot Interface'].map((x,i) =>
            <span key={x}>{x}{i<4 && <b>→</b>}</span>
          )}
        </div>
      </div>}
    </div>
  );
}