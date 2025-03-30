"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Menu, ShoppingBag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import { MdWorkspacePremium } from "react-icons/md";
import { GiAncientSword } from "react-icons/gi";
import { MdOutlineStyle } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import { FaUser } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <HeritageSection />
        <CollectionSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 border-b border-gold/20 bg-black/80 backdrop-blur-md">
//       <div className="container flex h-16 items-center justify-between px-4 md:px-6">
//         <Link href="/" className="flex items-center gap-2">
//           <div className="relative h-10 w-10">
//             <Image src="/placeholder.svg?height=40&width=40" alt="Logo" fill className="object-contain" />
//           </div>
//           <span className="font-serif text-xl font-medium tracking-wider text-gold">Kofia by Nagaty</span>
//         </Link>

//         <nav className="hidden md:flex md:gap-6 lg:gap-10">
//           {["Collection", "Heritage", "Craftsmanship", "Journal"].map((item) => (
//             <Link
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-sm font-medium tracking-wider text-gray-300 transition-colors hover:text-gold"
//             >
//               {item}
//             </Link>
//           ))}
//           <Link
//             href="#shop"
//             className="flex items-center gap-1 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold transition-all hover:bg-gold/20"
//           >
//             <ShoppingBag className="h-4 w-4" />
//             <span>Shop</span>
//           </Link>
//         </nav>

//         <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
//           <Menu className="h-6 w-6 text-gold" />
//           <span className="sr-only">Open menu</span>
//         </Button>

//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex flex-col w-full h-[100vh] bg-black p-6"
//           >
//             <div className="flex items-center justify-between">
//               <Link href="/" className="flex items-center gap-2">
//                 <div className="relative h-10 w-10">
//                 </div>
//                 <span className="font-serif text-xl font-medium tracking-wider text-gold">Kofia by Nagaty</span>
//               </Link>
//               <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
//                 <X className="h-6 w-6 text-gold" />
//                 <span className="sr-only">Close menu</span>
//               </Button>
//             </div>
//             <nav className="mt-8 flex flex-col gap-4">
//               {["Collection", "Heritage", "Craftsmanship", "Journal"].map((item) => (
//                 <Link
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-lg font-medium tracking-wider text-gray-300 transition-colors hover:text-gold"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//               <Link
//                 href="#shop"
//                 className="mt-4 flex w-full items-center justify-center gap-1 rounded-full border border-gold/50 bg-gold/10 px-4 py-3 text-lg font-medium text-gold transition-all hover:bg-gold/20"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <ShoppingBag className="h-5 w-5" />
//                 <span>Shop Collection</span>
//               </Link>
//             </nav>
//           </motion.div>
//         )}
//       </div>
//     </header>
//   )
// }
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Variants for menu animations
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.07,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <header className="sticky top-0 z-50 items-center  border-b border-gold/20 bg-black/80  backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex items-center justify-center h-10 w-10">
            <SiAntdesign className="w-8 h-8" />
          </div>
          <span className="font-serif text-xl font-medium tracking-wider text-gold">Kofia by Nagaty</span>
        </Link>

        <nav className="hidden items-center md:flex md:gap-6 lg:gap-10">
          {["Collection", "Heritage", "Craftsmanship", "Journal"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wider text-gray-300 transition-colors hover:text-gold"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#shop"
            className="flex items-center gap-1 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold transition-all hover:bg-gold/20"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Shop</span>
          </Link>
        </nav>

        {/* Custom animated hamburger button */}
        <button
          className="group relative z-[60] flex h-10 w-10 flex-col items-center justify-center rounded-full border border-gold/30 bg-black/70 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <motion.span
            className="absolute h-[2px] w-5 bg-gold"
            animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute h-[2px] w-5 bg-gold"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute h-[2px] w-5 bg-gold"
            animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </button>

        {/* Mobile menu with enhanced animations */}
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-gradient-to-b w-full h-[100vh] from-black to-navy/95"
          initial="closed"
          
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          style={{ display: isMenuOpen ? "flex" : "none" }}
        >
      

          <div className="flex items-center justify-between p-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <Link href="/" className="flex items-center gap-2">
                <div className="relative flex items-center justify-center h-10 w-10">
                              <SiAntdesign className="w-8 h-8" />

                </div>
                <span className="font-serif text-xl font-medium tracking-wider text-gold">Kofia by Nagaty</span>
              </Link>
            </motion.div>
          </div>

          <motion.nav className="flex flex-1 flex-col justify-center gap-6 p-6">
            {["Collection", "Heritage", "Craftsmanship", "Journal"].map((item, index) => (
              <motion.div key={item} variants={itemVariants} className="overflow-hidden">
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="group flex items-center text-2xl font-light tracking-wider text-gray-200 transition-colors hover:text-gold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3 inline-block h-[1px] w-6 bg-gold/50 transition-all group-hover:w-10 group-hover:bg-gold"></span>
                  {item}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="mt-8">
              <Link
                href="#shop"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-6 py-4 text-lg font-medium text-gold backdrop-blur-sm transition-all hover:bg-gold/20"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Shop Collection</span>
              </Link>
            </motion.div>
          </motion.nav>

          <motion.div className="p-6 text-center text-sm text-gold/60" variants={itemVariants}>
            © {new Date().getFullYear()} Kofia by Nagaty Luxury Scarves
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-b from-black via-navy to-black opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-70"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/30 px-3 py-1 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-gold"></span>
              <span className="text-xs font-medium uppercase tracking-wider text-gold">Luxury Egyptian Textiles</span>
            </motion.div>

            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              <span className="block font-light">Timeless Elegance,</span>
              <span className="mt-1 block bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
                Pharaonic Heritage
              </span>
            </motion.h1>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-md text-lg text-gray-300"
            >
              Exquisite scarves that blend ancient Egyptian artistry with modern luxury. Each piece tells a story of heritage,
              craftsmanship, and timeless beauty.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="#collection"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-amber-600 px-6 py-3 text-sm font-medium text-black transition-all hover:from-gold hover:to-gold"
              >
                Explore Collection
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#heritage"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-black/50 px-6 py-3 text-sm font-medium text-gold backdrop-blur-sm transition-all hover:bg-gold/10"
              >
                Our Heritage
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-gold/20 via-gold/10 to-transparent blur-3xl"></div>
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full border border-gold/30 bg-black/30 p-6 backdrop-blur-md">
              <Image
                src="https://pngimg.com/d/scarf_PNG43.png"
                alt="Luxurious Egyptian Scarf"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </motion.section>
  )
}

function HeritageSection() {
  return (
    <motion.section
      id="heritage"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative bg-black py-20 md:py-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-navy opacity-30 blur-3xl"></div>
        <div className="absolute -right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gold opacity-10 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-gold/50"></div>
            <span className="text-sm font-medium uppercase tracking-wider text-gold">Our Heritage</span>
            <div className="h-px w-8 bg-gold/50"></div>
          </div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            A Legacy of <span className="text-gold">Ancient Craftsmanship</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-gray-300 md:text-lg"
          >
            For millennia, Egyptian textiles have been revered for their exceptional quality and artistry. Our scarves
            continue this tradition, weaving ancient symbols and techniques into contemporary luxury.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Ancient Techniques",
              description:
                "Our artisans employ weaving methods passed down through generations, preserving the authentic craft of ancient Egypt.",
              icon: <GiAncientSword fontSize={30} />,
            },
            {
              title: "Symbolic Patterns",
              description:
                "Each design incorporates hieroglyphic elements and symbols that carry profound meaning from Egyptian mythology.",
              icon: <MdOutlineStyle fontSize={30} />,
            },
            {
              title: "Premium Materials",
              description:
                "We source only the finest Egyptian cotton and silk, renowned worldwide for their exceptional quality and softness.",
              icon: <MdWorkspacePremium fontSize={30} />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg border border-gold/20 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-black/70"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 transition-all group-hover:bg-gold/10"></div>

              <div className="relative flex items-center justify-center mb-4 h-16 w-16 overflow-hidden rounded-full border border-gold/30 p-2">
               {item.icon}
                
              </div>

              <h3 className="relative mb-3 font-serif text-xl font-medium text-gold">{item.title}</h3>
              <p className="relative text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function CollectionSection() {
  return (
    <motion.section
      id="collection"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-navy py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <div className="mb-2 inline-flex items-center gap-2">
              <div className="h-px w-8 bg-gold/50"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-gold">Exclusive Collection</span>
            </div>

            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-3xl font-light tracking-tight text-white sm:text-4xl"
            >
              Discover Our <span className="text-gold">Signature Pieces</span>
            </motion.h2>
          </div>

          <Link
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-black/20 px-5 py-2 text-sm font-medium text-gold backdrop-blur-sm transition-all hover:bg-black/40"
          >
            View All Collection
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Ancient&quots;Grace",
              description:
                "Inspired by the elegant profile of ancient, this scarf features subtle hieroglyphic patterns.",
              price: "EGP",
              image: "https://pngimg.com/d/scarf_PNG43.png",
            },
            {
              name: "Ancient&quot;s Legacy",
              description: "Rich navy and gold tones blend with ancient royal symbols in this statement piece.",
              price: "EGP",
              image: "https://pngimg.com/d/scarf_PNG43.png",
            },
            {
              name: "Lotus Whisper",
              description: "Delicate lotus motifs float across a midnight background, symbolizing rebirth and purity.",
              price: "EGP",
              image: "https://pngimg.com/d/scarf_PNG43.png",
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-lg border border-gold/20 bg-black/40 backdrop-blur-sm transition-all hover:border-gold/40"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className=" object-cover mt-12 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-white">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-gold">{product.price}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-gold/50 text-gold hover:bg-gold/10 hover:text-gold"
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function TestimonialsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-black py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-gold/50"></div>
            <span className="text-sm font-medium uppercase tracking-wider text-gold">Testimonials</span>
            <div className="h-px w-8 bg-gold/50"></div>
          </div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-3xl font-light tracking-tight text-white sm:text-4xl"
          >
            What Our <span className="text-gold">Clients Say</span>
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                "The craftsmanship is exceptional. Wearing these scarves feels like draping yourself in a piece of history with a modern twist.",
              author: "Mohamed",
              title: "Art Curator",
              avatar: "/placeholder.svg?height=80&width=80",
            },
            {
              quote:
                "The attention to detail in the hieroglyphic patterns is remarkable. Each time I wear it, I discover new elements in the design.",
              author: "Ahmed",
              title: "Fashion Designer",
              avatar: "/placeholder.svg?height=80&width=80",
            },
            {
              quote:
                "Not only beautiful but meaningful. The symbolism woven into each scarf makes it more than just an accessory—it&quot;s a conversation piece.",
              author: "Mostafa",
              title: "Historian",
              avatar: "/placeholder.svg?height=80&width=80",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-lg border border-gold/20 bg-navy/30 p-6 backdrop-blur-sm"
            >
              <div className="absolute -right-4 -top-4 text-6xl text-gold/10">&quot;</div>

              <p className="relative mb-6 text-gray-300">&quot;{testimonial.quote}&quot;</p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center  overflow-hidden rounded-full border border-gold/30">
               <FaUser className="w-6 h-6" />

                </div>

                <div>
                  <h4 className="font-medium text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gold">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function CtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-b from-navy to-black py-20 md:py-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-gold opacity-10 blur-3xl"></div>
        <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-navy opacity-30 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Join Our <span className="text-gold">Exclusive Collection</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-gray-300 md:text-lg"
          >
            Subscribe to receive updates on new collections, limited editions, and exclusive events. Be the first to
            experience our newest creations inspired by ancient Egyptian artistry.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-xs rounded-full border border-gold/30 bg-black/50 px-6 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold sm:w-64"
            />

            <Button className="w-full rounded-full bg-gradient-to-r from-gold to-amber-600 px-8 py-3 text-black hover:from-gold hover:to-gold sm:w-auto">
              Subscribe
            </Button>
          </motion.div>

          <p className="mt-4 text-xs text-gray-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex items-center justify-center h-10 w-10">
                            <SiAntdesign className="w-8 h-8" />

              </div>
              <span className="font-serif text-xl font-medium tracking-wider text-gold">Kofia by Nagaty</span>
            </Link>

            <p className="mt-4 text-sm text-gray-400">
              Luxury Egyptian scarves blending ancient heritage with contemporary design.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            {[
              {
                title: "Shop",
                links: ["Collection", "New Arrivals", "Best Sellers", "Gift Cards"],
              },
              {
                title: "Company",
                links: ["Our Story", "Craftsmanship", "Sustainability", "Press"],
              },
              {
                title: "Support",
                links: ["FAQ", "Shipping & Returns", "Care Guide", "Contact Us"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-gold">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-sm text-gray-300 transition-colors hover:text-gold">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-gold">Connect</h3>
            <p className="mb-4 text-sm text-gray-300">Follow us for exclusive content and updates</p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Pinterest"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5 rounded-full bg-current"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/20 pt-8 text-sm text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} Kofia by Nagati Luxury Scarves. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
