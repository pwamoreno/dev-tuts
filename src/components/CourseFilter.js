export default function CourseFilter({ selected, setSelected, categories }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {["All", ...categories].map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm border ${
            selected === category
              ? "bg-tumeric text-white cursor-pointer"
              : "bg-cream text-forest hover:bg-tumeric hover:text-white cursor-pointer"
          }`}
          onClick={() => setSelected(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
