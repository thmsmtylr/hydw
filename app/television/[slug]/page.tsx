export default async function Page() {
  return (
    <main className="largepadding wrapper overflow-hidden bg-hydw-yellow text-hydw-charcoal">
      <section className="page-grid">
        <div className="midspace col-span-11 text-left md:col-span-9 xl:col-span-8">
          <h1 className="heading2 mt-7 uppercase text-hydw-blue lg:mt-0">
            title
          </h1>
          <p className="body mt-3">Distributor Year: Eg ABC, 2023</p>
        </div>
        <div className="smallspace col-span-12 aspect-video bg-test-grey">
          {/* vimeo link to go in here */}
        </div>
      </section>
      <section className="smallspace page-grid">
        <p className="body col-span-12 md:col-span-10 lg:col-span-6">
          Description here.
        </p>
        <div className="col-span-12 md:col-span-10 lg:col-span-4 lg:col-start-9">
          <p className="body mt-7 lg:mt-0">
            Watch on <a href="">Platform</a>
          </p>
          {/* dev note: should this be some kind of repeater that they can add any credit line for? */}
          <div className="mt-7">
            <h6 className="smallbody uppercase">Title</h6>
            <p className="body">Credit</p>
          </div>
          <div className="mt-7">
            <h6 className="smallbody uppercase">Title</h6>
            <p className="body">
              <a href="">Credit</a>
            </p>
          </div>
        </div>
      </section>
      <section className="largespace">
        <h4 className="heading4 mb-7 uppercase text-hydw-blue">
          More television that we&apos;ve made
        </h4>
        <div className="page-grid gap-2.5 md:gap-5">
          <div className="thumbnail relative col-span-6 aspect-video bg-test-grey lg:col-span-4">
            <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
              {/* hover sequence to go here */}
            </div>
            <a href="/">{/* img thumbnail to go here here */}</a>
          </div>
          <div className="thumbnail relative col-span-6 aspect-video bg-test-grey lg:col-span-4">
            <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
              {/* hover sequence to go here */}
            </div>
            <a href="/">{/* img thumbnail to go here here */}</a>
          </div>
          <div className="thumbnail relative col-span-6 aspect-video bg-test-grey lg:col-span-4">
            <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
              {/* hover sequence to go here */}
            </div>
            <a href="/">{/* img thumbnail to go here here */}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
