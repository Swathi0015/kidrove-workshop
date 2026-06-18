import { workshop } from "../data/workshop";

export default function WorkshopDetails() {
  const details = [
    { label: "Age Group", value: workshop.ageGroup },
    { label: "Duration", value: workshop.duration },
    { label: "Mode", value: workshop.mode },
    { label: "Fee", value: workshop.fee },
    { label: "Start Date", value: workshop.startDate },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Workshop Details
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {details.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-white p-6 text-center shadow"
            >
              <h3 className="text-gray-500">{item.label}</h3>

              <p className="mt-2 text-lg font-semibold">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}