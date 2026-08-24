import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Footer from './Footer';

const links=[['Platform','/platform'],['Live Demo','/demo'],['Solutions','/solutions'],['Company','/company']];
export default function AppShell({children}){
 const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false); const location=useLocation();
 useEffect(()=>{const on=()=>setScrolled(window.scrollY>20);on();window.addEventListener('scroll',on);return()=>window.removeEventListener('scroll',on)},[]);
 useEffect(()=>{setOpen(false);window.scrollTo({top:0,behavior:'smooth'})},[location.pathname]);
 return <>
  <header className={`nav ${scrolled?'scrolled':''}`}><div className="container navinner">
   <Link to="/" className="logo" aria-label="Techuvo Robotics home"><span className="mark" aria-hidden="true"/><span><b>TECHUVO</b> <span className="muted">/ ROBOTICS</span></span></Link>
   <nav className="navlinks" aria-label="Primary navigation">{links.map(([label,to])=><NavLink className={({isActive})=>`navlink ${isActive?'active':''}`} to={to} key={to}>{label}</NavLink>)}<Link className="btn btn-primary" to="/company#partnership">Request Partnership <ArrowRight size={16}/></Link></nav>
   <button className="menuBtn" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={20}/>:<Menu size={20}/>}</button>
  </div></header>
  {open&&<div className="mobilePanel" role="dialog" aria-label="Mobile navigation">{links.map(([label,to])=><NavLink to={to} key={to}>{label}</NavLink>)}<Link to="/company#partnership" className="btn btn-primary">Request Partnership</Link></div>}
  <main>{children}</main><Footer/>
 </>
}
