export default async function Page() {
    return (
        <main className="overflow-hidden largepadding bg-hydw-yellow wrapper text-hydw-charcoal">
          <section className="page-grid">
            <div className="col-span-11 md:col-span-9 xl:col-span-8 text-left midspace">
                <h1 className="mt-7 lg:mt-0 heading2 uppercase text-hydw-blue">title</h1>
                <p className="mt-3 body">hydw credit here eg: Production, Writing, Directing & Performance</p>
            </div>
            <div className="smallspace col-span-12 aspect-video bg-test-grey">
              {/* vimeo link to go in here */}
            </div>
          </section>
          <section className="page-grid smallspace">
            <p className="col-span-12 md:col-span-10 lg:col-span-6 body">
            Description here
            </p>
            <div className="col-span-12 md:col-span-10 lg:col-span-4 lg:col-start-9">
              {/* dev note: should this be some kind of repeater that they can add any credit line for? */}
              <div className="mt-7 lg:mt-0">
                  <h6 className="smallbody uppercase">title</h6>
                  <p className="body">Credit</p>
              </div>
              <div className="mt-7">
                  <h6 className="smallbody uppercase">title</h6>
                  <p className="body"><a href="">Credit</a></p>
              </div>
            </div>
          </section>
          <section className="largespace">
            <h4 className="heading4 uppercase mb-7 text-hydw-blue">More Grouse House work</h4>
            <div className="page-grid gap-2.5 md:gap-5">
              <div className="col-span-6 lg:col-span-4 bg-test-grey aspect-video thumbnail relative">
                  <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
                    {/* hover sequence to go here */}
                  </div>
                  <a href="/">{/* img thumbnail to go here here */}</a>
              </div>
              <div className="col-span-6 lg:col-span-4 bg-test-grey aspect-video thumbnail relative">
                  <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
                    {/* hover sequence to go here */}
                  </div>
                  <a href="/">{/* img thumbnail to go here here */}</a>
              </div>
              <div className="col-span-6 lg:col-span-4 bg-test-grey aspect-video thumbnail relative">
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
