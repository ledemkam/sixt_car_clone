
//https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv2yamm92myt07wbw2lvpcxs/master

import request, { gql } from "graphql-request"

export const getCarList = async () => {
 const query = gql`
 query cardList {
  carLists {
    createdAt
    publishedAt
    mark
    name
    plaze
    preise
    image {
      url
    }
    typeBoite
    type
    updatedAt
  }
}
 `
 const result = await request("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv2yamm92myt07wbw2lvpcxs/master ",query)
  return result
}