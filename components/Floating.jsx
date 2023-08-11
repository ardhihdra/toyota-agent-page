import Image from "next/image";

export function AskWhatsapp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=6281324740047"
      className="animate-bounce fixed right-10 bottom-10 cursor-pointer text-center drop-shadow-xl"
      target='_blank'
      rel='noreferrer'
    >
      <Image
        src="/whatsapp.png"
        width={80}
        height={80}
        alt="contact"
      >
      </Image>
      <p className="font-sans text-stone-100">Tanya Kami</p>
    </a>
  )
}