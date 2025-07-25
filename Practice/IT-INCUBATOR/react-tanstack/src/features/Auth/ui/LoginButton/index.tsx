import { useLoginMutation } from "@features/Auth/api";

export const LoginButton = () => {
  const mutation = useLoginMutation();

  const callbackUrl = "http://localhost:5173/oauth/callback";

  const handleLoginClick = () => {
    window.addEventListener("message", handleOauthMessage);

    window.open(
      `https://musicfun.it-incubator.app/api/1.0/auth/oauth-redirect?callbackUrl=${callbackUrl}`,
      "apihub-oauth2",
      "width=500, height=600"
    );
  };

  const handleOauthMessage = (event: MessageEvent) => {
    window.removeEventListener("message", handleOauthMessage);

    if (event.origin !== "http://localhost:5173") {
      console.warn("origin not match");
      return;
    }

    const code = event.data.code;

    if (!code) {
      console.warn("code not found");
      return;
    }

    mutation.mutate({ code, redirectUri: callbackUrl });
  };

  return <button onClick={handleLoginClick}>Login with APIHUB</button>;
};
