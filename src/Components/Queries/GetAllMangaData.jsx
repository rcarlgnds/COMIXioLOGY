import {gql} from "@apollo/client"

export const GET_ALL_MANGA = gql`
query getAllAnime($page:Int, $perPage:Int) {
  Page(page:$page, perPage:$perPage) {
    media(type:MANGA, sort:POPULARITY_DESC) {
      id
      averageScore
      coverImage {
        medium
      }
      title {
        english
      }
      description
      genres
      startDate {
        year
      }
    }
  }
}`

  