import Link from "next/link";

export default function BlogList() {
  return (
    <main className="w-auto h-screen">
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-black dark:text-white text-center text-4xl font-bold">
          All posts
        </h1>

        <div className="mx-auto mt-10 flex flex-wrap gap-10 justify-center relative">
          {Array.from(Array(7).keys()).map((number, index) => (
            <Link
            key={`posts-${index}`}
              href={"/blog/post"}
              className="w-[300px] h-[290px] overflow-hidden rounded border border-transparent shadow-lg hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800 cursor-pointer"
            >
              <div className="h-40 bg-red-400">image</div>
              <div className="p-3 w-auto ">
                <h2 className="text-base font-bold text-center">
                  Title
                </h2>
                <p className="text-sm mt-2 text-center">
                  Você não vai acreditar no que essa IA pode fazer
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
