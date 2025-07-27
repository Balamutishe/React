import { LoginButton } from "../LoginButton";
import { CurrentUser } from "../CurrentUser";
import { useMeQuery } from "@features/Auth/api";

export const AccountBar = () => {
  const { data, isFetching, isError } = useMeQuery();

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <LoginButton />;

  return (
    <div>
      <CurrentUser userData={data!} />
    </div>
  );
};
