/* Fallback runtime bundle so previews render before/independent of the DS compiler.
   The design-system compiler regenerates this automatically from components/**.
   Components are exposed under window.HarvestFest AND window (so any consumer's
   namespace-scanning resolver finds them). */
(function(){
  if (typeof React === 'undefined') return;
  const e = React.createElement;

  function Button({children,variant='primary',size='md',as='button',iconLeft=null,iconRight=null,disabled=false,style={},...rest}){
    const s = size==='sm'?{height:'var(--control-h-sm)',padding:'0 18px',font:'var(--type-sm)'}:{height:'var(--control-h)',padding:'0 26px',font:'var(--type-body)'};
    const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'8px',height:s.height,padding:s.padding,fontFamily:'var(--font-sans)',fontWeight:'var(--w-bold)',fontSize:s.font,borderRadius:'var(--radius-pill)',border:'2px solid transparent',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.5:1,whiteSpace:'nowrap',textDecoration:'none',boxSizing:'border-box',lineHeight:1,transition:'transform var(--dur-fast) var(--ease-out)'};
    const v={primary:{background:'var(--pumpkin)',color:'var(--cream)',boxShadow:'var(--shadow-brand)'},secondary:{background:'transparent',color:'var(--slate-700)',borderColor:'var(--slate-700)'},ghost:{background:'transparent',color:'var(--pumpkin)'}}[variant]||{};
    return e(as,{style:{...base,...v,...style},disabled:as==='button'?disabled:undefined,...rest},iconLeft,children,iconRight);
  }

  function Badge({children,tone='pumpkin',style={},...rest}){
    const t={pumpkin:{background:'var(--pumpkin)',color:'var(--cream)'},slate:{background:'var(--slate-700)',color:'var(--cream)'},cream:{background:'var(--pumpkin-100)',color:'var(--pumpkin-700)'},outline:{background:'transparent',color:'var(--slate-700)',boxShadow:'inset 0 0 0 1.5px var(--slate-700)'}}[tone]||{};
    return e('span',{style:{display:'inline-flex',alignItems:'center',gap:'6px',padding:'5px 12px',fontFamily:'var(--font-sans)',fontWeight:'var(--w-bold)',fontSize:'var(--type-xs)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',borderRadius:'var(--radius-pill)',lineHeight:1,...t,...style},...rest},children);
  }

  function SectionEyebrow({children,mark=null,color='var(--pumpkin-700)',style={},...rest}){
    return e('div',{style:{display:'inline-flex',alignItems:'center',gap:'10px',fontFamily:'var(--font-sans)',fontWeight:'var(--w-bold)',fontSize:'var(--type-xs)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color,lineHeight:1,...style},...rest}, mark?e('img',{src:mark,alt:'','aria-hidden':'true',style:{height:'20px',width:'auto',display:'block'}}):null, e('span',null,children));
  }

  function Card({children,hover=false,padded=true,style={},...rest}){
    const [lift,setLift]=React.useState(false);
    return e('div',{onMouseEnter:()=>hover&&setLift(true),onMouseLeave:()=>hover&&setLift(false),style:{background:'var(--surface-card)',borderRadius:'var(--radius-lg)',boxShadow:lift?'var(--shadow-lg)':'var(--shadow-md)',padding:padded?'var(--space-6)':0,transform:lift?'translateY(-2px)':'translateY(0)',transition:'transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out)',overflow:'hidden',boxSizing:'border-box',...style},...rest},children);
  }

  function ScheduleItem({time,title,place,mark='assets/icon-acorn.png',highlight=false,style={},...rest}){
    return e('div',{style:{display:'flex',alignItems:'center',gap:'var(--space-4)',padding:'var(--space-4) var(--space-5)',background:highlight?'var(--pumpkin-50)':'transparent',borderRadius:'var(--radius-md)',borderBottom:'1px solid var(--border-hair)',fontFamily:'var(--font-sans)',...style},...rest},
      e('div',{style:{minWidth:'92px',fontWeight:'var(--w-bold)',fontSize:'var(--type-sm)',letterSpacing:'var(--tracking-wide)',color:'var(--pumpkin-700)',fontVariantNumeric:'tabular-nums'}},time),
      mark?e('img',{src:mark,alt:'','aria-hidden':'true',style:{height:'24px',width:'auto',flex:'none'}}):null,
      e('div',{style:{flex:1}}, e('div',{style:{fontWeight:'var(--w-semibold)',fontSize:'var(--type-body)',color:'var(--text-strong)'}},title), place?e('div',{style:{fontSize:'var(--type-sm)',color:'var(--text-muted)',marginTop:'2px'}},place):null));
  }

  const api = { Button, Badge, SectionEyebrow, Card, ScheduleItem };
  window.HarvestFest = api;
  Object.keys(api).forEach(function(k){ if(!window[k]) window[k] = api[k]; });
})();
