import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { TNormalForm, signUpSchema } from "./Validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(signUpSchema),
  });

  const onsubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = false;
  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className={cn("border border-gray-500 w-full p-5 max-w-5xl mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn("  grid gap-5 justify-items-center shadow-sm", {
          "grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-full"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            password
          </label>
          <input
            className="w-full "
            type="text"
            id="password"
            {...register("password", { minLength: 8 })}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div
          className={cn("grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2 col-start-2 ": double,
          })}
        >
          <div className="bg-red-500 w-full max-w-md  col-start-1 md:col-start-2 flex justify-end ">
            <Button className="w-full md:w-fit " type="submit">
              submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
