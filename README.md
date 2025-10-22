🎨 Canvix Agency

A modern and responsive digital agency website built with React.js and Tailwind CSS, showcasing professional services, portfolio projects, and contact details. Designed for agencies and freelancers to display their skills, experience, and creative work in a clean and elegant layout.

🚀 Features

💼 Multi-page design (Home, About, Services, Portfolio, Contact)

⚡ Fully responsive on all devices

🎨 Styled with Tailwind CSS for fast and modern UI

🧠 Clean and reusable components

📬 Functional Contact section with form

🌙 Smooth transitions and animations (optional with AOS/Framer Motion)


🧩 Example Component

function ServiceCard({ title, description, icon }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg duration-300 text-center">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

🧠 Key Concepts

React Router DOM for multipage navigation

Tailwind CSS for responsive and modern layouts

Component-based structure for scalability

SEO-friendly design and accessible UI

Portfolio section showcasing projects dynamically


🧰 Built With

React.js

Tailwind CSS

React Router DOM

JavaScript (ES6+)


📄 License

This project is open-source and available under the MIT License.