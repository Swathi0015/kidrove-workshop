import { workshop } from "../data/workshop";

export default function FAQ() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-8 text-3xl font-bold">FAQs</h2>

        <div className="space-y-4">
          {workshop.faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-xl bg-white p-5 shadow"
            >
              <summary className="cursor-pointer font-semibold">
                {faq.question}
              </summary>

              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}