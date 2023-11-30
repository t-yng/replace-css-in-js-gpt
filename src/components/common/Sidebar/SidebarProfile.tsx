import { Profile } from "@/config/profile";
import { colors } from "@/styles/color";
import { SidebarSection } from "./SidebarSection";
import { css } from "@emotion/react";

export interface SidebarProfileProps {
  profile: Profile;
  className?: string;
}

export const SidebarProfile = ({ profile, className }: SidebarProfileProps) => (
  <SidebarSection title="プロフィール" className={className}>
    <div css={sidebarProfileWrapper}>
      <img
        css={sidebarProfileAvatar}
        src={profile.avatar}
        alt="筆者のアバター画像"
        width={64}
        height={64}
        decoding="async"
      />
      <div>
        <div css={sidebarProfileName}>{profile.name}</div>
        <div css={sidebarProfileSpecialty}>{profile.speciality}</div>
        <div>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${profile.name}のGitHubプロフィールページ`}
          >
            <img
              css={sidebarProfileIcon}
              src={profile.github.icon}
              aria-hidden="true"
              alt="GitHubのロゴ"
              width={24}
              height={24}
              decoding="async"
            />
          </a>
        </div>
      </div>
    </div>
  </SidebarSection>
);

const sidebarProfileWrapper = css`
  display: flex;
`;

const sidebarProfileAvatar = css`
  border-radius: 50%;
  margin-right: 0.5rem;
  object-fit: cover;
  height: 4rem;
  width: 4rem;
`;

const sidebarProfileName = css`
  font-weight: bold;
  margin-bottom: 4px;
`;

const sidebarProfileSpecialty = css`
  font-size: 0.75rem;
  color: ${colors.black2};
  margin-bottom: 4px;
`;

const sidebarProfileIcon = css`
  height: 24px;
  width: 24px;
`;