export const QUERY = `
query{
    products{
      data{
              attributes{
          title
          description
          price
          slug
          image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
  
`;
