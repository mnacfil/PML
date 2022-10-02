### Welcome, Here's my answer to PIZZA EXAM

## NOTE

    all the text must be lowercase

# LIST OF TYPE OF PIZZA handle

    - hawaiian
    - chicken fajita
    - cheese mania
    - pepperoni feast
    - custom

# LIST OF SIZE OF PIZZA handle

    - small
    - medium
    - large

# LIST OF CRUST OF PIZZA handle

    - hand-tossed
    - thin crust
    - deep dish

# For the the toppings

    - Any item can be

### PIZZA Test Over (Images)

    - The screenshots contains the home, orders and stats page
    can be view in /client/my-app/Assets folder
    - You can see how this app works dynamically

# Back-end is already host in heroku (Working already)

    - These are all available endpoint
    1. https://pml-pizza-test.herokuapp.com/api/v1/orders/topping-stats
        - return the aggregation stats for most used topping
    2. https://pml-pizza-test.herokuapp.com/api/v1/orders/get-orders
        - return All order made
    3. https://pml-pizza-test.herokuapp.com/api/v1/orders/create-order
        - End point for Saving the order in database

    Note:
        - These endpoint are all available to everybody, no matter what port they
        are using,

# The database I use is MongoDb

# Front end

    - Clone the repo
    - Go to /client/my-app
    - npm install
    - npm start (start the app)

# PIZZA test check point

    1. Save every order in a database so that it can be reviewed later. (DONE);
    2. Save every toppings and give a sum of every topping used (DONE)
        - You can view on stats page (Where behind the scene there's aggregation
        pipiline that count how many topping were mostly used)
    3. Validate that the passed PML is a valid PML (DONE)
        - If you put wrong syntac of PML, for example you remove curly braces, remove white space, or remove the end element.
        - It will displa "INVALID PML"
    4. Have a filter to search for all orders by Size, Crust, Type and/or Number of Toppings
        - You can filter all the orders that are returning by adding query parameter

            - take note, you add one size || one crust || one type query parameter 
            OR you can combine size, type || type, crust || size, crust query parameter 
            OR all of them, see example below.

            - https://pml-pizza-test.herokuapp.com/api/v1/orders/get-orders?type=hawaiian&size=small&crust=thin crust
