type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="title-bar" />
    </div>
  );
};

export default Title;