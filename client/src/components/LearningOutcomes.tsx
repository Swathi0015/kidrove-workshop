import { CheckCircle } from "lucide-react";
import { workshop } from "../data/workshop";

export default function LearningOutcomes() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-8 text-3xl font-bold">
          Learning Outcomes
        </h2>

        <div className="space-y-4">
          {workshop.outcomes.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="mt-1 text-green-600" />

              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}