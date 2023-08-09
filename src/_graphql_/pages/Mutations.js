// testing services not available now....

// import React from 'react';
// import { gql, useMutation } from '@apollo/client';

// const CREATE_PRODUCT = gql`
//   Mutations CreateProduct($name: String!, $quantityPerUnit: Int!) {
//     createProduct(record: {
//       name: $name,
//       quantityPerUnit: $quantityPerUnit,
//     })
//     {
//       record {
//         name
//       }
//     }
//   }
// `

// const Mutations = () => {
//   const [createProduct, {loading, data, error}] = useMutation(CREATE_PRODUCT, {
//     variables: {
//       name: 'hotdog',
//       quantityPerUnit: 4,
//     }
//   })
//   return (
//     <div>
//       <button onClick={() => createProduct()}>new product</button>
//       {loading && <div>loading...</div>}
//       {error && <div>wrong...</div>}
//       {data && <div>success...</div>}
//     </div>
//   )
// }

// export default Mutations
