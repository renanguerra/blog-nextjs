import Link from "next/link";

export default function PageBlog() {
  return (
    <main className="w-auto h-screen">
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-center text-4xl font-bold">
          A title sufficient big to break on final of container - A title
          sufficient big to break on final of container
        </h1>

        <h3 className="text-center text-lg mt-8">Last updated: 04/04/2023</h3>

        <div className="flex mx-auto w-max mt-5 gap-3">
          <div className="bg-gray-400 text-white w-fit p-1 rounded-md">
            React
          </div>
          <div className="bg-gray-400 text-white w-fit p-1 rounded-md">
            Typescript
          </div>
          <div className="bg-gray-400 text-white w-fit p-1 rounded-md">
            NextJs
          </div>
        </div>

        <div className="mx-auto w-max mt-10">Article content</div>
      </section>
    </main>
  );
}
