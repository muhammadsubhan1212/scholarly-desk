import Seo from '../components/Seo';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you requested does not exist on Assignment Solution." />
      <section className="container-app flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-accent">404</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-secondary">Page not found</h1>
        <p className="mt-3 max-w-md text-muted">
          That route is not part of Assignment Solution. Head home or browse services to continue.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button to="/">Go home</Button>
          <Button to="/services" variant="outline">
            View services
          </Button>
        </div>
      </section>
    </>
  );
}
