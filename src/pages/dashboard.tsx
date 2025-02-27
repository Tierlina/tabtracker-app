import { Button } from '@heroui/button';
import { Card, CardBody } from '@heroui/card';
import { Link } from '@heroui/link';

import { title } from '@/components/primitives';

export default function DashboardPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Dashboard</h1>
        <Card>
          <CardBody>
            <Button showAnchorIcon as={Link} href="/addTab">
              Add Tab
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
