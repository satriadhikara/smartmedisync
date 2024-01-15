import Image from "next/image";

export const Button = ({ value, icon, onclick, type }) => {
  return (
    <>
      <button
        onClick={onclick ? onclick : null}
        type={type ? type : null}
        className="bg-white hover:bg-rose-700 hover:text-white text-rose-700 py-2 px-4 rounded-full h-9 w-80 font-light text-base transition"
      >
        {icon ? <Image src={icon} className="inline mr-3" /> : null}
        <span>{value}</span>
      </button>
    </>
  );
};
