import { redirect } from "next/navigation";

type LegacyProjectRedirectProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyProjectRedirect({ params }: LegacyProjectRedirectProps) {
  const { slug } = await params;
  redirect(`/projects/${slug}`);
}
