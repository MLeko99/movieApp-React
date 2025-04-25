import { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: false, email: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false })); // Reset error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { name: !formData.name, email: !formData.email };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      console.log("Submitted Data:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "" }); // Reset form
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ borderColor: errors.name ? "red" : "black" }}
          />
          {errors.name && <p style={{ color: "red" }}>Name is required</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? "red" : "black" }}
          />
          {errors.email && <p style={{ color: "red" }}>Email is required</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      <h3>Entered Data:</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}
