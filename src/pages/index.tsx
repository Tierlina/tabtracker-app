import { Link } from '@heroui/link';
import { Button } from '@heroui/button';

export default function LoginPage() {
  return (
    <section className="flex flex-col items-left justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className="text-7xl mt-20 mb-10">Welcome to TabTracker!</h1>
        <Button
          showAnchorIcon
          as={Link}
          color="success"
          href="/login"
          variant="solid"
        >
          Login
        </Button>
      </div>
    </section>
  );
}
