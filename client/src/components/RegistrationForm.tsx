import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export default function RegistrationForm() {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/enquiry",
        data
      );

      setMessage(response.data.message);
      reset();
    } catch {
      setMessage("Something went wrong.");
    }
  };

  return (
    <section id="register" className="bg-slate-100 py-16 px-6">
      <div className="mx-auto max-w-lg rounded-xl bg-white p-8 shadow">
        <h2 className="mb-6 text-3xl font-bold">
          Register Now
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              placeholder="Name"
              className="w-full rounded-lg border p-3"
              {...register("name", {
                required: "Name is required",
              })}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <input
              placeholder="Email"
              className="w-full rounded-lg border p-3"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              placeholder="Phone Number"
              className="w-full rounded-lg border p-3"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
              })}
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {message && (
            <p className="text-center text-green-600">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}