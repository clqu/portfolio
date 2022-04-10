export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "/static/techs/html.svg"
        },
        {
            "name": "Bootstrap",
            "src": "/static/techs/bootstrap.svg"
        },
        {
            "name": "CSS",
            "src": "/static/techs/css.svg"
        },
        {
            "name": "Javascript",
            "src": "/static/techs/javascript.svg"
        },
        {
            "name": "Node.js",
            "src": "/static/techs/nodejs.svg"
        },
        {
            "name": "Sass",
            "src": "/static/techs/sass.svg"
        },
        {
            "name": "C#",
            "src": "/static/techs/csharp.svg"
        },
        {
            "name": "Mongo DB",
            "src": "/static/techs/mongodb.svg"
        },
        {
            "name": "Prisma",
            "src": "/static/techs/prisma.svg"
        },
        {
            "name": "PHP",
            "src": "/static/techs/php.svg"
        },
        {
            "name": "TailwindCSS",
            "src": "/static/techs/tailwindcss.svg"
        },
        {
            "name": "Next.js",
            "src": "/static/techs/nextjs.svg"
        },
        {
            "name": "MySQL",
            "src": "/static/techs/mysql.svg"
        },
        {
            "name": "Express",
            "src": "/static/techs/expressjs.svg"
        },
        {
            "name": "Fastify",
            "src": "/static/techs/fastify.svg"
        },
        {
            "name": "React",
            "src": "/static/techs/react.svg"
        },
        {
            "name": "Bulma",
            "src": "/static/techs/bulmacss.svg"
        },
        {
            "name": "Git",
            "src": "/static/techs/git.svg"
        },
        {
            "name": "Alpine.js",
            "src": "/static/techs/alpinejs.svg"
        },
        {
            "name": "Yarn",
            "src": "/static/techs/yarn.svg"
        },
        {
            "name": "Sails.js",
            "src": "/static/techs/sails.svg"
        },
        {
            "name": "Figma",
            "src": "/static/techs/figma.svg"
        },
        {
            "name": "Photoshop CC",
            "src": "/static/techs/photoshop.svg"
        },
        {
            "name": "Github",
            "src": "/static/techs/github.svg"
        },
        {
            "name": "Firebase",
            "src": "/static/techs/firebase.svg"
        },
        {
            "name": "Heroku",
            "src": "/static/techs/heroku.svg"
        },
        {
            "name": "pnpm",
            "src": "/static/techs/pnpm.svg"
        },
        {
            "name": "Webpack",
            "src": "/static/techs/webpack.svg"
        },
        {
            "name": "Iconscout",
            "src": "/static/techs/iconscout.png"
        },
        {
            "name": "Typescript",
            "src": "/static/techs/typescript.svg"
        },
        {
            "name": "Nest.js",
            "src": "/static/techs/nestjs.svg"
        },


    ]
    res.status(200).json(techs)
}
