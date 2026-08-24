import { useState } from 'react';
import {
  CheckCircle2, Gauge, Boxes, Network, Workflow, Presentation, Bot,
  ArrowRight, PlayCircle, Code2, Wrench, Radio, ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';

const partnerCards = [
  ['Robotics Dashboard Development','Build clear interfaces for robot status, telemetry, missions and incidents.',Gauge],
  ['Simulation Prototypes','Create interactive environments for demonstrating and testing robotic workflows.',Boxes],
  ['ROS 2 and API Integrations','Connect robot communication systems with dashboards and business applications.',Network],
  ['Workflow and Fleet Tools','Develop mission scheduling, task orchestration and operational reporting.',Workflow],
  ['Technical Demonstrations','Turn complex robotics capabilities into experiences customers and investors can understand.',Presentation],
  ['Early Hardware Pilots','Collaborate on carefully scoped connections between Techuvo software and physical robot platforms.',Bot],
];

export default function Company() {
  const [done,setDone] = useState(false);

  return <>
    <SEO
      title="About and Partnerships | Techuvo Robotics"
      description="Learn about Techuvo Robotics and request a robotics software, simulation or technical partnership."
    />

    <section className="pageHero companyHero">
      <div className="container companyHeroGrid">
        <div>
          <div className="eyebrow">ABOUT TECHUVO ROBOTICS</div>
          <h1 className="display">Building the connection between people, robots and operations.</h1>
          <p className="lead">Techuvo Robotics is an emerging Michigan-based software initiative developing tools for robot coordination, mission planning, simulation and operational intelligence.</p>
          <div className="actions">
            <a className="btn btn-secondary" href="#development">View Development Progress</a>
            <a className="btn btn-primary" href="#partnership">Request Partnership</a>
          </div>
        </div>

        <div className="companyHeroSignal">
          <div className="signalTop"><span className="pulse"/> COMPANY STATUS</div>
          <div className="signalBig">BUILDING</div>
          <p>Software prototypes, simulation tooling and early partnership infrastructure are being developed in public.</p>
          <div className="signalRows">
            <span><Code2 size={16}/> Software development <b>Active</b></span>
            <span><Boxes size={16}/> Simulation <b>Active</b></span>
            <span><Wrench size={16}/> Hardware integration <b>Early stage</b></span>
          </div>
        </div>
      </div>
    </section>

    <section className="section companyVisionSection">
      <div className="container companyVisionGrid">
        <div className="visionStatement">
          <span>VISION</span>
          <h2>Intelligent machines need understandable systems.</h2>
        </div>
        <div>
          <p className="lead">As robotics expands across manufacturing, logistics, healthcare and other industries, organizations will need more than capable hardware. They will need clear software for assigning work, maintaining oversight, testing behavior and understanding failure.</p>
          <p className="lead">Techuvo is being built around that need.</p>
        </div>
      </div>
    </section>

    <section className="section founderSection" id="development">
      <div className="container founderStoryGrid">
        <div className="founderMediaStage">
          <div className="founderVideoPlaceholder">
            <div className="videoPlay"><PlayCircle size={34}/></div>
            <span>DEVELOPMENT LOG</span>
            <h3>Building Techuvo in public.</h3>
            <p>This area is ready for real footage of software development, robotics experiments and future hardware testing.</p>
            <div className="devMeta"><b>Current media</b><span>Placeholder until original footage is added</span></div>
          </div>
        </div>

        <div className="founderStory">
          <div className="eyebrow">FOUNDER</div>
          <h2 className="h2">Built with urgency, curiosity and long-term ambition.</h2>
          <p className="lead">Techuvo was founded by an 18-year-old software builder from Michigan who began by creating websites, digital systems and business software. The company is now expanding its technical direction toward robotics, autonomy and intelligent operations.</p>
          <p className="lead">AI-assisted development is used to accelerate implementation, while important systems are studied, tested and documented. The goal is not to imitate an established robotics company. The goal is to grow into one through consistent building, public proof and serious partnerships.</p>
        </div>
      </div>

      <div className="container developmentTimeline">
        {[
          ['01','Software foundation','Build working mission, fleet and simulation interfaces.','ACTIVE'],
          ['02','Simulation depth','Test failures, workflows, telemetry and orchestration behavior.','ACTIVE'],
          ['03','Technical partnerships','Work with robotics teams and integrators on scoped software problems.','SEEKING'],
          ['04','Physical pilots','Connect bounded Techuvo interfaces to evaluated robot hardware.','FUTURE'],
        ].map(([n,t,c,s]) =>
          <div className="timelineItem" key={n}>
            <span className="timelineNumber">{n}</span>
            <i/>
            <div><small>{s}</small><h3>{t}</h3><p>{c}</p></div>
          </div>
        )}
      </div>
    </section>

    <section className="section principlesSection" id="principles">
      <div className="container">
        <div className="principlesHeader">
          <div>
            <div className="eyebrow">DEVELOPMENT PRINCIPLES</div>
            <h2 className="h2">How Techuvo intends to build.</h2>
          </div>
          <ShieldCheck size={54}/>
        </div>
        <div className="principlesGrid">
          {[
            ['01','Build Working Proof','Demonstrations should function, not merely look futuristic.',Code2],
            ['02','Maintain Human Oversight','Autonomy should operate within visible, approved boundaries.',Radio],
            ['03','Test Failure Early','Systems should be evaluated under interruption, uncertainty and invalid inputs.',Gauge],
            ['04','Grow Through Partnership','Physical robotics requires collaboration across software, hardware and safety expertise.',Network],
          ].map(([n,t,c,I]) =>
            <div className="principleCard" key={t}><span>{n}</span><I/><h3>{t}</h3><p>{c}</p></div>
          )}
        </div>
      </div>
    </section>

    <section className="section partnershipTypesSection">
      <div className="container">
        <div className="sectionHeaderSplit">
          <div><div className="eyebrow">PARTNERSHIPS</div><h2 className="h2">Ways to work with Techuvo.</h2></div>
          <p className="lead">Early partnerships should be concrete, technically scoped and centered on software, simulation or carefully bounded integrations.</p>
        </div>
        <div className="partnerGrid">
          {partnerCards.map(([n,c,I],i) =>
            <div className="partnerCard" key={n}>
              <span>0{i+1}</span><div className="iconbox"><I/></div><h3>{n}</h3><p>{c}</p>
              <a href="#partnership">Discuss this partnership <ArrowRight size={14}/></a>
            </div>
          )}
        </div>
      </div>
    </section>

    <section className="section partnershipFormSection" id="partnership">
      <div className="container partnershipFormGrid">
        <div className="partnershipIntro">
          <div className="eyebrow">PARTNERSHIP REQUEST</div>
          <h2 className="h2">Tell us what you are building.</h2>
          <p className="lead">Share the technical context, current hardware or simulation environment, and the operational problem you want to solve.</p>
          <div className="partnershipContact">
            <b>Techuvo Robotics</b><span>Michigan, United States</span>
            <small>Professional email and social links can be added when provided.</small>
          </div>
        </div>

        <div className="card partnershipFormCard">
          {done ? (
            <div className="successState">
              <CheckCircle2 size={54} color="#20A875"/>
              <h3 className="h3">Request received.</h3>
              <p className="lead">Your request has been received. Techuvo will review the technical details and respond with the most appropriate next step.</p>
            </div>
          ) : (
            <form onSubmit={e=>{e.preventDefault();setDone(true)}} className="formGrid">
              {[
                ['Full name','text'],['Work email','email'],['Organization','text'],['Organization website','url'],
                ['Role','text'],['Industry','text'],['Robot manufacturer or hardware platform','text'],
                ['Number of robots','number'],['Current software stack','text'],['Timeline','text']
              ].map(([l,t]) =>
                <div className="field" key={l}><label>{l}</label><input type={t} required={['Full name','Work email','Organization'].includes(l)}/></div>
              )}
              <div className="field"><label>Simulation or physical deployment</label><select><option>Simulation</option><option>Physical deployment</option><option>Both / evaluating</option></select></div>
              <div className="field"><label>Desired partnership type</label><select><option>Dashboard development</option><option>Simulation prototype</option><option>ROS 2 / API integration</option><option>Workflow / fleet tools</option><option>Technical demonstration</option><option>Early hardware pilot</option></select></div>
              <div className="field"><label>Estimated budget</label><select>{['Exploring / Not determined','Under $1,000','$1,000–$5,000','$5,000–$15,000','$15,000+','Ongoing partnership'].map(x=><option key={x}>{x}</option>)}</select></div>
              <div className="field full"><label>Operational problem</label><textarea required/></div>
              <div className="field full"><label>Additional details</label><textarea/></div>
              <button className="btn btn-primary field full" type="submit">Submit Partnership Request</button>
            </form>
          )}
        </div>
      </div>
    </section>
  </>;
}