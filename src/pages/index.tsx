import { CoffeeList } from "@/components/CoffeeList";
import { Filter } from "@/components/Layout/Filter";
import { Sort } from "@/components/Layout/Sort";
import { PageHeading } from "@/components/PageHeading";

export default function Home() {
  return (
    <div>
      <PageHeading>Coffee Shop</PageHeading>
      <Sort />
      <Filter />
      <CoffeeList />
    </div>
  );
}
