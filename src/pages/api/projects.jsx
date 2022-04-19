export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://i.imgur.com/2XwKCNZ.png",
      name: "vCodes",
      description:
        "Do you want to expand and improve your Discord bot? Here vCodes are here for you!",
      link: "https://vcodes.xyz",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    },
    {
      id: 2,
      image: "https://i.imgur.com/ISIp3Ba.png",
      name: "Nustry",
      description:
        "Provide a more secure search, prevent your data from being retained.",
      link: "https://nustry.com",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    },
    {
      id: 3,
      image: "https://i.imgur.com/Yjddu0X.png",
      name: "Desion",
      description: "Discover the community that suits you best with Desion.",
      link: "https://desion.me",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    },
    {
      id: 4,
      image: "https://i.imgur.com/oRjmLlV.png",
      name: "Allegro",
      description:
        "Cheer up your server with Allegro, keep members on the server. The power is in your hands :)",
      link: "https://allegrobot.me",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    }
  ];
  res.status(200).json(data);
};
