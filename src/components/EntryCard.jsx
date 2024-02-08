  // src/components/EntryCard.js

function EntryCard({ title, subtitle, dateRange, description }) {
  return (
    <div className="max-w-full bg-white rounded-lg shadow-md overflow-hidden m-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {/* Placeholder for an image or icon if you want */}
          {/* <img className="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Placeholder"> */}
        </div>
        <div className="p-8">
          <div className="flex justify-between">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{subtitle}</div>
            <div className="text-gray-600 text-sm">{dateRange}</div>
          </div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</a>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default EntryCard;

  