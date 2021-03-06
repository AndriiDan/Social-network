import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  // якщо не profile, то відобразить крутилку
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src="data:image/jpeg;base64,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" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />

        {/* відобразити статус конкретного користувача (з сервера) */}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

        <div>Про мене: {profile.aboutMe}</div>
        <div>Мої контакти:
          <div>{profile.contacts.facebook}</div>
          <div>{profile.contacts.website}</div>
          <div>{profile.contacts.vk}</div>
          <div>{profile.contacts.twitter}</div>
          <div>{profile.contacts.instagram}</div>
          <div>{profile.contacts.youtube}</div>
          <div>{profile.contacts.github}</div>
          <div>{profile.contacts.mainLink}</div>
        </div>
        <div>{profile.fullName}</div>

        ava + description
      </div>

    </div>
  );
}

export default ProfileInfo;