export const Input = ({ label, type, onchange }) => {
  return (
    <>
      {label ? (
        <label className="font-light text-xs m-1 text-white" htmlFor="email">
          {label}
        </label>
      ) : null}
      <input
        onChange={onchange ? onchange : null}
        className="rounded-lg cursor-pointer bg-pink-900 text-white font-light text-xs px-6 py-3.5"
        type={type ? type : "text"}
      />
    </>
  );
};
