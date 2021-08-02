# cart-app

This is a simple cart application. app user can login to the system see the list view of products. These products can be added to the cart. The current cart status is seen at the left side of the page. It has below features:

- hitting `add to cart` increases the quantity of product and seen in nav and cart section
- quantity can be changed using `up` and `down` arrow too.
- total price updates in checkout button
- Remove all link clears the cart item
- clicking on item link redirects to the product page

Technical details:

- authentication using firebase auth
- Product list is saved in firestore database collection
- these can be accessed using rest API via express. Here is the repo (https://github.com/pragyaPS/cart-app-api).
- the rest API only has `get` itemlist API.
- Used vuex for state management
- vue-router to route between login, register home and product page

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
