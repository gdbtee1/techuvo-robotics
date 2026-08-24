import { Link } from 'react-router-dom';
import {
  Warehouse, Factory, Rocket, Network, GraduationCap, Check,
  ArrowRight, Bot, Battery, Route, Activity, GitBranch, FlaskConical
} from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

const solutions = [
  ['Warehousing and Logistics','Robot fleets must coordinate transport missions while accounting for traffic, battery availability, changing priorities and blocked pathways.',['Fleet visibility','Mission scheduling','Route monitoring','Battery-aware assignment','Workflow simulation','Incident replay'],'Explore Warehouse Demo',Warehouse,WarehouseScenario],
  ['Advanced Manufacturing','Manufacturers need to evaluate automation workflows without introducing unnecessary production risk.',['Process simulation','Inspection workflows','Restricted-zone modeling','Mission validation','Downtime analysis','Operational dashboards'],'Discuss a Manufacturing Workflow',Factory,ManufacturingScenario],
  ['Robotics Startups','Robotics teams often need customer-facing dashboards, telemetry systems and demonstration software while concentrating on hardware.',['Robot dashboards','Mission interfaces','Telemetry visualization','API development','Simulation experiences','Technical product demonstrations'],'Partner With Techuvo',Rocket,StartupScenario],
  ['Systems Integrators','Integrators need adaptable software that can represent customer workflows and connect different technical systems.',['Custom interfaces','Workflow builders','Robot adapters','Integration dashboards','Reporting tools','Pilot development'],'Request a Custom Integration',Network,IntegratorScenario],
  ['Research and Education','Students, laboratories and researchers need accessible environments for studying multi-robot coordination and autonomy.',['Simulated robot fleets','Mission experiments','Failure scenarios','Event recording','Performance analytics','Developer documentation'],'Discuss Research Access',GraduationCap,ResearchScenario],
];

export default function Solutions() {
  return <>
    <SEO
      title="Robotics Software Solutions | Techuvo Robotics"
      description="Robotics software tools for warehousing, manufacturing, robotics startups, systems integrators, research and education."
    />

    <section className="pageHero solutionsHero">
      <div className="container solutionsHeroGrid">
        <div>
          <div className="eyebrow">OPERATIONAL USE CASES</div>
          <h1 className="display">Robotics software designed around real workflows.</h1>
          <p className="lead">Techuvo is developing modular tools for organizations that need clearer robot operations, better simulations and faster software experimentation.</p>
        </div>
        <div className="solutionHeroPanel">
          <div className="solutionHeroTop"><span className="pulse"/> WORKFLOW LIBRARY</div>
          {['Warehouse transport','Inspection cell','Robot telemetry','Integration adapter'].map((x,i)=>
            <div className="solutionHeroRow" key={x}><span>0{i+1}</span><b>{x}</b><small>{i<2?'Interactive preview':'Development concept'}</small></div>
          )}
        </div>
      </div>
    </section>

    <section className="section solutionsDetailSection">
      <div className="container">
        {solutions.map(([n,p,fs,b,I,Scenario],i) => (
          <Reveal key={n}>
            <article className={`solutionModule solutionModule${i+1}`}>
              <div className="solutionCopy">
                <div className="solutionIndex">0{i+1}</div>
                <div className="iconbox"><I/></div>
                <div className="eyebrow">SOLUTION 0{i+1}</div>
                <h2 className="h2">{n}</h2>
                <p className="lead"><b>Problem:</b> {p}</p>
                <div className="featureList">
                  {fs.map(f => <div className="feature" key={f}><Check size={16} color="#20A875"/> {f}</div>)}
                </div>
                <Link className="btn btn-primary" to={i===0?'/demo':'/company#partnership'}>{b}<ArrowRight size={15}/></Link>
              </div>
              <div className="solutionScenario">
                <div className="scenarioTop"><span className="pulse"/> DEVELOPMENT SCENARIO <small>Simulation / interface concept</small></div>
                <Scenario/>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="section responsibilitySection">
      <div className="container">
        <div className="responsibilityPanel">
          <div className="responsibilityIcon"><Activity/></div>
          <div>
            <div className="eyebrow">RESPONSIBLE DEVELOPMENT</div>
            <h2 className="h3">Software orchestration first. Physical deployment only with defined boundaries.</h2>
            <p>Physical deployments require hardware evaluation, defined system boundaries and appropriate safety expertise. Techuvo’s initial focus is the software, simulation, data and orchestration layer.</p>
          </div>
        </div>
      </div>
    </section>
  </>;
}

function WarehouseScenario() {
  return <div className="warehouseScenario">
    <div className="scenarioMetrics"><span><b>03</b> Robots</span><span><b>02</b> Missions</span><span><b>87%</b> Availability</span></div>
    <div className="scenarioMap">
      <div className="sZone a">Receiving</div><div className="sZone b">Storage</div><div className="sZone c">Packing</div><div className="sZone d">Charging</div>
      <div className="sRoute"/><div className="sRobot one"><Bot size={14}/>01</div><div className="sRobot two"><Bot size={14}/>02</div>
      <div className="restrictedScenario">Restricted</div>
    </div>
  </div>;
}
function ManufacturingScenario() {
  return <div className="manufacturingScenario">
    <div className="cellNode"><span>01</span><Factory size={18}/><b>Cell Entry</b></div>
    <div className="cellLine"/><div className="cellNode"><span>02</span><Activity size={18}/><b>Inspect</b></div>
    <div className="cellLine"/><div className="cellNode accent"><span>03</span><Route size={18}/><b>Transfer</b></div>
    <div className="cellStatus"><span className="pulse"/> Workflow validation active</div>
  </div>;
}
function StartupScenario() {
  return <div className="startupScenario">
    <div className="startupRobot"><Bot size={26}/><div><b>Robot 01</b><span>Development hardware</span></div><span className="statusChip s-green">Available</span></div>
    <div className="startupTelemetry">
      <div><Battery size={16}/><span>Battery</span><b>87%</b></div>
      <div><Activity size={16}/><span>Velocity</span><b>1.4 m/s</b></div>
      <div><Route size={16}/><span>Mission</span><b>TX-2041</b></div>
    </div>
    <div className="startupGraph"><i/><i/><i/><i/><i/><i/><i/></div>
  </div>;
}
function IntegratorScenario() {
  return <div className="integratorScenario">
    <div className="integrationBox">Robot / ROS 2</div><GitBranch/><div className="integrationCore">TECHUVO<br/><small>Adapter layer</small></div><GitBranch/><div className="integrationBox">Business workflow</div>
    <div className="integrationProtocols"><span>REST</span><span>WebSocket</span><span>Python</span><span>Custom</span></div>
  </div>;
}
function ResearchScenario() {
  return <div className="researchScenario">
    <div className="researchHeader"><FlaskConical size={19}/><b>Experiment 014</b><span className="statusChip s-blue">Running</span></div>
    <div className="researchControls"><span>Robot count <b>3</b></span><span>Failure injection <b>Enabled</b></span><span>Runs <b>12</b></span></div>
    <div className="researchPlot">{[42,68,54,81,72,92,79,96,83,94].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div>
    <small>Simulated mission-success observations</small>
  </div>;
}