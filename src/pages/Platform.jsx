import { Link } from 'react-router-dom';
import {
  Check, ArrowRight, BatteryCharging, Route, Boxes, Activity,
  BarChart3, Workflow, Bot, Wifi, Battery, Clock3, AlertTriangle,
  PlayCircle, PauseCircle, GitBranch, ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,
  AreaChart, Area, CartesianGrid, BarChart, Bar
} from 'recharts';

const successData = [
  { x: '08', v: 89 }, { x: '10', v: 92 }, { x: '12', v: 91 },
  { x: '14', v: 96 }, { x: '16', v: 97.4 }
];
const utilization = [
  { name: 'R1', value: 84 }, { name: 'R2', value: 68 }, { name: 'R3', value: 51 },
  { name: 'R4', value: 76 }, { name: 'R5', value: 62 }
];

const modules = [
  ['Fleet', 'Every machine. One operational view.', ['Live robot status','Battery and charging','Location and route visibility','Connectivity monitoring','Availability state','Maintenance history'], BatteryCharging, FleetPreview],
  ['Missions', 'Turn objectives into controlled execution.', ['Mission creation','Priority and scheduling','Robot assignment','Approval requirements','Pause and cancellation','Complete mission history'], Route, MissionPreview],
  ['Workflow Builder', 'Build repeatable robot workflows visually.', ['Drag-and-drop steps','Conditions','Human approvals','Timeouts','Retries','Failure branches'], Workflow, WorkflowPreview],
  ['Simulation Studio', 'Test the workflow before touching production.', ['Multi-robot environments','Restricted zones','Battery scenarios','Blocked routes','Connectivity failures','Mission replay'], Boxes, SimulationPreview],
  ['Incident Intelligence', 'Understand what happened and why.', ['Synchronized event timeline','Telemetry history','Failure classification','Mission replay','Searchable logs','Exportable reports'], Activity, IncidentPreview],
  ['Analytics', 'Turn robotic activity into operational insight.', ['Mission success','Utilization','Average completion time','Downtime','Failure categories','Energy usage'], BarChart3, AnalyticsPreview],
];

export default function Platform() {
  return (
    <>
      <SEO
        title="Robotics Operations Platform | Techuvo Robotics"
        description="Coordinate missions, monitor machines, simulate operations and investigate incidents with Techuvo Robotics OS."
      />

      <section className="pageHero platformHero">
        <div className="container grid-2 platformHeroGrid">
          <div>
            <div className="eyebrow">TECHUVO ROBOTICS OS</div>
            <h1 className="display">One operations layer for every robotic workflow.</h1>
            <p className="lead">
              Coordinate missions, monitor machines, simulate operations and investigate incidents without losing human visibility or control.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/demo">Explore the Demo</Link>
              <Link className="btn btn-secondary" to="/company#partnership">Request Platform Access</Link>
            </div>
          </div>

          <div className="platformHeroConsole">
            <div className="consoleTop">
              <div><span className="pulse" /> DEVELOPMENT ENVIRONMENT</div>
              <span>Warehouse 01</span>
            </div>
            <div className="consoleStats">
              {[['03','Active robots'],['02','Missions'],['87%','Fleet availability']].map(([v,l]) =>
                <div className="consoleStat" key={l}><strong>{v}</strong><span>{l}</span></div>
              )}
            </div>
            <div className="consoleBody">
              <div className="consoleMap">
                <div className="cZone cz1">Receiving</div><div className="cZone cz2">Storage</div><div className="cZone cz3">Packing</div>
                <div className="cRoute" /><div className="cRobot cr1"><Bot size={15}/><small>01</small></div><div className="cRobot cr2"><Bot size={15}/><small>02</small></div>
              </div>
              <div className="consoleChart">
                <span className="eyebrow">MISSION SUCCESS</span>
                <strong>97.4%</strong>
                <ResponsiveContainer width="100%" height={110}>
                  <AreaChart data={successData}>
                    <defs><linearGradient id="successFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2868FF" stopOpacity=".28"/><stop offset="100%" stopColor="#2868FF" stopOpacity=".02"/></linearGradient></defs>
                    <Area type="monotone" dataKey="v" stroke="#2868FF" fill="url(#successFill)" strokeWidth={3} dot={false}/>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section platformModulesSection">
        <div className="container">
          <div className="platformModuleHeader">
            <div>
              <div className="eyebrow">PLATFORM MODULES</div>
              <h2 className="h2">Software that follows the operation.</h2>
            </div>
            <p className="lead">Each module is designed to represent a different part of the robotics lifecycle rather than forcing every workflow into the same dashboard.</p>
          </div>

          {modules.map(([k,h,features,I,Preview], idx) => (
            <Reveal key={k}>
              <article className={`module richModule module-${idx + 1}`}>
                <div className="moduleCopy">
                  <div className="moduleNumber">0{idx + 1}</div>
                  <div className="iconbox"><I /></div>
                  <div className="eyebrow">{k.toUpperCase()}</div>
                  <h2 className="h2">{h}</h2>
                  <div className="featureList">
                    {features.map(f => <div className="feature" key={f}><Check size={16} color="#20A875" /> {f}</div>)}
                  </div>
                </div>
                <div className="modulePreview">
                  <div className="previewTopbar">
                    <div><span className="pulse" /> DEVELOPMENT PREVIEW</div>
                    <span>Simulation data</span>
                  </div>
                  <Preview />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pricingSection" id="pricing">
        <div className="container">
          <div className="pricingHeader">
            <div>
              <div className="eyebrow">EARLY ACCESS</div>
              <h2 className="h2">Start in simulation. Expand through partnership.</h2>
            </div>
            <div className="pricingSignal">
              <span className="pulse" />
              <div><b>Platform development active</b><small>Pricing is planned introductory positioning.</small></div>
            </div>
          </div>

          <div className="pricingGrid">
            {[
              ['Developer','Free','For builders exploring robotic workflows.',['One simulation project','Up to three simulated robots','Basic mission creation','Limited event history','Community updates'],'Join Developer Access',''],
              ['Builder','$49/month','For individual developers and early robotics teams.',['Multiple simulation projects','Expanded mission limits','Workflow builder','Incident history','API access','Exportable reports'],'Request Builder Access','Planned introductory pricing'],
              ['Startup','$199/month','For robotics teams developing and demonstrating products.',['Team workspace','Expanded robot limits','Shared environments','Advanced analytics','Integration assistance','Priority support'],'Discuss Startup Access','Planned introductory pricing'],
              ['Enterprise','Custom','For manufacturers, integrators and physical deployments.',['Custom robot adapters','Private deployment options','Workflow development','Technical support','Security review','Pilot partnership'],'Request Partnership',''],
            ].map(([n,p,d,fs,b,l], i) => (
              <div className={`card priceCard ${i===2?'featuredPrice':''}`} key={n}>
                {l && <div className="eyebrow">{l}</div>}
                <h3 className="h3">{n}</h3>
                <div className="price">{p}</div>
                <p className="lead priceDesc">{d}</p>
                <ul>{fs.map(x => <li key={x}><Check size={14}/>{x}</li>)}</ul>
                <Link className={n==='Enterprise'?'btn btn-primary':'btn btn-secondary'} to="/company#partnership">{b} <ArrowRight size={15}/></Link>
              </div>
            ))}
          </div>

          <p className="note pricingNote">
            Pricing and capabilities may change during platform development. Physical robot deployments require technical evaluation, safety planning and clearly defined integration responsibilities.
          </p>
        </div>
      </section>
    </>
  );
}

function FleetPreview() {
  const rows = [
    ['Robot 01','Available',87,'Receiving'],
    ['Robot 02','Executing',68,'Storage'],
    ['Robot 03','Charging',24,'Charging'],
  ];
  return <div className="fleetPreview">
    <div className="previewStatsRow"><div><b>03</b><span>Connected</span></div><div><b>02</b><span>Available</span></div><div><b>01</b><span>Charging</span></div></div>
    <div className="fleetTable">
      {rows.map(([n,s,b,l]) => <div className="fleetRow" key={n}>
        <div className="robotIdentity"><span className="robotDot"/><div><b>{n}</b><small>{l}</small></div></div>
        <span className={`statusChip ${s==='Available'?'s-green':s==='Charging'?'s-orange':'s-blue'}`}>{s}</span>
        <div className="batteryCell"><Battery size={14}/><b>{b}%</b><i><em style={{width:`${b}%`}}/></i></div>
      </div>)}
    </div>
  </div>;
}
function MissionPreview() {
  return <div className="missionPreview">
    <div className="missionHeader"><div><span>MISSION</span><b>TX-2041</b></div><span className="statusChip s-blue">Executing</span></div>
    <div className="missionRoute">
      <div className="missionPoint"><i/>Receiving</div><div className="missionLine"><em style={{width:'72%'}}/><span style={{left:'72%'}}><Bot size={13}/></span></div><div className="missionPoint end"><i/>Packing</div>
    </div>
    <div className="missionDetailGrid">
      <div><Route size={16}/><span>Assignment</span><b>Robot 02</b></div>
      <div><Clock3 size={16}/><span>Elapsed</span><b>04:17</b></div>
      <div><Battery size={16}/><span>Battery</span><b>68%</b></div>
      <div><Wifi size={16}/><span>Connection</span><b>Online</b></div>
    </div>
    <div className="missionControls"><button><PauseCircle size={15}/> Pause</button><button><ShieldCheck size={15}/> Require approval</button></div>
  </div>;
}
function WorkflowPreview() {
  return <div className="workflowPreview">
    <div className="workflowCanvas">
      <div className="wfNode start"><small>TRIGGER</small><b>Package Detected</b></div>
      <div className="wfArrow">↓</div>
      <div className="wfNode"><small>ACTION</small><b>Inspect</b></div>
      <div className="wfArrow">↓</div>
      <div className="wfNode decision"><small>CONDITION</small><b>Validation Passed?</b></div>
      <div className="wfBranches"><div><span>YES</span><div className="wfNode"><b>Transport</b></div></div><div><span>NO</span><div className="wfNode orange"><b>Human Review</b></div></div></div>
    </div>
  </div>;
}
function SimulationPreview() {
  return <div className="simulationPreview">
    <div className="simToolbar"><button><PlayCircle size={14}/> Run scenario</button><span>Blocked route</span><span>Battery drain</span></div>
    <div className="simMap">
      <div className="simZone s1">Receiving</div><div className="simZone s2">Inspection</div><div className="simZone s3">Charging</div>
      <div className="restrictedSim">RESTRICTED</div>
      <div className="simPath"/><div className="simRobot sr1"><Bot size={15}/>01</div><div className="simRobot sr2"><Bot size={15}/>02</div>
      <div className="simAlert"><AlertTriangle size={13}/> Alternative route calculated</div>
    </div>
  </div>;
}
function IncidentPreview() {
  const events = [
    ['14:31:02','Mission started',''],
    ['14:31:18','Robot entered aisle 04',''],
    ['14:31:24','Obstacle detected','warning'],
    ['14:31:26','Route recalculation',''],
    ['14:31:31','Mission resumed','success'],
  ];
  return <div className="incidentPreview">
    <div className="incidentSummary"><AlertTriangle size={20}/><div><small>INCIDENT 004</small><b>Temporary path obstruction</b></div><span className="statusChip s-yellow">Recovered</span></div>
    <div className="incidentTimeline">
      {events.map(([time,label,cls]) => <div className={`incidentEvent ${cls}`} key={time}><time>{time}</time><i/><span>{label}</span></div>)}
    </div>
  </div>;
}
function AnalyticsPreview() {
  return <div className="analyticsPreview">
    <div className="analyticsCards">
      <div><span>Mission success</span><b>97.4%</b><small>+2.1% test window</small></div>
      <div><span>Utilization</span><b>82%</b><small>Simulated fleet</small></div>
      <div><span>Avg completion</span><b>04:17</b><small>Minutes</small></div>
    </div>
    <div className="analyticsChart">
      <div className="chartTitle"><b>Robot utilization</b><span>Development data</span></div>
      <ResponsiveContainer width="100%" height={190}>
        <BarChart data={utilization}>
          <CartesianGrid vertical={false} stroke="#EEF2F7" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis hide domain={[0,100]} />
          <Tooltip />
          <Bar dataKey="value" fill="#2868FF" radius={[7,7,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>;
}