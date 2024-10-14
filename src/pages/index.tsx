import { CoffeeList } from "@/components/CoffeeList";
import { FilterPanel } from "@/components/FilterPanel";
import { SortPanel } from "@/components/SortPanel";
import { PageHeading } from "@/components/PageHeading";

export default function Home() {
  return (
    <div>
      <PageHeading>Coffee Shop</PageHeading>
      <SortPanel />
      <FilterPanel />
      <CoffeeList />
    </div>
  );
}
