import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

function ContactPage() {
  return (
    <section className="flex flex-col items-center py-12 px-6 text-center">
      <h1 className="text-4xl font-extrabold mb-6 text-neutral-800 tracking-tight">
        Get in Touch
      </h1>
      <p className="text-neutral-600 max-w-xl leading-relaxed">
        We’d love to hear from you! Whether you have questions, feedback, or
        just want to connect, reach out and our team will get back to you
        promptly.
      </p>
      <div className="flex flex-col gap-4 mt-8  text-neutral-700">
        <p className="flex items-center gap-2">
          <span className="font-semibold flex gap-2">
            {" "}
            <MailIcon /> Email:
          </span>{" "}
          lorem@trendiq.com
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold  flex gap-2">
            <PhoneCall /> Phone:
          </span>{" "}
          +25190000000
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold flex gap-2">
            <HomeIcon /> Address:
          </span>{" "}
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <p className="text-neutral-500 max-w-xl mt-8 leading-relaxed">
        Follow us on social media to stay updated with our latest collections
        and exclusive offers!
      </p>
    </section>
  );
}

export default ContactPage;
