Resources used : Bryan's office hour's recording helped me to finish this lab and also i referred lessons 2 and 3.

# Build reusable React components using TypeScript by using interfaces.

An AlertBox component

A UserProfileCard component

A ProductDisplayCard component

## Type Declarations (types/index.ts)

Define reusable types and interfaces using TypeScript.

These help in ensuring proper typing of props passed to the components.

## UserProfileCard Component
 
  Displays user info like name, email, and role, with an optional avatar and edit button.
  
## AlertBox Component

Reusable alert component that shows a message with different types (success, error, etc.)

## ProductDisplayCard Component

Displays product info like name, price, description, and stock status with optional Add to Cartlogic.

## App.tsx

I imported three components. And create (AlertBox, UserProfileCard, and productdiaplay card).

Created a handler function that triggers an alert when editing a user.

Created a user object with details to pass as props to the UserProfileCard.

Created a handleAddToCart function to displays an alert when product is added to the cart.

Created a product object with all the necessary fields.

Then I used JSX to render the three components, passing props to each component.

## I was able to display:

User profile card with name ,email and role.

A sucess alert message.

A product display card with image , description, price and stock status and an add to cart button.
 








