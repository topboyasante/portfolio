import Image from "next/image";
import heroImg from "../../assets/nk.jpg";
import Links from "../ui/Links";

function Hero() {
  return (
    <section className="my-8">
      <section className="w-[100px] h-[100px] bg-[#e7e6e6] dark:bg-[#121212] rounded-3xl flex justify-center items-center">
        <Image
          src={heroImg}
          alt="hero"
          className="h-full object-cover md:object-contain"
        />
      </section>
      <br />
      <section>
        <h1 className="text-3xl md:text-4xl font-semibold">
          Nana Kwasi Asante
        </h1>
        <p className="text-[#777777] lg:text-xl">Software Engineer</p>
        <br />
        <Links />
      </section>
      <hr className="my-8 border-dashed border-[#121212] dark:border-[#404040]"/>
    </section>
  );
}

export default Hero;
