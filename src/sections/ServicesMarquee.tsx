const SERVICES = [
  'HOME FINDING',
  'OFFICE SETUP',
  'SCHOOL SEARCH',
  'SHIPPING',
  'COMPANY FORMATION',
  'RELOCATION PACKAGES',
];

function MarqueeTrack() {
  return (
    <div className="marquee-track" aria-hidden="true">
      {SERVICES.map((service, i) => (
        <span key={i} className="marquee-item">
          <span
            className="font-display"
            style={{
              fontSize: 'clamp(24px, 3vw, 40px)',
              fontWeight: 400,
              color: 'rgba(247, 245, 243, 0.7)',
              whiteSpace: 'nowrap',
            }}
          >
            {service}
          </span>
          <span
            className="mx-8"
            style={{
              fontSize: '8px',
              color: 'rgba(183, 183, 164, 0.5)',
              verticalAlign: 'middle',
            }}
          >
            ◆
          </span>
        </span>
      ))}
    </div>
  );
}

export default function ServicesMarquee() {
  return (
    <section
      data-theme="dark"
      className="bg-navy overflow-hidden"
      style={{
        paddingTop: '48px',
        paddingBottom: '48px',
        borderTop: '1px solid var(--border-dark)',
        borderBottom: '1px solid var(--border-dark)',
      }}
    >
      <div className="marquee">
        <div className="marquee-content">
          {/* Two identical tracks side by side for seamless infinite loop */}
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
