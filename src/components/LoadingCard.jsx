function LoadingCard() {
  return (
    <div className="flex flex-col items-center gap-5  bg-neutral-50 pb-10 rounded-lg overflow-hidden">
      <div className="w-full h-56 bg-neutral-300"></div>
      <div className="h-6 bg-neutral-300 w-3/4"></div>
      <div className=" h-4 w-1/3 bg-neutral-300 "></div>
      <div className=" h-10 w-1/2 bg-neutral-300 rounded-md"></div>
    </div>
  );
}

export default LoadingCard;
