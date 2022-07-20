import styled from 'styled-components';



export const StyledArtistDetail = styled.div`
  padding: 0 1em;
  margin: 1em auto;
  width: 100%;
  h2{
    font-size: 16px;
    text-align: left;
    border-bottom: 2px solid lightgrey;
    padding-bottom: 5px;
    margin-bottom: 1em;
  }
  ul{
    padding: 0;
    li{
      list-style: none;
      height: 200px;
      border-bottom: 1px solid lightgrey;
      padding: 1em 0;
      &:last-child{
        border-bottom: 0;
      }
      img{
        margin-bottom: 1em;
      }
      p{
        margin: 0;
        font-size: 14px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
`;
