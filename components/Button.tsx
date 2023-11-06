import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flex items-center m-auto gap-2 rounded-full ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24}></Image>}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
