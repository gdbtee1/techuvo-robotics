import { useEffect } from 'react';
export default function SEO({title,description}){useEffect(()=>{document.title=title; const m=document.querySelector('meta[name="description"]'); if(m)m.setAttribute('content',description);},[title,description]);return null}
