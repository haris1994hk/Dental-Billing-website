export default function Resources() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 animate-fade-in">Resources</h1>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white rounded-xl shadow p-6 animate-fade-in-up">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Guides</h2>
          <p className="text-blue-700">Step-by-step guides to help you master insurance verification and EOB posting.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 animate-fade-in-up">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">FAQs</h2>
          <p className="text-blue-700">Find answers to the most common questions about our tools and services.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 animate-fade-in-up">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Articles</h2>
          <p className="text-blue-700">Read articles on best practices, industry trends, and tips for dental billing success.</p>
        </div>
      </div>
    </div>
  );
}
