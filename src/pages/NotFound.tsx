const NotFound = () => (
  <main className="container flex min-h-screen flex-col justify-center py-24">
    <p className="tabular text-sm font-medium text-graphite">404</p>
    <h1 className="mt-2 text-5xl font-extrabold tracking-tight md:text-7xl">This page doesn't exist.</h1>
    <p className="mt-6 text-lg text-graphite">The link may be out of date, or the address mistyped.</p>
    <a
      href="/"
      className="mt-10 inline-flex w-fit rounded-md bg-ink px-5 py-3 font-medium text-paper transition-colors hover:bg-cobalt"
    >
      Go to the homepage
    </a>
  </main>
);

export default NotFound;
