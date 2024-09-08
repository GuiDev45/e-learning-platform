import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { LoginFormValues, loginSchema } from "../../models/schemas";
import { Input } from "../../components/Input";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            {...register("username")}
            errorMessage={errors.username?.message}
          />
        </div>
        <div>
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
            errorMessage={errors.password?.message}
          />
        </div>
        <div>
          <label>
            <input type="checkbox" {...register("rememberMe")} />
            Lembrar senha
          </label>
          <Link to="/lostPassword">Esqueci minha senha</Link>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div>
        <p>
          Não tem uma conta? <Link to="/register">Inscreva-se</Link>
        </p>
      </div>
    </div>
  );
}
