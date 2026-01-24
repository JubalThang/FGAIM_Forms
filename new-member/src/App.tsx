import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl rounded-xl border bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
            1
          </span>
          <h2 className="text-lg font-semibold">
            Primary Assignee Information
          </h2>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Input label="First Name" required placeholder="First name" />
          <Input label="Middle Name" placeholder="Middle name" />
          <Input label="Last Name" required placeholder="Last name" />
        </div>

        {/* Alias */}
        <div className="mt-4 flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4" />
          <label className="text-sm">
            I have another name (maiden name, alias, etc.)
          </label>
        </div>

        {/* Contact Info */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          <Input
            label="Date of Birth"
            required
            placeholder="mm/dd/yyyy"
            type="date"
          />
          <Input label="Email" placeholder="email@example.com" type="email" />
          <Input label="Phone Number" placeholder="(123) 456-7890" />
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Marital Status</label>
            <select className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
              <option value="">Select</option>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
          </div>
        </div>

        {/* Address */}
        <div className="mt-6">
          <Input label="Address" placeholder="Street, City, State, ZIP" />
        </div>

        {/* Spiritual Life */}
        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium">
            Spiritual Life
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="spiritual" />
              Born Again
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="spiritual" />
              Water Baptism
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
