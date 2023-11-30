import { ComponentProps, FC, PropsWithChildren } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { css } from "@emotion/react";

type LinkProps = PropsWithChildren<{
  decoration?: boolean;
}> &
  ComponentProps<"a"> &
  Pick<NextLinkProps, "href" | "prefetch">;

export const Link: FC<LinkProps> = ({
  decoration = true,
  href,
  children,
  prefetch,
  className,
  ...rest
}) => {
  return (
    <>
      <NextLink href={href} prefetch={prefetch} passHref legacyBehavior>
        <a
          {...rest}
          css={decoration ? undefined : nonDecoration}
          className={className}
        >
          {children}
        </a>
      </NextLink>
    </>
  );
};

const nonDecoration = css`
  text-decoration: none;
  color: inherit;
`;