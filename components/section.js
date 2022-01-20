export default function Section({ children, title, id, color, shadow }) {
  return (
    <section
      className={`m-12 my-96 first:mt-64 last:mb-32 p-8 text-center rng-1 rounded-2xl ${color} shdow-[0_0px_80px_-15px_rgba(0,0,0,0.3)] ${shadow}`}
      id={id}
    >
      {/* <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-16"> */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-x-2 gap-y-20">
        <h1 className="text-4xl font-bold flex-none">{title}</h1>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}
