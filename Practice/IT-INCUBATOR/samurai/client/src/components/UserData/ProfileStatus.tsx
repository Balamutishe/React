import { FC, useState } from "react";
import { TUser } from "../../api/users/types.ts";
import { useMutateUserUpdate } from "../../hooks/api";
import c from "./Profile.module.css";

type TUserStatusProps = {
  profileStatus: string;
  profileUpdate: (updateProfileData: Partial<TUser>) => {
    payload: Partial<TUser>;
    type: "profileData/profileUpdate";
  };
};

export const ProfileStatus: FC<TUserStatusProps> = ({
  profileStatus,
  profileUpdate,
}) => {
  const [stateRedactorStatus, setStateRedactorStatus] = useState(false);
  const profileMutate = useMutateUserUpdate({ status: profileStatus });

  return (
    <div
      className={c.userStatusContainer}
      onDoubleClick={() => setStateRedactorStatus(!stateRedactorStatus)}
    >
      {!stateRedactorStatus && (
        <span className={c.userStatus}>
          {profileStatus === "" ? "You don't have a status yet" : profileStatus}
        </span>
      )}
      {stateRedactorStatus && (
        <input
          name={"status"}
          value={profileStatus}
          onChange={(e) => profileUpdate({ [e.target.name]: e.target.value })}
          onBlur={() => {
            profileMutate.mutate();
            setStateRedactorStatus(false);
          }}
          autoFocus={stateRedactorStatus}
        />
      )}
    </div>
  );
};
