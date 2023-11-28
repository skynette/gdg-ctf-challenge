
const index = () => {
  return (
    <section className="padding-inline section">
			<h2 className="text-left">GDG Benin Past Events</h2>
      <div className="grid grid-cols-1 gap-8 mt-10 smmd:grid-cols-2 mdlg:grid-cols-3 xl:grid-cols-4">
        {(new Array(10)).fill(0).map((_, i) => (<div key={i} className="rounded overflow-hidden"><img src="./assets/history.png" alt="History picture" className="w-full h-full object-cover object-center"/></div>))}
      </div>
    </section>
  )
}

export default index