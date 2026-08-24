import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Radar, Route, Box, Activity, ArrowRight, CheckCircle2, Network,
  PlayCircle, Cpu, ShieldCheck, GitBranch, Radio, CircleDot, Video
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import RobotDemo from '../components/RobotDemo';

const phrases = ['Techuvo Robotics', 'Techuvo Autonomy', 'Techuvo Intelligence', 'Techuvo Simulation'];

const platformNodes = [
  { title: 'Fleet Intelligence', copy: 'Machine state, battery, connectivity and availability.', icon: Radar, cls: 'nodeFleet' },
  { title: 'Mission Control', copy: 'Validated objectives, assignment and human oversight.', icon: Route, cls: 'nodeMission' },
  { title: 'Simulation Studio', copy: 'Test routes, interruptions and recovery behavior.', icon: Box, cls: 'nodeSimulation' },
  { title: 'Incident Intelligence', copy: 'Replay events and investigate operational failures.', icon: Activity, cls: 'nodeIncident' },
];

export default function Home() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIdx(i => (i + 1) % phrases.length), 2500);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <>
      <SEO
        title="Techuvo Robotics | Intelligent Robot Operations"
        description="Plan missions, coordinate robot fleets, simulate workflows and understand operations with Techuvo Robotics."
      />

      <section className="hero">
        <div className="heroPoster" />
        {!reduce && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}social-preview.svg`}
            aria-hidden="true"
          >
            <source src={`${import.meta.env.BASE_URL}techuvo-robots.webm`} type="video/webm" />
            <source src={`${import.meta.env.BASE_URL}techuvo-robots.mp4`} type="video/mp4" />
          </video>
        )}
        <div className="heroOverlay" />

        <div className="container heroContent">
          <div className="eyebrow">THE OPERATIONS LAYER FOR INTELLIGENT MACHINES</div>
          <h1 className="display">Meet the future of coordinated machines.</h1>

          <div className="rotate">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrases[idx]}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? {} : { opacity: 0, y: -12 }}
                transition={{ duration: .35 }}
              >
                {phrases[idx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="lead">
            Plan missions, coordinate robot fleets, test workflows and understand every operation from one intelligent platform.
          </p>

          <div className="actions" style={{ marginTop: 26 }}>
            <Link className="btn btn-primary" to="/demo">View Live Demo <ArrowRight size={17} /></Link>
            <Link className="btn btn-secondary" to="/platform">Explore Platform</Link>
          </div>

          <p className="muted heroSupport">Built for robotics teams, system integrators and modern manufacturers.</p>
        </div>

        <div className="heroStatus">
          <div className="statusTop"><span className="pulse" /> SIMULATION ONLINE</div>
          <div className="statusRows">
            <div>3 ROBOTS ACTIVE</div>
            <div>2 MISSIONS RUNNING</div>
            <div>SYSTEM STATUS: NOMINAL</div>
            <small>Demonstration data</small>
          </div>
        </div>

        <div className="heroLabel">Conceptual robotics footage · Platform demonstration</div>
      </section>

      <section className="metricStrip">
        <div className="container">
          <div className="metricStripLabel"><span className="pulse" /> Live demonstration environment</div>
          <div className="metrics">
            {[
              ['3', 'Simulated robots connected'],
              ['12', 'Missions completed today'],
              ['97.4%', 'Simulated mission success'],
              ['1', 'Active test environment'],
            ].map(([value, label]) => (
              <div className="metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
                <div className="metricSpark"><i /><i /><i /><i /><i /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section platformIntroSection">
        <div className="container">
          <div className="platformIntroGrid">
            <Reveal>
              <div className="sectionStickyCopy">
                <div className="eyebrow">ONE CONNECTED WORKSPACE</div>
                <h2 className="h2">From mission request to operational insight.</h2>
                <p className="lead">
                  Techuvo Robotics brings planning, coordination, simulation and incident intelligence into one clear operating environment.
                </p>
                <div className="miniArchitecture">
                  <span>Human Request</span><ArrowRight size={14} />
                  <span>Structured Mission</span><ArrowRight size={14} />
                  <span>Validated Execution</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={.08}>
              <div className="platformMap">
                <div className="platformCore">
                  <div className="platformCoreIcon"><Cpu size={25} /></div>
                  <small>TECHUVO</small>
                  <strong>Robotics OS</strong>
                  <span>Simulation environment</span>
                </div>

                <svg className="platformLines" viewBox="0 0 800 620" aria-hidden="true">
                  <path d="M400 310 C250 310 255 135 145 135" />
                  <path d="M400 310 C550 310 545 135 655 135" />
                  <path d="M400 310 C250 310 255 485 145 485" />
                  <path d="M400 310 C550 310 545 485 655 485" />
                </svg>

                {platformNodes.map(({ title, copy, icon: Icon, cls }) => (
                  <motion.div
                    key={title}
                    className={`platformNode ${cls}`}
                    whileHover={reduce ? {} : { y: -6 }}
                  >
                    <div className="iconbox"><Icon size={21} /></div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <span className="nodeStatus"><CircleDot size={12} /> Development preview</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section simulationStage">
        <div className="container">
          <Reveal>
            <div className="sectionHeaderSplit">
              <div>
                <div className="eyebrow">LIVE SIMULATION</div>
                <h2 className="h2">Watch a robot mission unfold.</h2>
              </div>
              <p className="lead">
                Select a mission and observe how the system validates the request, chooses an available robot, calculates a route and reports the result.
              </p>
            </div>
          </Reveal>

          <div className="controlFrame">
            <div className="controlFrameTop">
              <div className="controlBrand">
                <span className="pulse" />
                <b>TECHUVO SIMULATION</b>
                <span>Warehouse / Environment 01</span>
              </div>
              <div className="controlTelemetry">
                <span><b>03</b> ROBOTS</span>
                <span><b>02</b> MISSIONS</span>
                <span><b>97.4%</b> SUCCESS</span>
              </div>
            </div>

            <RobotDemo compact />

            <div className="controlFrameBottom">
              <span><Radio size={14} /> Event stream active</span>
              <span>Simulation data only · No physical machinery connected</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section autonomySection">
        <div className="container">
          <Reveal>
            <div className="eyebrow">CONTROLLED AUTONOMY</div>
            <h2 className="h2">Intelligence with boundaries.</h2>
            <p className="lead">Autonomy becomes more useful when every action passes through visible rules, validation and human-defined system boundaries.</p>
          </Reveal>

          <div className="autonomyFlow" aria-label="Controlled autonomy architecture">
            {[
              ['01', 'Create Mission', 'Human or connected system submits an objective.', 'human'],
              ['02', 'Validate', 'Permissions, requirements and operational constraints are checked.', 'validate'],
              ['03', 'Assign', 'The scheduler selects an available robot.', 'assign'],
              ['04', 'Monitor', 'Telemetry and progress remain visible.', 'monitor'],
              ['05', 'Analyze', 'Results and incidents are recorded.', 'analyze'],
            ].map(([n, title, copy, cls], i) => (
              <div className="autonomyStep" key={title}>
                <motion.div
                  className={`autonomyNode ${cls}`}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: .4 }}
                  transition={{ delay: i * .08 }}
                >
                  <span>{n}</span>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </motion.div>
                {i < 4 && <div className="flowConnector"><i /></div>}
              </div>
            ))}
          </div>

          <div className="boundaryPanel">
            <ShieldCheck size={22} />
            <div>
              <b>Human Request → Structured Mission → Validation → Scheduling → Robot Interface</b>
              <span>Techuvo does not present unrestricted language-model output as direct motor control.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section solutionsPreview">
        <div className="container">
          <Reveal>
            <div className="sectionHeaderSplit">
              <div>
                <div className="eyebrow">OPERATIONAL USE CASES</div>
                <h2 className="h2">Designed around real operational problems.</h2>
              </div>
              <Link className="textLink" to="/solutions">Explore all solutions <ArrowRight size={16} /></Link>
            </div>
          </Reveal>

          <div className="solutionMosaic">
            {[
              ['Warehousing and Logistics', 'Mission routing, battery-aware assignment and fleet visibility.', WarehouseVisual],
              ['Advanced Manufacturing', 'Model inspection, transfer and restricted-zone workflows.', ManufacturingVisual],
              ['Robotics Startups', 'Customer-facing mission, telemetry and demonstration software.', StartupVisual],
              ['Systems Integrators', 'Adaptable orchestration interfaces across technical systems.', IntegratorVisual],
            ].map(([title, copy, Visual], i) => (
              <Reveal key={title} delay={i * .05}>
                <Link className={`solutionTile tile${i + 1}`} to="/solutions">
                  <Visual />
                  <div className="solutionTileCopy">
                    <span>0{i + 1}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <b>Explore solution <ArrowRight size={14} /></b>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section integrationsSection">
        <div className="container integrationGrid">
          <Reveal>
            <div>
              <div className="eyebrow">BUILT TO CONNECT</div>
              <h2 className="h2">Designed for modern robotics infrastructure.</h2>
              <p className="lead">
                Techuvo is being designed as a flexible software layer that can connect simulation environments, robot communication systems and business workflows.
              </p>
              <p className="muted integrationNote">Only supported or actively developed interfaces should be represented as integrations.</p>
            </div>
          </Reveal>

          <Reveal delay={.08}>
            <div className="integrationOrbit">
              <div className="orbitCore"><Network size={26} /><b>TECHUVO</b><span>Orchestration layer</span></div>
              {[
                ['ROS 2', 'o1'], ['REST APIs', 'o2'], ['WebSockets', 'o3'],
                ['Python', 'o4'], ['Simulation', 'o5'], ['Custom Adapters', 'o6']
              ].map(([x, cls]) => <div className={`orbitBadge ${cls}`} key={x}>{x}</div>)}
              <div className="orbitRing ring1" /><div className="orbitRing ring2" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section founderPreview">
        <div className="container founderEditorial">
          <div className="founderMedia">
            <div className="mediaPlaceholder">
              <Video size={30} />
              <span>DEVELOPMENT MEDIA</span>
              <strong>Founder / robotics build footage</strong>
              <p>Replace this area with real development photography or video as Techuvo begins working with physical hardware.</p>
              <div className="mediaTag">Development log · Coming later</div>
            </div>
          </div>

          <div className="founderCopy">
            <div className="eyebrow">BUILT IN MICHIGAN</div>
            <h2 className="h2">A new robotics company being built in public.</h2>
            <p className="lead">
              Techuvo Robotics is an emerging software initiative focused on making robot operations easier to coordinate, simulate and understand.
            </p>
            <p className="lead">
              Founded by an 18-year-old software builder, Techuvo combines rapid AI-assisted development with hands-on technical learning, transparent testing and a long-term commitment to intelligent machines.
            </p>
            <div className="developmentProof">
              <div><b>01</b><span>Build working software</span></div>
              <div><b>02</b><span>Publish technical progress</span></div>
              <div><b>03</b><span>Connect carefully scoped hardware</span></div>
            </div>
            <div className="actions">
              <Link className="btn btn-secondary" to="/company">Meet Techuvo</Link>
              <Link className="btn btn-primary" to="/company#partnership">Discuss a Partnership</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section finalRoboticsCta">
        <div className="ctaGridPattern" />
        <div className="container finalCtaInner">
          <div className="eyebrow">EARLY TECHNICAL PARTNERSHIPS</div>
          <h2 className="h2">Building the next generation of robotic systems?</h2>
          <p className="lead">
            Partner with Techuvo on dashboards, simulation environments, workflow tools, telemetry systems and early robot integrations.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/company#partnership">Request a Partnership</Link>
            <Link className="btn btn-secondary" to="/demo">Open Live Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function WarehouseVisual() {
  return <div className="tileVisual warehouseMini">
    <div className="miniZone z1">Receiving</div><div className="miniZone z2">Storage</div><div className="miniZone z3">Packing</div>
    <div className="miniRoute" /><div className="miniRobot r1"><span>01</span></div><div className="miniRobot r2"><span>02</span></div>
  </div>;
}
function ManufacturingVisual() {
  return <div className="tileVisual processMini">
    <div className="processNode"><span>01</span> Detect</div><ArrowRight size={18}/><div className="processNode"><span>02</span> Inspect</div><ArrowRight size={18}/><div className="processNode orange"><span>03</span> Transfer</div>
  </div>;
}
function StartupVisual() {
  return <div className="tileVisual dashboardMini">
    <div className="dashTop"><span>ROBOT 01</span><b>AVAILABLE</b></div>
    <div className="dashMetric"><strong>87%</strong><span>Battery</span></div>
    <div className="dashMetric"><strong>1.4 m/s</strong><span>Velocity</span></div>
    <div className="dashBars"><i/><i/><i/><i/><i/></div>
  </div>;
}
function IntegratorVisual() {
  return <div className="tileVisual architectureMini">
    <div>Robot API</div><GitBranch size={20}/><div className="archCore">Techuvo</div><GitBranch size={20}/><div>Business System</div>
  </div>;
}