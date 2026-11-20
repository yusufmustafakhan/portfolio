import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center pt-32 pb-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">404</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-10">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </main>
  );
}
