const SubHeading = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className="lg:text-5xl text-3xl text-white font-bold pb-0 decoration-sky-600 hover:underline hover:cursor-pointer">
        {text}
      </h1>
    </div>
  );
};

export default SubHeading;
