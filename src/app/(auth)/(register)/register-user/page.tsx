import RegisterUserForm from "@/features/auth/components/RegisterUserForm";

function RegisterPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-semibold">User Register</h1>
      <RegisterUserForm />
    </div>
  );
}

export default RegisterPage;
