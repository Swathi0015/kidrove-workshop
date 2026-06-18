import { workshop } from "../data/workshop";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {workshop.title}
        </h1>

        <p className="text-lg md:text-xl mb-8">
          {workshop.description}
        </p>

        <a
          href="#register"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:scale-105"
        >
          Enroll Now
        </a>
      </div>
    </section>
  );
}