import Container from "./components/ui/Container";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/reuseableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTest>();

  const onsubmit = (data: FieldValues) => {
    console.log(data);
  };
  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });
  type TTest = z.infer<typeof TestSchema>;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onsubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
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
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <Input
            type="email"
            errors={errors}
            label={"email"}
            register={register("email")}
          ></Input>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;
