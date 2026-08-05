
    function pick(name){ if(window[name]) return window[name];
      for(const k of Object.keys(window)){ try { const v=window[k]; if(v&&typeof v==='object'&&typeof v[name]==='function') return v[name]; } catch(e){} }
      return (p)=>React.createElement('span',{style:{color:'red'}},'missing '+name); }
    const Button = pick('Button');
    const Badge = pick('Badge');
    const SectionEyebrow = pick('SectionEyebrow');
    const Card = pick('Card');
    const ScheduleItem = pick('ScheduleItem');
    const { useState, useEffect } = React;

    const ACORN = 'assets/icon-acorn.png';
    const ACORN_CREAM = 'assets/icon-acorn-cream.png';
    const LEAF = 'assets/icon-oak-leaf.png';
    const LEAF_CREAM = 'assets/icon-oak-leaf-cream.png';
    const LOGO = 'assets/logo-primary.png';
    const SEAL = 'assets/seal-white.png';
    const MASCOT_IMG = 'assets/mascot.png';
    const RATBOYS_IMG = 'assets/ratboys.jpeg';
    const PH = {
      crowd: 'assets/photo-crowd.jpg',
      family: 'assets/photo-family.jpg',
      dogKid: 'assets/photo-dog-kid.jpg',
      market: 'assets/photo-market.jpg',
      stage: 'assets/photo-stage.jpg',
      dogs: 'assets/photo-dogs.jpg',
      pumpkins: 'assets/photo-pumpkins.jpg',
      friends: 'assets/photo-friends.jpg',
      food: 'assets/photo-food.jpg',
      foodtruck: 'assets/photo-foodtruck.jpg',
    };

    // Real calls-to-action
    const LINK_TICKETS = 'https://www.simpletix.com/e/hillcrest-harvestfest-2026-tickets-216775';
    const LINK_VENDOR = 'https://www.simpletix.com/e/hillcrest-harvestfest-2026-tickets-216775';
    const LINK_VOLUNTEER = 'https://signup.com/go/PGkDGrr';
    const LINK_RATBOYS = 'https://www.ratboysband.com/';
    const LINK_DOGSHOW = 'https://www.eventbrite.com/e/the-dog-show-harvestfest-in-hillcrest-2026-sponsored-by-hounds-lounge-tickets-1996821311295';

    const MAXW = 1180;

    function Nav() {
      const links = [['About', '#About'], ['Music', '#Music'], ['Eat & Drink', '#Eat'], ['Vendors', '#Vendors'], ['Volunteer', '#Volunteer']];
      return (
        <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(246,241,232,0.86)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-hair)' }}>
          <div style={{ maxWidth: MAXW, margin: '0 auto', padding: '14px var(--gutter)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
            <img src={LOGO} alt="Hillcrest HarvestFest" style={{ height: 42 }} />
            <nav style={{ display: 'flex', gap: 'var(--space-6)', marginLeft: 'auto' }}>
              {links.map(([l, href]) => (
                <a key={l} href={href} style={{ textDecoration: 'none', fontWeight: 600, fontSize: 'var(--type-sm)', color: 'var(--slate-700)' }}>{l}</a>
              ))}
            </nav>
            <Button size="sm" as="a" href={LINK_TICKETS} target="_blank" rel="noopener" iconLeft={<i data-lucide="ticket" className="ico" style={{ width: 16, height: 16 }}></i>}>Get VIP tickets</Button>
          </div>
        </header>
      );
    }

    function Hero() {
      // scattered marks
      const marks = [
        { src: ACORN_CREAM, top: '14%', left: '7%', size: 46, rot: -18, op: .5 },
        { src: LEAF_CREAM, top: '24%', left: '88%', size: 60, rot: 16, op: .45 },
        { src: ACORN_CREAM, top: '68%', left: '14%', size: 38, rot: 22, op: .4 },
        { src: LEAF_CREAM, top: '74%', left: '80%', size: 50, rot: -10, op: .5 },
        { src: ACORN_CREAM, top: '46%', left: '94%', size: 34, rot: 8, op: .35 },
      ];
      return (
        <section style={{ position: 'relative', background: 'var(--slate-900)', color: 'var(--cream)', overflow: 'hidden' }}>
          <img src={PH.crowd} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.42 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(50,46,41,0.55), rgba(50,46,41,0.78))' }}></div>
          {marks.map((m, i) => (
            <img key={i} src={m.src} alt="" aria-hidden="true" style={{ position: 'absolute', top: m.top, left: m.left, width: m.size, opacity: m.op, transform: `translate(-50%,-50%) rotate(${m.rot}deg)` }} />
          ))}
          <div style={{ position: 'relative', maxWidth: MAXW, margin: '0 auto', padding: 'clamp(56px,9vw,110px) var(--gutter)', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 'var(--type-sm)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--pumpkin-300)' }}>
              <span>Sat · Oct 17 · 11am–7pm</span>
              <span style={{ opacity: .5 }}>•</span>
              <span>Kavanaugh Blvd</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(3.4rem,11vw,8rem)', lineHeight: .98, margin: '18px 0 0', color: 'var(--cream)', fontWeight: 400 }}>
              The best day<br/><span style={{ color: 'var(--pumpkin)' }}>in Hillcrest</span>
            </h1>
            <p style={{ maxWidth: 620, margin: '22px auto 0', fontSize: 'var(--type-lg)', lineHeight: 1.6, color: 'rgba(246,241,232,0.82)' }}>
              A free day on the boulevard, capped by <strong style={{ color: 'var(--cream)' }}>Ratboys</strong>
              {' '}headlining the Lost Forty Stage at 6pm. The legendary dog show, a kids
              zone, 12 food trucks, and 6 SIP stations of local brews.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginTop: 'var(--space-7)', flexWrap: 'wrap' }}>
              <Button variant="primary" as="a" href={LINK_TICKETS} target="_blank" rel="noopener">Buy VIP tickets</Button>
              <Button variant="secondary" as="a" href="#Music" style={{ color: 'var(--cream)', borderColor: 'rgba(246,241,232,0.5)' }}>See the lineup</Button>
            </div>
          </div>
        </section>
      );
    }

    function Stats() {
      const stats = [['12', 'food trucks'], ['6', 'SIP stations'], ['Free', 'to attend'], ['6pm', 'Ratboys headline']];
      return (
        <section style={{ background: 'var(--pumpkin)', color: 'var(--cream)' }}>
          <div style={{ maxWidth: MAXW, margin: '0 auto', padding: '28px var(--gutter)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-5)' }}>
            {stats.map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(2.2rem,4vw,3.2rem)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 'var(--type-sm)', fontWeight: 600, letterSpacing: '.04em', opacity: .92, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>
      );
    }

    function Section({ id, eyebrow, title, children, alt }) {
      return (
        <section id={id} style={{ background: alt ? 'var(--cream-deep)' : 'var(--cream)' }}>
          <div style={{ maxWidth: MAXW, margin: '0 auto', padding: 'var(--space-9) var(--gutter)' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                <SectionEyebrow mark={ACORN}>{eyebrow}</SectionEyebrow>
              </div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'clamp(1.8rem,3.4vw,2.6rem)', color: 'var(--text-strong)', margin: 0, letterSpacing: '-0.01em' }}>{title}</h2>
            </div>
            {children}
          </div>
        </section>
      );
    }

    function Happening() {
      const items = [
        [PH.stage, 'The Lost Forty Stage', 'Live music all day, building to Ratboys headlining at 6pm.'],
        [PH.dogs, 'The legendary dog show', 'Presented by Hounds Lounge. Best costume, waggiest tail, and the coveted Best in Hillcrest sash. 3–5pm.'],
        [PH.pumpkins, 'HarvestFest Kids Zone', 'Games, crafts, and hands-on fun from noon to 4pm.'],
        [PH.friends, 'VIP Experience', 'All-you-can-drink & all-you-can-eat BBQ, plus the Razorback watch party.'],
      ];
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 'var(--space-5)' }}>
          {items.map(([img, t, d]) => (
            <Card hover padded={false} key={t}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={img} alt={t} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: 'var(--space-5)' }}>
                <h3 style={{ margin: '0 0 6px', fontSize: 'var(--type-h3)', fontWeight: 700, color: 'var(--text-strong)' }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 'var(--type-body)', lineHeight: 1.55, color: 'var(--text-muted)' }}>{d}</p>
              </div>
            </Card>
          ))}
        </div>
      );
    }

    function Lineup() {
      const rows = [
        ['8:00 AM', 'Vendor Load In', '', false, ACORN],
        ['11:00 AM', 'Gates Open', 'Kavanaugh Blvd', false, ACORN],
        ['12 – 4 PM', 'Kids Zone Activities', 'HarvestFest Kids Zone', false, LEAF],
        ['2:00 PM', 'Music Act — TBD', 'Lost Forty Stage', false, ACORN],
        ['3 – 5 PM', 'HarvestFest Dog Show', 'Presented by Hounds Lounge', false, LEAF],
        ['4:00 PM', 'Music Act — TBD', 'Lost Forty Stage', false, ACORN],
        ['Time TBD', 'Watch the Hogs', 'VIP Exclusive · Razorback watch party', false, LEAF],
        ['6:00 PM', 'Ratboys — Headliner', 'Lost Forty Stage', true, ACORN],
        ['7:00 PM', 'Festival Closure', '', false, ACORN],
      ];
      return (
        <Card padded={false} style={{ maxWidth: 760, margin: '0 auto' }}>
          {rows.map((r, i) => (
            <ScheduleItem key={i} time={r[0]} title={r[1]} place={r[2]} highlight={r[3]} mark={r[4]} style={{ borderBottom: '1px solid var(--border-hair)' }} />
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4) var(--space-5)', background: 'var(--cream-deep)' }}>
            <div style={{ minWidth: 92, fontWeight: 700, fontSize: 'var(--type-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--slate-500)' }}>All day</div>
            <img src={ACORN} alt="" style={{ height: 24, flex: 'none' }} />
            <div style={{ fontWeight: 600, fontSize: 'var(--type-body)', color: 'var(--text-strong)' }}>Vendors, SIP Stations &amp; Food Trucks</div>
          </div>
        </Card>
      );
    }

    function About() {
      return (
        <Section id="About" eyebrow="Our story · Est. 1994" title="The best day in Hillcrest">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 'var(--type-body)', lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 var(--space-4)' }}>
              What started in 1994 as a modest neighborhood block party has grown into
              one of Central Arkansas&rsquo;s most anticipated annual festivals. Hillcrest
              HarvestFest celebrates the unique spirit of the Hillcrest neighborhood —
              its people, its businesses, and its enduring charm.
            </p>
            <p style={{ fontSize: 'var(--type-body)', lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>
              Three decades on, it&rsquo;s a vibrant day-long street festival drawing
              thousands from across Little Rock and beyond — live music, local vendors,
              food trucks, games, and beloved traditions. Part homecoming, part
              celebration. A place where neighbors connect and new memories are made.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-4)', marginTop: 'var(--space-7)' }}>
            {[PH.family, PH.dogKid, PH.food].map((src, i) => (
              <div key={i} style={{ aspectRatio: i === 1 ? '1/1' : '4/3', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </Section>
      );
    }

    function MusicLineup() {
      return (
        <section id="Music" style={{ background: 'var(--slate-900)', color: 'var(--cream)' }}>
          <div style={{ maxWidth: MAXW, margin: '0 auto', padding: 'var(--space-9) var(--gutter)' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                <SectionEyebrow mark={ACORN_CREAM} color="var(--pumpkin-300)">Music lineup</SectionEyebrow>
              </div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'clamp(1.8rem,3.4vw,2.6rem)', color: 'var(--cream)', margin: 0, letterSpacing: '-0.01em' }}>Live on the Lost Forty Stage</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--space-7)', alignItems: 'center' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/3' }}>
                <img src={RATBOYS_IMG} alt="Ratboys" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div>
                <Badge tone="pumpkin">Headliner · 6pm</Badge>
                <h3 style={{ fontFamily: 'var(--font-script)', fontWeight: 400, fontSize: 'clamp(3rem,6vw,4.6rem)', lineHeight: .95, margin: '14px 0 10px', color: 'var(--cream)' }}>Ratboys</h3>
                <p style={{ fontSize: 'var(--type-body)', lineHeight: 1.6, color: 'rgba(246,241,232,0.82)', margin: '0 0 var(--space-5)', maxWidth: 460 }}>
                  Chicago&rsquo;s own close out HarvestFest with a sundown headline set.
                  Openers to be announced — check back soon.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button variant="primary" as="a" href={LINK_RATBOYS} target="_blank" rel="noopener" iconRight={<i data-lucide="arrow-up-right" className="ico"></i>}>About Ratboys</Button>
                  <span style={{ fontSize: 'var(--type-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wide)', color: 'rgba(246,241,232,0.6)' }}>+ openers TBD</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    function Vendors() {
      return (
        <Section id="Vendors" eyebrow="Vendors" title="Set up shop with us">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <Card style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center', flexWrap: 'wrap' }}>
              <img src="assets/seal-color.png" alt="" style={{ width: 110, flex: 'none' }} />
              <div style={{ flex: 1, minWidth: 240 }}>
                <h3 style={{ margin: '0 0 6px', fontSize: 'var(--type-h2)', fontWeight: 700, color: 'var(--text-strong)' }}>Booth registration is open</h3>
                <p style={{ margin: '0 0 var(--space-5)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Makers, growers, and neighborhood favorites — claim your spot on the
                  boulevard. <strong style={{ color: 'var(--text-strong)' }}>Vendor list coming soon, updated weekly.</strong>
                </p>
                <Button variant="primary" as="a" href={LINK_VENDOR} target="_blank" rel="noopener" iconRight={<i data-lucide="arrow-up-right" className="ico"></i>}>Register as a vendor</Button>
              </div>
            </Card>
          </div>
        </Section>
      );
    }

    function Volunteer() {
      return (
        <section id="Volunteer" style={{ background: 'var(--cream-deep)' }}>
          <div style={{ maxWidth: MAXW, margin: '0 auto', padding: 'var(--space-9) var(--gutter)', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'var(--space-7)', alignItems: 'center' }}>
            <div style={{ position: 'relative', background: 'var(--slate-900)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'center', padding: 'var(--space-6) var(--space-5) 0', boxShadow: 'var(--shadow-lg)' }}>
              <img src={LEAF_CREAM} alt="" aria-hidden="true" style={{ position: 'absolute', top: 16, left: 16, width: 58, opacity: 0.16, transform: 'rotate(-16deg)' }} />
              <img src={ACORN_CREAM} alt="" aria-hidden="true" style={{ position: 'absolute', top: 22, right: 20, width: 46, opacity: 0.16, transform: 'rotate(14deg)' }} />
              <div style={{ position: 'relative', paddingTop: 'var(--space-6)', width: '100%' }}>
                <div style={{ fontWeight: 700, fontSize: 'var(--type-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--pumpkin-300)' }}>HarvestFest wants</div>
                <div style={{ fontFamily: 'var(--font-script)', fontWeight: 400, fontSize: 'clamp(3.6rem,7.5vw,5.6rem)', lineHeight: 0.88, color: 'var(--pumpkin)', margin: '2px 0 6px' }}>YOU</div>
                <div style={{ fontWeight: 700, fontSize: 'var(--type-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream)' }}>Easy 3-hour shifts</div>
              </div>
              <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginTop: 'var(--space-3)' }}>
                <img src={MASCOT_IMG} alt="HarvestFest mascot pointing at you" style={{ width: '104%', maxWidth: 420, height: 'auto', display: 'block', filter: 'drop-shadow(0 14px 26px rgba(0,0,0,0.38))' }} />
              </div>
            </div>
            <div>
              <SectionEyebrow mark={ACORN}>Volunteer</SectionEyebrow>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'clamp(1.8rem,3.4vw,2.6rem)', color: 'var(--text-strong)', margin: '14px 0 16px', letterSpacing: '-0.01em', lineHeight: 1.15 }}>A place is only as good as its people</h2>
              <p style={{ fontSize: 'var(--type-body)', lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 var(--space-4)', maxWidth: 560 }}>
                We&rsquo;re grateful that Little Rock loves to host a good time — and HarvestFest
                is the best place to do it. This whole rodeo isn&rsquo;t possible without <strong style={{ color: 'var(--text-strong)' }}>YOU</strong>.
              </p>
              <p style={{ fontSize: 'var(--type-body)', lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 var(--space-6)', maxWidth: 560 }}>
                We need your help making the big day happen. Sign up to put in your time —
                our shifts are easy three-hour segments.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
                <Button variant="primary" as="a" href={LINK_VOLUNTEER} target="_blank" rel="noopener" iconRight={<i data-lucide="arrow-up-right" className="ico"></i>}>Sign up to volunteer</Button>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--type-sm)', fontWeight: 600, color: 'var(--text-muted)' }}>
                  <i data-lucide="clock" style={{ width: 18, height: 18, strokeWidth: 2 }}></i>
                  3-hour shifts · Oct 17
                </span>
              </div>
            </div>
          </div>
        </section>
      );
    }

    function GetInvolved() {
      const ctas = [
        ['Buy VIP tickets', 'All-you-can-drink & all-you-can-eat BBQ + the Hogs watch party', LINK_TICKETS, 'ticket'],
        ['Become a vendor', 'Claim a booth — list updated weekly', LINK_VENDOR, 'store'],
        ['Volunteer', 'Lend a hand and help run the day', LINK_VOLUNTEER, 'hand-heart'],
        ['Enter the dog show', 'Sign your pup up to walk — presented by Hounds Lounge', LINK_DOGSHOW, 'dog'],
      ];
      return (
        <section style={{ background: 'var(--slate-900)', color: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
          <img src={LEAF_CREAM} alt="" aria-hidden="true" style={{ position: 'absolute', top: -30, right: 40, width: 150, opacity: .12, transform: 'rotate(16deg)' }} />
          <div style={{ maxWidth: MAXW, margin: '0 auto', padding: 'var(--space-9) var(--gutter)', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                <SectionEyebrow mark={ACORN_CREAM} color="var(--pumpkin-300)">Be part of it</SectionEyebrow>
              </div>
              <h2 style={{ fontFamily: 'var(--font-script)', fontWeight: 400, fontSize: 'clamp(2.4rem,5vw,3.6rem)', color: 'var(--cream)', margin: 0 }}>Join the best day in Hillcrest</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 'var(--space-4)' }}>
              {ctas.map(([t, d, href, ic]) => {
                const external = /^https?:/.test(href);
                const Tag = external ? 'a' : 'div';
                return (
                <Tag key={t} href={external ? href : undefined} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined} style={{ textDecoration: 'none', display: 'flex', gap: 'var(--space-4)', alignItems: 'center', padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)', background: 'rgba(246,241,232,0.06)', border: '1px solid rgba(246,241,232,0.16)', cursor: external ? 'pointer' : 'default', opacity: external ? 1 : 0.72 }}>
                  <div style={{ flex: 'none', width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'rgba(246,241,232,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cream)' }}>
                    <i data-lucide={ic} style={{ width: 24, height: 24, strokeWidth: 2 }}></i>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 'var(--type-lg)', color: 'var(--cream)' }}>{t}</div>
                    <div style={{ fontSize: 'var(--type-sm)', color: 'rgba(246,241,232,0.6)', marginTop: 2 }}>{d}</div>
                  </div>
                  {external
                    ? <i data-lucide="arrow-up-right" style={{ width: 20, height: 20, strokeWidth: 2, color: 'rgba(246,241,232,0.6)' }}></i>
                    : <span style={{ fontSize: 'var(--type-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'rgba(246,241,232,0.5)', whiteSpace: 'nowrap' }}>Soon</span>}
                </Tag>
              ); })}
            </div>
          </div>
        </section>
      );
    }

    function SipSnack() {
      const brews = ['Lost Forty', 'Flyway', 'Stones Throw', 'Cutwater'];
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
            <Card padded={false} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={PH.food} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: 'var(--space-5)' }}>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(2.2rem,3.4vw,3rem)', color: 'var(--pumpkin)', lineHeight: 1 }}>6 SIP Stations</div>
              <p style={{ fontSize: 'var(--type-body)', lineHeight: 1.55, color: 'var(--text-muted)', margin: '12px 0 18px' }}>
                Local brews and ice-cold water all over the boulevard — plus Arkansas’s
                favorite canned cocktail.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                {brews.map(b => <Badge key={b} tone="cream">{b}</Badge>)}
                <Badge tone="outline">+ water</Badge>
              </div>
              </div>
            </Card>
            <Card padded={false} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={PH.foodtruck} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: 'var(--space-5)' }}>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(2.2rem,3.4vw,3rem)', color: 'var(--pumpkin)', lineHeight: 1 }}>12 Food Trucks</div>
              <p style={{ fontSize: 'var(--type-body)', lineHeight: 1.55, color: 'var(--text-muted)', margin: '12px 0 18px' }}>
                A full midway of the best mobile kitchens in Central Arkansas.
                <strong style={{ color: 'var(--text-strong)' }}> Full food truck lineup coming soon.</strong>
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <img src={ACORN} alt="" style={{ height: 30 }} />
                <span style={{ fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', fontSize: 'var(--type-xs)', color: 'var(--slate-500)' }}>11am – 7pm · all day</span>
              </div>
              </div>
            </Card>
        </div>
      );
    }

    function Footer() {
      const cols = [
        ['The Festival', [['About', '#About'], ['Signature experiences', '#Traditions'], ['Day-of schedule', '#Schedule'], ['Eat & drink', '#Eat']]],
        ['Get Involved', [['Buy VIP tickets', LINK_TICKETS], ['Become a vendor', LINK_VENDOR], ['Volunteer', LINK_VOLUNTEER], ['Enter the dog show', LINK_DOGSHOW]]],
        ['Music', [['Ratboys', LINK_RATBOYS], ['Lost Forty Stage', '#Music']]],
      ];
      const link = { color: 'rgba(246,241,232,0.68)', textDecoration: 'none', fontSize: 'var(--type-sm)', lineHeight: 2 };
      const head = { fontWeight: 700, fontSize: 'var(--type-xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--pumpkin-300)', marginBottom: 'var(--space-3)' };
      return (
        <footer style={{ background: 'var(--slate-900)', color: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
          <img src={ACORN_CREAM} alt="" aria-hidden="true" style={{ position: 'absolute', top: 40, right: '6%', width: 120, opacity: 0.07, transform: 'rotate(-14deg)' }} />
          <img src={LEAF_CREAM} alt="" aria-hidden="true" style={{ position: 'absolute', bottom: 30, left: '4%', width: 140, opacity: 0.07, transform: 'rotate(18deg)' }} />
          <div style={{ position: 'relative', maxWidth: MAXW, margin: '0 auto', padding: 'var(--space-9) var(--gutter) var(--space-6)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 'var(--space-7)' }}>
              <div>
                <img src={SEAL} alt="Hillcrest HarvestFest" style={{ width: 118, marginBottom: 'var(--space-5)' }} />
                <div style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(1.9rem,3vw,2.5rem)', color: 'var(--pumpkin)', lineHeight: 1, marginBottom: 'var(--space-3)' }}>The best day in Hillcrest</div>
                <div style={{ fontWeight: 700, fontSize: 'var(--type-sm)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--cream)', lineHeight: 1.9 }}>
                  Sat, October 17, 2026<br />11am – 7pm · Free
                </div>
                <div style={{ fontSize: 'var(--type-sm)', color: 'rgba(246,241,232,0.6)', marginTop: 'var(--space-2)', lineHeight: 1.7 }}>
                  Kavanaugh Blvd<br />Little Rock, Arkansas
                </div>
              </div>
              {cols.map(([title, items]) => (
                <div key={title}>
                  <div style={head}>{title}</div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {items.map(([label, href]) => {
                      const ext = /^https?:/.test(href);
                      return <a key={label} href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined} style={link}>{label}</a>;
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-8)', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', background: 'rgba(246,241,232,0.06)', border: '1px solid rgba(246,241,232,0.14)', display: 'flex', gap: 'var(--space-5)', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 'var(--type-h3)', color: 'var(--cream)' }}>Don&rsquo;t miss the 2026 festival</div>
                <div style={{ fontSize: 'var(--type-sm)', color: 'rgba(246,241,232,0.65)', marginTop: 4 }}>VIP includes all-you-can-drink &amp; all-you-can-eat BBQ, plus the Razorback watch party.</div>
              </div>
              <Button variant="primary" as="a" href={LINK_TICKETS} target="_blank" rel="noopener" iconRight={<i data-lucide="arrow-up-right" className="ico"></i>}>Buy VIP tickets</Button>
            </div>
            <div style={{ marginTop: 'var(--space-7)', paddingTop: 'var(--space-5)', borderTop: '1px solid rgba(246,241,232,0.16)', display: 'flex', gap: 'var(--space-5)', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ fontSize: 'var(--type-sm)', color: 'rgba(246,241,232,0.5)' }}>
                © 1994–2026 Hillcrest HarvestFest · A neighborhood celebration.
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'center' }}>
                {[['Instagram', 'instagram'], ['Facebook', 'facebook'], ['Email', 'mail']].map(([l, ic]) => (
                  <a key={l} href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'rgba(246,241,232,0.68)', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--type-sm)' }}>
                    <i data-lucide={ic} style={{ width: 17, height: 17, strokeWidth: 2 }}></i>{l}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      );
    }


    function App() {
      useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
      return (
        <div>
          <Nav />
          <Hero />
          <Stats />
          <About />
          <GetInvolved />
          <Section id="Traditions" eyebrow="What's happening" title="A whole day of Hillcrest" alt>
            <Happening />
          </Section>
          <MusicLineup />
          <Section id="Schedule" eyebrow="Day-of schedule" title="Saturday, October 17">
            <Lineup />
          </Section>
          <Section id="Eat" eyebrow="Eat & drink" title="Sip & snack the boulevard" alt>
            <SipSnack />
          </Section>
          <Vendors />
          <Volunteer />
          <Footer />
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  