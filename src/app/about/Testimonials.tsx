export default function Testimonials() {
  const items = [
    {
      quote:
        'We use Dental Billing Aid for our insurance verification at our office and we are so happy. It takes the stress away from our front desk and gives us more time to focus on our patients.',
      author: 'Midtown Dental',
      img: '/images/s1.webp',
    },
    {
      quote:
        'Dental Billing Aid offers a lot of great services. We have our own way of doing things and their Team learned every bit of it and did a great job! And doing it every day!',
      author: 'Downtown Clinic',
      img: '/images/s2.webp',
    },
    {
      quote:
        'Their responsiveness and knowledge have helped our practice reduce denials and speed up reimbursements. Highly recommended.',
      author: 'Smile Center',
      img: '/images/s3.webp',
    },
  ];

  return (
    <section className="mx-[calc(50%_-_50vw)] w-screen overflow-hidden my-12">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-sm uppercase text-center text-slate-500 mb-3">Testimonials</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Here’s What Our Clients Have To Say</h2>

        <div className="flex gap-6 overflow-x-auto pb-6">
          {items.map((it, i) => (
            <div key={i} className="min-w-[320px] bg-white rounded-xl shadow-lg p-8 relative">
              <div className="text-6xl text-blue-600 leading-none mb-4">“</div>
              <p className="text-slate-600 mb-6">{it.quote}</p>
              <div className="flex items-center gap-3">
                <div className="flex gap-1 text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <img src={it.img} alt={it.author} className="w-12 h-12 rounded-full ring-4 ring-white object-cover shadow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
