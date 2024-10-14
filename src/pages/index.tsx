import { CoffeeList } from "@/components/CoffeeList";
import { PageHeading } from "@/components/PageHeading";

export default function Home() {
  return (
    <div>
      <PageHeading>Coffee Shop</PageHeading>
      <CoffeeList />
    </div>
  );
}
