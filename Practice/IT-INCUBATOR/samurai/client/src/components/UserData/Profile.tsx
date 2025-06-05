import { FC } from "react";
import { useMutateUserLogout } from "../../hooks/api";
import c from "./Profile.module.css";
import { TProfileProps } from "./ProfileContainer.tsx";
import { ProfileStatus } from "./ProfileStatus.tsx";

export const Profile: FC<TProfileProps> = ({
  profile,
  authState,
  profileUpdate,
}) => {
  const profileLogout = useMutateUserLogout();

  return (
    <div className={c.userData}>
      <img src={profile.userImg} alt="UserImg" className={c.userImg} />
      <div className={c.userDesc}>
        <div className={c.userDescHeader}>
          <span>{profile.username}</span>
          <span>{authState ? "Online" : "Offline"}</span>
          <ProfileStatus
            profileStatus={profile.status}
            profileUpdate={profileUpdate}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <div>UserDescription</div>
          <div>UserDescription</div>
          <div>UserDescription</div>
          <div>UserDescription</div>
        </div>
        <button
          onClick={() => profileLogout.mutate()}
          disabled={profileLogout.isPending}
        >
          Выйти
        </button>
      </div>
    </div>
  );
};
