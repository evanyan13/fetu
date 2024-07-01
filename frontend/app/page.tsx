import Image from "next/image";
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { getCars } from "@/utils";

export default async function Home() {
  const allCars = await getCars();
  const isDataEmpty = !Array.isArray(allCars) || !allCars.length || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div id="discover" className="max-width padding-x padding-y mt-12">

        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>

        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      
      { isDataEmpty ? (
        <section className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no result</h2>
          <p>{allCars?.message}</p>
        </section>  
        ) : (
          <section>
            <div className="home__car-wrapper grid gap-4">
              {allCars.map((car) => (
                <CarCard car={car}/>
              ))}
            </div>
          </section>
        )
      }
      </div>
    </main>
  );
}
