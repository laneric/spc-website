import Image from "next/image";

export default function Community() {
  // Real community photos
  const socialPhotos = [
    // Images from spcberkeley.org/assets/img/about/
    { id: 0, url: "https://spcberkeley.org/assets/img/about/exec.JPG", alt: "Executive team" },
    { id: 1, url: "https://spcberkeley.org/assets/img/about/indiasummit.jpg", alt: "India summit" },
    { id: 2, url: "https://spcberkeley.org/assets/img/about/india2024.jpg", alt: "India 2024" },
    { id: 3, url: "https://spcberkeley.org/assets/img/about/summit2024.jpg", alt: "Summit 2024" },
    { id: 4, url: "https://spcberkeley.org/assets/img/about/banquet.jpg", alt: "Banquet" },
    { id: 5, url: "https://spcberkeley.org/assets/img/about/banquet2.jpg", alt: "Banquet 2" },
    { id: 6, url: "https://spcberkeley.org/assets/img/about/retreat_fa24.jpg", alt: "Fall 2024 retreat" },
    { id: 7, url: "https://spcberkeley.org/assets/img/about/sixflags.jpg", alt: "Six Flags" },
    { id: 8, url: "https://spcberkeley.org/assets/img/about/sixflags2.jpg", alt: "Six Flags 2" },
    { id: 9, url: "https://spcberkeley.org/assets/img/about/hiking.jpg", alt: "Hiking" },
    // Local images from /public/photos/community/
    { id: 10, url: "/photos/community/olympics.png", alt: "Community Olympics" },
    { id: 11, url: "/photos/community/retreat_1.png", alt: "Retreat" },
  ];

  return (
    <>
      <section className="container-inline pt-24 pb-20 max-w-6xl mx-auto">
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-10 tracking-tighter-title">Community</h1>

        {/* Culture Section */}
        <div className="mb-16">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title">Our Culture</h2>
          <div className="max-w-3xl">
            <p className="font-helvetica text-zinc-700 text-lg leading-relaxed mb-4">
              At SPC, we believe that great products come from great communities. We foster a culture of collaboration, curiosity, and continuous learning where every member has the opportunity to grow and make an impact.
            </p>
            <p className="font-helvetica text-zinc-700 text-lg leading-relaxed">
              Our community is built on three pillars: Education, Experience, and Community. We come together to learn, build, and support each other as we navigate the world of product management.
            </p>
          </div>
        </div>

        {/* Social Photos Grid */}
        <div>
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title">Moments</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {socialPhotos.map((photo) => (
              <div key={photo.id} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

