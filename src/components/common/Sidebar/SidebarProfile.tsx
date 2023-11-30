import { Profile } from "@/config/profile";
import { colors } from "@/styles/color";
import { SidebarSection } from "./SidebarSection";

export interface SidebarProfileProps {
  profile: Profile;
  className?: string;
}

export const SidebarProfile = ({ profile, className }: SidebarProfileProps) => (
  <SidebarSection title="プロフィール" className={className}>
    <div className="SidebarProfile__Wrapper">
      <img
        className="SidebarProfile__Avatar"
        src={profile.avatar}
        alt="筆者のアバター画像"
        width={64}
        height={64}
        decoding="async"
      />
      <div>
        <div className="SidebarProfile__Name">{profile.name}</div>
        <div className="SidebarProfile__Specialty">{profile.speciality}</div>
        <div>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${profile.name}のGitHubプロフィールページ`}
          >
            <img
              className="SidebarProfile__Icon"
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
    <style jsx>{`
      .SidebarProfile__Wrapper {
        display: flex;
      }

      .SidebarProfile__Avatar {
        border-radius: 50%;
        margin-right: 0.5rem;
        object-fit: cover;
        height: 4rem;
        width: 4rem;
      }

      .SidebarProfile__Name {
        font-weight: bold;
        margin-bottom: 4px;
      }

      .SidebarProfile__Specialty {
        font-size: 0.75rem;
        color: ${colors.black2};
        margin-bottom: 4px;
      }

      .SidebarProfile__Icon {
        height: 24px;
        width: 24px;
      }
    `}</style>
  </SidebarSection>
);
