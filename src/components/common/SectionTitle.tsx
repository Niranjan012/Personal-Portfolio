type SectionTitleProps = {
  children: string;
  className?: string;
};

const SectionTitle = ({ children, className = "" }: SectionTitleProps) => {
  return (
    <h2
      className={`block text-center mx-auto text-3xl md:text-4xl font-bold ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
