import { CommunityCarousel } from "@/components/CommunityCarousel";
import { CommunityGrid } from "@/components/CommunityGrid";

export default function Community() {
  // Real community photos
  const socialPhotos = [
    // Images from /public/photos/spc-old-photos/
    { id: 0, url: "/photos/spc-old-photos/exec.jpeg", alt: "Executive team" },
    { id: 1, url: "/photos/spc-old-photos/indiasummit.jpg", alt: "India summit" },
    { id: 2, url: "/photos/spc-old-photos/india2024.jpg", alt: "India 2024" },
    { id: 3, url: "/photos/spc-old-photos/summit2024.jpg", alt: "Summit 2024" },
    { id: 4, url: "/photos/spc-old-photos/banquet.jpg", alt: "Banquet" },
    { id: 5, url: "/photos/spc-old-photos/banquet2.jpg", alt: "Banquet 2" },
    { id: 6, url: "/photos/spc-old-photos/retreat_fa24.jpg", alt: "Fall 2024 retreat" },
    { id: 7, url: "/photos/spc-old-photos/sixflags.jpg", alt: "Six Flags" },
    { id: 8, url: "/photos/spc-old-photos/sixflags2.jpg", alt: "Six Flags 2" },
    { id: 9, url: "/photos/spc-old-photos/hiking.jpg", alt: "Hiking" },
    // Local images from /public/photos/community/
    { id: 10, url: "/photos/community/olympics.png", alt: "Community Olympics" },
    { id: 11, url: "/photos/community/retreat_1.png", alt: "Retreat" },
    { id: 12, url: "/photos/community/BANQUET_1.png", alt: "Banquet" },
    { id: 13, url: "/photos/community/BIGLITTLE_REVEAL_1.png", alt: "Big Little Reveal" },
    { id: 14, url: "/photos/community/ICE_SKATING_1.png", alt: "Ice Skating" },
    { id: 15, url: "/photos/community/GIRLS_BEACH_1.png", alt: "Girls Beach Day" },
  ];

  return (
    <>
      <section className="container-inline pt-24 pb-20 max-w-6xl mx-auto">
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-10 tracking-tighter-title text-[#003262]">Community</h1>

        {/* Culture Section */}
        <div className="mb-16 bg-berkeley-blue-light rounded-lg p-8">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title text-[#003262]">Our Culture</h2>
          <div className="max-w-3xl">
            <p className="font-helvetica text-zinc-700 text-lg leading-relaxed mb-4">
              At SPC, we believe that great products come from great communities. We foster a culture of collaboration, curiosity, and continuous learning where every member has the opportunity to grow and make an impact.
            </p>
            <p className="font-helvetica text-zinc-700 text-lg leading-relaxed">
              Our community is built on three pillars: Education, Experience, and Community. We come together to learn, build, and support each other as we navigate the world of product management.
            </p>
          </div>
        </div>

        {/* Moments Carousel/Grid */}
        <div>
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title text-[#003262]">Moments</h2>
          {/* Mobile: Grid collage */}
          <div className="md:hidden">
            <CommunityGrid images={socialPhotos} />
          </div>
          {/* Desktop: Carousel */}
          <div className="hidden md:block">
            <CommunityCarousel images={socialPhotos} />
          </div>
        </div>
      </section>
    </>
  );
}

