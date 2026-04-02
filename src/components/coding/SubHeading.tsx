const SubHeading = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className="lg:text-8xl text-6xl text-white font-bold pb-0 underline decoration-teal-500">
        {text}
      </h1>
    </div>
  );
};

export default SubHeading;
