function About() {
  return (
    <section className="flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-6 text-neutral-800 tracking-tight">
        About <span className="text-yellow-500">TrendiQ</span>
      </h1>
      <p className="text-neutral-600 max-w-2xl leading-relaxed ">
        Welcome to TrendiQ, your ultimate destination for{" "}
        <span className="font-semibold">fashion</span>,{" "}
        <span className="font-semibold">electronics</span>, and{" "}
        <span className="font-semibold">jewelry</span>. Our store is dedicated
        to providing products that inspire and elevate your lifestyle.
      </p>
      <p className="text-neutral-600 max-w-2xl mt-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        finibus lectus quis nulla scelerisque, in venenatis sapien bibendum.
        Fusce fringilla, nunc id blandit convallis, odio justo tempor elit, nec
        aliquam felis metus euismod nisi. Nulla facilisi.
      </p>
      <p className="text-neutral-600 max-w-2xl mt-6 leading-relaxed">
        Curabitur ut dignissim metus. Quisque in tellus in justo laoreet
        ultrices. Nullam placerat erat in quam congue, ac malesuada purus
        fringilla. Proin at consequat nulla, ut viverra risus. Integer in
        pharetra ex. Nam fringilla nunc nec ex vestibulum, et ultricies arcu
        fermentum. Thank you for choosing us!
      </p>
    </section>
  );
}

export default About;
