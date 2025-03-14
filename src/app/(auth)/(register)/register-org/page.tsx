import RegisterOrgForm from "@/features/auth/components/RegisterOrgForm";

function RegisterPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-semibold">Org Register</h1>
      <RegisterOrgForm />
    </div>
  );
}

export default RegisterPage;
