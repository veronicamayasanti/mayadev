import project1 from "../assets/projects/todolist.png";
import project2 from "../assets/projects/cerdasbersama.png";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Saya seorang Full-Stack JavaScript Developer dengan pengalaman membangun aplikasi web modern. Saya mahir dalam Node.js, Express.js, MySQL, dan React.js untuk mengembangkan aplikasi dari sisi back-end hingga front-end.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "freelancer",
    company: "Freelancer",
    description: `Mengembangkan dan memelihara aplikasi web menggunakan JavaScript, React.js, dan Node.js.
    Membangun RESTful API dan mengintegrasikannya dengan database MySQL.
    Menerapkan desain modern dan responsif menggunakan Tailwind CSS.
    Berkolaborasi dengan klien dan pemangku kepentingan untuk memahami kebutuhan, menentukan persyaratan, dan menyusun jadwal proyek.
    Secara aktif mengeksplorasi teknologi baru seperti Framer Motion untuk meningkatkan pengalaman pengguna.`,
    technologies: ["Javascript", "React.js", "Express.js", "MySql", "Tailwind"]
  },
];

export const PROJECTS = [
  {
    title: "Todo-List Website",
    image: project1,
    description:
      "Todo List dengan React Js dan Tailwind, dengan fitur tambah, hapus, edit tugas dan coret tanda tugas selesai, data tersimpan di localstorage",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "CerdasBersama adalah Web Kursus Sederhana yang dibangun menggunakan React dan CSS murni , dengan Vite sebagai build tool untuk pengembangan yang cepat dan efisien.",
    technologies: ["HTML", "CSS", "React"],
  },
];

export const CONTACT = {
  address: "Tenjo City, Bogor, Jawa Barat Indonesia ",
  phoneNo: "083117459361",
  email: "veronicamayasanti@gmail.com",
};
