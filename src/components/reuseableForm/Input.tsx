export const Input = ({ label, register, errors, type }) => {
  return (
    <div className="w-full max-w-md">
      <label className="block" htmlFor="password">
        {label}
      </label>
      <input className="w-full " type={type} id="password" {...register} />
      {errors.password && (
        <span className="text-xs text-red-500">{errors.password.message}</span>
      )}
    </div>
  );
};
