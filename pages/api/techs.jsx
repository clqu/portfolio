export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "/assets/techs/html.svg"
        },
        {
            "name": "Bootstrap",
            "src": "/assets/techs/bootstrap.svg"
        },
        {
            "name": "CSS",
            "src": "/assets/techs/css.svg"
        },
        {
            "name": "Javascript",
            "src": "/assets/techs/javascript.svg"
        },
        {
            "name": "Node.js",
            "src": "/assets/techs/nodejs.svg"
        },
        {
            "name": "Sass",
            "src": "/assets/techs/sass.svg"
        },
        {
            "name": "C#",
            "src": "/assets/techs/csharp.svg"
        },
        {
            "name": "Mongo DB",
            "src": "/assets/techs/mongodb.svg"
        },
        {
            "name": "Prisma",
            "src": "/assets/techs/prisma.svg"
        },
        {
            "name": "PHP",
            "src": "/assets/techs/php.svg"
        },
        {
            "name": "TailwindCSS",
            "src": "/assets/techs/tailwindcss.svg"
        },
        {
            "name": "Next.js",
            "src": "/assets/techs/nextjs.svg"
        },
        {
            "name": "MySQL",
            "src": "/assets/techs/mysql.svg"
        },
        {
            "name": "Express",
            "src": "/assets/techs/expressjs.svg"
        },
        {
            "name": "Fastify",
            "src": "/assets/techs/fastify.svg"
        },
        {
            "name": "React",
            "src": "/assets/techs/react.svg"
        },
        {
            "name": "Bulma",
            "src": "/assets/techs/bulmacss.svg"
        },
        {
            "name": "Git",
            "src": "/assets/techs/git.svg"
        },
        {
            "name": "Alpine.js",
            "src": "/assets/techs/alpinejs.svg"
        },
        {
            "name": "Yarn",
            "src": "/assets/techs/yarn.svg"
        },
        {
            "name": "Sails.js",
            "src": "/assets/techs/sailsjs.png"
        },
        {
            "name": "Figma",
            "src": "/assets/techs/figma.svg"
        },
        {
            "name": "Photoshop CC",
            "src": "/assets/techs/photoshop.svg"
        },
        {
            "name": "Github",
            "src": "/assets/techs/github.svg"
        },
        {
            "name": "Firebase",
            "src": "/assets/techs/firebase.svg"
        },
        {
            "name": "Heroku",
            "src": "/assets/techs/heroku.svg"
        },
        {
            "name": "pnpm",
            "src": "/assets/techs/pnpm.svg"
        },
        {
            "name": "Webpack",
            "src": "/assets/techs/webpack.svg"
        },
        {
            "name": "Iconscout",
            "src": "/assets/techs/iconscout.png"
        },

    ]
    res.status(200).json(techs)
}
