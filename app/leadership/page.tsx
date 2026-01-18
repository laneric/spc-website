export default function Leadership() {
  return (
    <>
      <section className="container-inline pt-24 pb-12 max-w-6xl mx-auto">
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-6 tracking-tighter-title">Leadership</h1>
        
        <div className="">
          <p className="font-helvetica text-zinc-700 text-lg leading-relaxed">
            <strong className="font-medium">Schedule a coffee chat</strong> with our executive board members to learn about their experiences, get advice, or discuss opportunities with SPC. Each profile card below includes detailed information and a Calendly link at the bottom to book a time.
          </p>
        </div>
      </section>

      <div className="container-inline pb-20">
        <div style={{ height: 'calc(100vh - 500px)', width: '100%', minHeight: '600px' }}>
          <iframe 
            src="https://ripple-increase-bbd.notion.site/ebd//2eaddfe3637f804b91e0fcd7745aee3f?v=2eaddfe3637f80ee9e91000cdeda645f" 
            width="100%" 
            height="100%"
            frameBorder="0" 
            allowFullScreen
            style={{ border: 'none', display: 'block' }}
          />
        </div>
      </div>
    </>
  );
}