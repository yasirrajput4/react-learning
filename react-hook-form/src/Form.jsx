import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function handleData(data) {
    // Simulating an async API call (2-second delay)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Submitted Successfully!", data);
    reset();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 font-sans">
      <form
        onSubmit={handleSubmit(handleData)}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-md"
      >
        {/* First Name */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="mb-1 block text-sm font-semibold text-gray-700"
          >
            First Name:
          </label>
          <input
            id="firstName"
            {...register("firstName", {
              required: "First name is required.",
              minLength: {
                value: 4,
                message: "Minimum 4 characters required.",
              },
              maxLength: { value: 8, message: "Maximum 8 characters allowed." },
            })}
            type="text"
            placeholder="Enter First Name"
            className={`w-full rounded-md border p-2.5 text-sm outline-none transition-colors ${
              errors.firstName
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Middle Name */}
        <div className="mb-4">
          <label
            htmlFor="middleName"
            className="mb-1 block text-sm font-semibold text-gray-700"
          >
            Middle Name:
          </label>
          <input
            id="middleName"
            {...register("middleName", {
              required: "Middle name is required.",
              minLength: {
                value: 4,
                message: "Minimum 4 characters required.",
              },
              maxLength: { value: 8, message: "Maximum 8 characters allowed." },
            })}
            type="text"
            placeholder="Enter Middle Name"
            className={`w-full rounded-md border p-2.5 text-sm outline-none transition-colors ${
              errors.middleName
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.middleName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.middleName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="mb-1 block text-sm font-semibold text-gray-700"
          >
            Last Name:
          </label>
          <input
            id="lastName"
            {...register("lastName", {
              required: "Last name is required.",
              minLength: {
                value: 4,
                message: "Minimum 4 characters required.",
              },
              maxLength: { value: 8, message: "Maximum 8 characters allowed." },
            })}
            type="text"
            placeholder="Enter Last Name"
            className={`w-full rounded-md border p-2.5 text-sm outline-none transition-colors ${
              errors.lastName
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-md bg-blue-600 p-3 text-base font-semibold text-white transition-opacity hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Form;
