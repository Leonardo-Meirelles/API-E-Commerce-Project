


# API - Leo E-Commerce

This is a simple E-Commerce API that consumes other APIs from two product suplyers. It can return a sinlge product or all the products list. It can also return all the product names from both suppliers. 

The API can receive an order with user name and email, and a list of products. It checks if the user already has its email in the database, and store each product as a different order in the database.

## Authors

- Leonardo Meirelles

## Contact me: Leonardo Meirelles

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leomeirelles/)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Leonardo-Meirelles)

[![GitLab](https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white)](https://gitlab.com/leonardo.dmeirelles)

## Techs I used

![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

Sequelize ORM and Express-Validator (didn't found a badge, sorry)

## Endpoints

```bash
  (MAIN URL) https://e-commerce-leo.herokuapp.com
```

```bash
  (POST) /orders
```

```bash
  (GET) /products/names
```

```bash
  (GET) /products/brazilian
```

```bash
  (GET) /products/brazilian/:id
```

```bash
  (GET) /products/european
```

```bash
  (GET) /products/european/:id
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/Leonardo-Meirelles/API-E-Commerce-Project
```

Go to the project directory

```bash
  cd project directory
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev 
```

  